import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import { getProductData } from "../data/productStore";
import { Button, Row, Col } from "react-bootstrap";

function CartProducts({ id, quantity }) {
  const cart = useContext(CartContext);
  const productData = getProductData(id);
  return (
    <>
      <Row>
        <Col>
          <h5>{productData.title}</h5>
        </Col>
        <Col>
          <p>{quantity} items</p>
        </Col>
        <Col>
          <Button
            variant="danger"
            size="sm"
            onClick={() => cart.deleteFromCart(id)}
          >
            Remove
          </Button>
        </Col>
      </Row>

      <hr />
    </>
  );
}

export default CartProducts;
