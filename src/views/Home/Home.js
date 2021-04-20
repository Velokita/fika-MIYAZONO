import React from 'react'
//Import componentes externos
import { Row, Col, Image } from "react-bootstrap";

function Home() {
    return (
        <div>            
            <h2>Inicio</h2>
            <p>Este es el proyecto final</p>
             
        <h2 className="titulo">Tomate un Break con </h2>
        <Row>
          <Col xs={6} md={4}>
            <Image src="./images/fikaDrink.png" rounded />
          </Col>
        </Row>
  
  
        </div>
    )
}

export default Home

 