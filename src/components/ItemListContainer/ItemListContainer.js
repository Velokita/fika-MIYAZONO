import React, { useEffect, useState } from "react";
//import componentes
import ItemList from "../Item/ItemList";
//import { Data } from "../../utils/Data";
import { Data } from "../../utils/firebase";
//Import componentes externos
import { useParams } from "react-router";
import { Row, Col, Image, Jumbotron, Container } from "react-bootstrap";
import Spinner from "react-bootstrap/Spinner";

import "./ItemListContainer.css";

function ItemListContainer({ greeting, imagen }) {
  const [itemList, setItems] = useState([]);
  const { category } = useParams();

  /* useEffect(() => {
    setTimeout(() => {
      setItems(Data);
    }, 2000);
  }, [categoryid]);
 */
  // Es un evento asyncrono, por lo que utilizamos async await
  // const dataLoad = async (itemObject) => {
  //   await Data.collection("items").doc().set(itemObject);
  // };

  const getItems = async () => {
    Data.collection("items").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        // console.log(doc.id);
        // Cada vez que nos traigamos la data vamos a combiar esos arreglos en un nuevo objeto
        docs.push({ ...doc.data(), id: doc.id });
      });
      // Guardamos la data en el state
      setItems(docs);
    });
  };

  useEffect(() => {
    getItems();
  }, [category]);

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
