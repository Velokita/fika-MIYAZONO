import React from "react";

import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import {Jumbotron, Container} from 'react-bootstrap'

function Catalogo(onAdd) { 

  return (
    <>
    <Jumbotron fluid>
      <Container>
      <ItemListContainer greeting='Selecciona lo que más te guste:' imagen='' onAdd={onAdd}/>
      </Container>
      </Jumbotron>
    </>
  );
}

export default Catalogo;
