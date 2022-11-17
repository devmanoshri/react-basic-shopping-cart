import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProductCard from "../components/ProductCard";
import { productsArray } from "../data/productStore";

function Store() {
  return (
    <>
      <Container>
        <h1 align="center" className="p-3">
          Welcome to Our Store!
        </h1>
        <Row xs={1} md={3} className="g-4">
          {productsArray.map((item, index) => {
            return (
              <Col align="center" key={index}>
                <ProductCard product={item} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default Store;
