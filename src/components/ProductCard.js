import { Card, Button, Form, Row, Col } from "react-bootstrap";
import { CartContext } from "../CartContext";
import { useContext } from "react";

function ProductCard(props) {
  const product = props.product;
  const cart = useContext(CartContext);
  const productQuantity = cart.getProductQuantity(product.id);
  // console.log(cart.items);
  return (
    <Card>
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>${product.price}</Card.Text>
        {productQuantity > 0 ? (
          <>
            <Col sm="6">
              <Button
                className="mx-2"
                onClick={() => cart.removeOneFromCart(product.id)}
              >
                -
              </Button>
              <Form.Label className="m-2">
                In Cart: {productQuantity}{" "}
              </Form.Label>
              <Button
                className="mx-2"
                onClick={() => cart.addOneToCart(product.id)}
              >
                +
              </Button>
            </Col>
            <Button
              variant="danger"
              onClick={() => cart.deleteFromCart(product.id)}
            >
              Remove
            </Button>{" "}
          </>
        ) : (
          <Button
            variant="primary"
            onClick={() => cart.addOneToCart(product.id)}
          >
            Add to Cart
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
