import React from "react";

//Import componentes externos
import { Card, Button, InputGroup, FormControl } from "react-bootstrap";

const ItemUI = ({ img, name, stock, about, action }) => {
  return (
    <div className="Cards"> 
      <Card onClick={action} border="secondary" style={{ width: '18rem' }}>
        <Card.Img variant="top" src={img}  width={200}
    height={220} />
        <Card.Body>
        <Card.Title>{name}</Card.Title>
          <Card.Text>{about}</Card.Text>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <Button variant="outline-secondary">
                <i className="fas fa-minus"></i>
              </Button>
            </InputGroup.Prepend>
            <FormControl
              placeholder="0"
              aria-label="Cantidad"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
              <Button variant="outline-secondary">
                <i className="fas fa-plus"></i>
              </Button>
            </InputGroup.Append>
          </InputGroup>
          <Button variant="info">Agregar al Carrito</Button>{' '}

        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemUI;
