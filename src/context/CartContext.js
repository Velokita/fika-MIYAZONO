import React, { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  
  const onAdd = (item, qty) => {
    item.quantity = qty ; 
    console.log("onadd item before " , cartItems)
    setCartItems([...cartItems,  item]); 
  };

  const clearCart = () => {
    // Remover todos los items
    setCartItems = [];
  };

  const removeItem = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const cartSize = (cart) => {
    let size = 0;
    size = size + cart.map((item)=> item.quantity)
console.log("size")
    return size ;

  }

  const value = {
    products: [cartItems, setCartItems],
    onAdd: onAdd,
    removeItem: removeItem,
    clearCart: clearCart,
    cartSize:cartSize
  }

  return (
    <CartContext.Provider value={value}>
      {props.children}
    </CartContext.Provider>
  );
};
