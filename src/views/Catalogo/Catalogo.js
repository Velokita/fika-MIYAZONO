import React from "react";

import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import {Jumbotron, Container} from 'react-bootstrap'

function Catalogo() { 

  return (
    <>
    <Jumbotron fluid>
      <Container>
      <ItemListContainer greeting='Selecciona lo que más te guste:' imagen='' />
      </Container>
      </Jumbotron>
    </>
  );
}

export default Catalogo;
