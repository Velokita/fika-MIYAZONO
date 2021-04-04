import React, { Component } from 'react'

import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import ItemUI from './components/ItemUI/ItemUI';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

import './App.css';

class App extends Component  {
  handleClick = () => {
    alert('Me hiciste click!');
  };

  render(){
  return (  
    <div className="App">     
     <NavBar/>       
     <ItemListContainer mensaje="Tomate un Break con " imagen="./images/fikaDrink.png"/>
     <ItemUI name="Fika Tropical Mango"
            img="./images/fikaShake.jpg"
            stock="10"
            about="Licuado de de Mango, Banana y leche de coco."
            action="{this.handleClick}"/>
     <Footer/>  
    </div>
    
    
  );
}
}

export default App;
