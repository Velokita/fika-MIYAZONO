import React, { Component, useContext} from "react";
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
/**Context */
import {CartProvider} from "./context/CartContext";
/**Estilos */
import "./App.css";

class App extends Component{
  constructor(props){
    super(props);
  }
  render(){
  return (
    <CartProvider>
    <Router>
      <div className="App">
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/catalogo/:categoryid" component={Catalogo}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/my-cart" component={MyCart}></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
    </CartProvider>
  );

}
}
export default App;
