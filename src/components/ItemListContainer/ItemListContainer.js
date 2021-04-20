import React, { useEffect, useState, useParams } from "react";
//import componentes
import ItemList from "../Item/ItemList";
import { Data } from "../../utils/Data";

//Import componentes externos
import { Row, Col, Image, Jumbotron, Container } from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner'

import "./ItemListContainer.css";

function ItemListContainer({ greeting, imagen }) {
  const [itemList, setItems] = useState([]); 

  
  useEffect(() => {
    setTimeout(() => {
      setItems(Data);
    }, 3000);
  }, []);

  return (
    <Jumbotron fluid>
      <Container>
        <h2 className="titulo">{greeting}</h2>
        <Row>
          <Col xs={6} md={4}>
            <Image src={imagen} rounded />
          </Col>
        </Row>
        {itemList.length < 1 ? (
          <Spinner animation="border" role="status">
          <span className="sr-only">Cargando...</span>
        </Spinner>
        ) : (
          <ItemList items={itemList} />
        )}
      </Container>
    </Jumbotron>
  );
}

export default ItemListContainer;
