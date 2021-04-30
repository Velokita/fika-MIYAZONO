import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export function CartWidget ()  {
  
const value = useContext(CartContext);
const [products] = value.products;

console.log("cartWidget", products)
  
    return (
      <div>
        <i className="fas fa-shopping-cart" placeholder="Mi Carrito">
          
          ({ products.cartSize })
          </i> 
        
        
      </div>
    );
 
}

export default CartWidget;