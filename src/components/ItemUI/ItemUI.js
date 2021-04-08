import React from "react";
import ItemCount from "../ItemCount/ItemCount";

//Import componentes externos
import { Card } from "react-bootstrap";

const ItemUI = ({ img, name, stock, about}) => {
  return (
    <div className="Cards">
      <Card      
        border="secondary"
        style={{ width: "18rem" }}
      >
        <Card.Img variant="top" src={img} width={150} height={250} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{about}</Card.Text>
          <ItemCount stock={stock}/>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemUI;
