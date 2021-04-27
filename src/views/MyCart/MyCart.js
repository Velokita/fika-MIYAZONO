import React from "react";
import {Jumbotron, Container, Alert} from 'react-bootstrap'
import ShoppingCart from "../../components/ShoppingCart/ShoppingCart";

function MyCart({ cartItems, onAdd }) { 
 
  return (
    <Jumbotron>
      <Container>         
      {cartItems.length > 0  ?(
      <ShoppingCart onAdd={onAdd} cartItems={cartItems}/>
      ) : (
        <Alert variant="danger">
        <Alert.Heading>Tu carrito está vacío!</Alert.Heading>
      </Alert>
      
      )
      }
      
      </Container>
    </Jumbotron>
  );
}

export default MyCart;
