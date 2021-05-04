import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const ShoppingCart = () => {
  const value = useContext(CartContext);
  const productos = value.products;
  console.log( "Shopping productos", productos);
  const countCartItems =  value.countCartItems;
  const total =  value.totalPrice;

  return (
    <div>
      <h1>My Shopping cart</h1>
      <>
      {productos.map((item) => (
        <ul> {item.name} x  {item.quantity} - ${item.price} </ul> 
      ))}
    </>

    </div>
  );
};

export default ShoppingCart;
