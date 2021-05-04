import React, { useEffect } from "react";

import { formatImgResource } from "../../utils/Utils";
//Import componentes externos
import { Card } from "react-bootstrap";

/** Se visualiza el Detalle del item
 */

function ItemDetail({ item }) {
  useEffect(() => {
    console.log("Mostrando ItemDetail");
    return () => console.log("Ocultando ItemDetail");
  }, []);

  
  return (
    <>
      <Card.Img variant="top" src={item.img} width={150} height={250} />
      <Card.Text>{item.detail} </Card.Text>
      <Card.Text>{item.price} </Card.Text>
    </>
  );
}
export default ItemDetail;
