import React, { useEffect, useState } from "react";
//import componentes
import ItemList from "../Item/ItemList";
import { Data } from "../../utils/Data";

//Import componentes externos
import { Row, Col, Image, Jumbotron, Container } from "react-bootstrap";

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
          <h1>Cargando...</h1>
        ) : (
          <ItemList items={itemList} />
        )}
      </Container>
    </Jumbotron>
  );
}

export default ItemListContainer;
