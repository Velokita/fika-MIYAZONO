import React, { useContext, useState } from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";
import { CartContext } from "../../context/CartContext";

export default function ItemCount({item}) {    

  const [counter, setCounter] = useState(0);

  const value= useContext(CartContext);

  const addToCart = value.onAdd;
  const totalCartItems = value.checkQtyCartItem;
  
   const handleIncrement = () => { 
     ( counter < item.stock ) 
     ? setCounter(counter + 1) :
      alert("ItemCount-No Puede continuar agregando más cantidad.\nLlegó al limite de stock disponible "
       + item.stock);
    } 

  const handleDecrement = () => {
    if (counter > 0)
      setCounter(counter - 1);
  };

    return (
      <div >
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <Button variant="outline-secondary" onClick={handleDecrement}>
              <i className="fas fa-minus"></i>
            </Button>
          </InputGroup.Prepend>
          <FormControl
            placeholder={counter}
            aria-label="Cantidad"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button variant="outline-secondary" onClick={handleIncrement}  >
              <i className="fas fa-plus"></i>
            </Button>
          </InputGroup.Append>
        </InputGroup>
        { counter > 0 &&
          <Button variant="info" onClick={() => addToCart(item, counter)}>Agregar al Carrito</Button>
        }
      </div>
    );
  
}
