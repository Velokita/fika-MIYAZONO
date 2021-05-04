import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export function CartWidget() {
  const value = useContext(CartContext); 
  
  const countCartItems =  value.countCartItems;
  
  return (
    <div>
      <i className="fas fa-shopping-cart" placeholder="Mi Carrito" >
        ({ countCartItems})
      </i>
    </div>
  );
}

export default CartWidget;
