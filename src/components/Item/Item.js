import React, { useState } from "react";

//Import componentes  
import ItemCount from "../ItemCount/ItemCount";
import ItemDetail from "./ItemDetail";

//Import componentes externos
import { Card, Button } from "react-bootstrap";
/** Componente Item  */

const Item = ({ item, onAdd }) => {
  const [flag, setFlag] = useState(false);
 
  const handleDetail = () => {
    setFlag(!flag);
  };
    
  return (
    <div className="Cards">
      <Card border="secondary" style={{ width: "18rem" }} id={item.id}>
        <Card.Body>
          <Card.Title>{item.name} </Card.Title>
          <Button onClick={handleDetail}>
            {flag ? "Ocultar Detalle" : "Ver Detalle"}
          </Button>
          {flag === true && <ItemDetail item={item} />}
          <ItemCount item={item}  onAdd={onAdd}/>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Item;
