import React, { useState, createContext } from "react";

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);

  const countCartItems = cartItems.length > 0 ?
    cartItems.reduce((total, b) => total + b.quantity, 0)
    : 0;

  const totalPrice = cartItems.length > 0 ?
    cartItems.reduce((total, b) => total + (b.price * b.quantity), 0)
    : 0;

  const checkQtyCartItem = (item) => { 
    if(cartItems.length > 0) {
      let qty = (cartItems.filter( it => it.id === item.id ))[0] ; 
      return qty;
    }else return 0;
  };

  const onAdd = (item, qty) => {
    console.log(" cartItems   ", cartItems  ); 
    console.log("checkQtyCartItem(item)  ", checkQtyCartItem(item) );
    console.log("(checkQtyCartItem(item) + qty) <= item.stock ", 
    (checkQtyCartItem(item) + qty) <= item.stock); 

    if ((checkQtyCartItem(item) + qty) <= item.stock) {
      item.quantity = item.quantity + qty;
      
      setCartItems(curr => [...curr, item]);
    } else {
      alert("cartContext - No Puede continuar agregando más cantidad.\nLlegó al limite de stock disponible "
        + item.stock);
    }
  };

  const clearCart = () => {
    // Remover todos los items
    setCartItems([]);
  };

  const removeItem = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const value = {
    products: cartItems,
    onAdd: onAdd,
    removeItem: removeItem,
    clearCart: clearCart,
    countCartItems: countCartItems,
    totalPrice: totalPrice,
    checkQtyCartItem: checkQtyCartItem,
  };

  return (
    <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
  );
};
