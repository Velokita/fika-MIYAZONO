import React, { useState } from "react";
/**Componentes */
import Navigation from "./components/NavBar/Navigation";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
/**Vistas */
import Home from "./views/Home/Home";
import Contact from "./views/Contact/Contact";
import About from "./views/About/About";
import Catalogo from "./views/Catalogo/Catalogo";
import MyCart from "./views/MyCart/MyCart";
/**Estilos */
import "./App.css";

function App (){

  const [cartItems, setCartItems] = useState([]);

  const onAdd = (item, qty) => {
    console.log(" ONADD !! cartItems");
    setCartItems([...cartItems, { ...item, quantity: qty }]);
    console.log(" ONADD ", cartItems);
  }

  const clearCart = () => { // Remover todos los items
    setCartItems = [];
  }

  const removeItem = (itemId) => {
    setCartItems(cartItems.filter(item => item.id !== itemId))
  }

  return (
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/catalogo/:categoryid" component={Catalogo} onAdd={onAdd}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/my-cart" component={MyCart} cartItems={cartItems} onAdd={onAdd}
           removeItem={removeItem} clearCart={clearCart}></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );

}

export default App;
