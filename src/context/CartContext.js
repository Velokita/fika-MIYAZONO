import React, { useState, createContext } from "react";

export const CartContext = React.createContext();

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

  const value = {
    products: [cartItems, setCartItems],
    onAdd: onAdd,
    removeItem: removeItem,
    clearCart: clearCart,
  }

  return (
    <CartContext.Provider value={value}>
      {props.children}
    </CartContext.Provider>
  );
};
