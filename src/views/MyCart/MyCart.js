import React from "react";
import {Jumbotron, Container, Alert} from 'react-bootstrap'

function MyCart() {
  return (
    <Jumbotron>
      <Container>
     <Alert variant="danger">
        <Alert.Heading>Tu carrito está vacío!</Alert.Heading>
      </Alert>
      </Container>
    </Jumbotron>
  );
}

export default MyCart;
