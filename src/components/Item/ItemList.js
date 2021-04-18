import React from "react";
//import componentes
import Item from "./Item";

/*Desafío Clase6

Implementa un async mock (promise): Usa un efecto de montaje para poder
 emitir un llamado asincrónico a un mock estático de datos que devuelva
  un conjunto de item { id, title, description, price, pictureUrl } 
  en dos segundos, para emular retrasos de red. 
  Desarrolla la vista utilizando un array de items y un map
   */

const ItemList = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </>
  );
};

export default ItemList;
