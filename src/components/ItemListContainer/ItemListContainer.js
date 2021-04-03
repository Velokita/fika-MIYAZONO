import React from 'react'
import imagen from './fikaDrink.png'; 
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';

import "./ItemListContainer.css";

function ItemListContainer({mensaje}) {
    return (    
        <Jumbotron fluid>
            <Container>
            <h2 className="titulo">{mensaje}</h2>
            <Row>
                <Col xs={6} md={4}>
                        <Image src={imagen} rounded />
                </Col>
            </Row>
            </Container>
      </Jumbotron>
    )
}

export default ItemListContainer;

