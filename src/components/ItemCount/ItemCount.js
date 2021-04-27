import React, { useState } from "react";
import { Button, InputGroup, FormControl } from "react-bootstrap";

export default function ItemCount({item, onAdd}) {    

  const [counter, setCounter] = useState(0);

  // const onAddItem = () => { // agregar cierta cantidad de un ítem al carrito
  //   product.quantity=counter;
  //    setProduct(product);
  //    onAdd(...cart, product)
  // };

  const handleIncrement = () => { 
     (counter < item.stock) ? setCounter(counter + 1) :
      alert("No Puede continuar agregando más cantidad.\nLlegó al limite de stock disponible "
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
          <Button variant="info" onClick={onAdd} >Agregar al Carrito</Button>
        }
      </div>
    );
  
}
