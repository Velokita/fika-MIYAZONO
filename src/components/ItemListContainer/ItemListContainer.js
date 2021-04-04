import React from 'react' 
//import componentes
//Import componentes externos
import {Row, Col, Image, Jumbotron, Container} from 'react-bootstrap';
 
import "./ItemListContainer.css";


function ItemListContainer({greeting, imagen}) {
    return (    
        <Jumbotron fluid>
            <Container>
            <h2 className="titulo">{greeting}</h2>
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

