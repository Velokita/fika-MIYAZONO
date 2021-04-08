import React, { Component } from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap"; 
  
export default class ItemCount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,      
      
    };
  }
 
  handleIncrement = () => {      
    if( this.state.count < this.props.stock) 
        this.setState({ count: this.state.count + 1 });        
        else{ 
            console.log ("Llegó al limite de stock disponible. " + this.props.stock);
           
        }  
  };

  handleDecrement = () => {
    if( this.state.count > 0)
        this.setState({ count: this.state.count - 1 });
  };
   

  render() {
      
    return (
        <div >
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <Button variant="outline-secondary" onClick={this.handleDecrement}>
              <i className="fas fa-minus"></i>
            </Button>
          </InputGroup.Prepend>
          <FormControl
            placeholder={this.state.count}
            aria-label="Cantidad"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button variant="outline-secondary" onClick={this.handleIncrement}  >
              <i className="fas fa-plus"></i>
            </Button>
          </InputGroup.Append>
        </InputGroup>
        <Button variant="info">Agregar al Carrito</Button>{" "}
      </div>
    );
  }
}
