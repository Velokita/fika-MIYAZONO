import React, { Component } from 'react'

import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer'; 
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

import './App.css';

class App extends Component  {

  render(){
  return (  
    <div className="App">     
     <NavBar/>       
     <ItemListContainer mensaje="Tomate un Break con " imagen="./images/fikaDrink.png"/>
      <Footer/>  
    </div>
    
    
  );
}
}

export default App;
