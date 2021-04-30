import React , { useContext } from "react";
import { Jumbotron, Container, Alert } from 'react-bootstrap'
import ShoppingCart from "../../components/ShoppingCart/ShoppingCart";
import { CartContext } from "../../context/CartContext";

const MyCart = () => { 
   const  value = useContext(CartContext)

  return (
    <Jumbotron>
      <Container>         
      {value.cartItems.length > 0  ?(
      <ShoppingCart onAdd={value.onAdd} cartItems={value.cartItems}/>
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
