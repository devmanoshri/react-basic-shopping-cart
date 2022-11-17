import React, { useContext } from "react";
import { Button, Container, Navbar, Modal, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { CartContext } from "../CartContext";
import CartProducts from "./CartProducts";
function NavbarMenu() {
  const [show, setShow] = useState(false);
  const handelClose = () => setShow(false);
  const handelShow = () => setShow(true);

  const cart = useContext(CartContext);
  //console.log(cart.items);

  //   let totalQuantity = 0;
  //   if (cart.items.length) {
  //     cart.items.map((item) => {
  //       return (totalQuantity += item.quantity);
  //     });
  //   }

  const totalQuantity = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  return (
    <>
      <Navbar bg="light" expand="sm">
        <Container>
          <Navbar.Brand href="/">E-Commerce Store</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Button onClick={handelShow}> Cart {totalQuantity} Items</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={show} onHide={handelClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {totalQuantity > 0 ? (
            <>
              {cart.items.map((item, index) => {
                return (
                  <CartProducts
                    key={index}
                    quantity={item.quantity}
                    id={item.id}
                  />
                );
              })}
              <Row>
                <Col>
                  <h2>Total : {cart.getTotalCost().toFixed(2)}</h2>
                </Col>
                <Col className="pe-0">
                  <Button variant="success"> Checkout</Button>
                </Col>
              </Row>
            </>
          ) : (
            <h4>This Cart has no items!</h4>
          )}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NavbarMenu;
