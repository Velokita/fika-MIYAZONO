import React from 'react'
import {Jumbotron, Container, Image} from 'react-bootstrap'

function About () {
    return(

        <Jumbotron fluid>
        <Container>
              <h2>Nuestra Historia</h2>
            <p>Este es el proyecto final</p>
            <Image src="./images/whoopies-pasteleria-productos.jpg"></Image>
        </Container>
        </Jumbotron>
    );
}


export default About;