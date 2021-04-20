import React from "react";
import { Jumbotron, Container, Form, Col, Button, Row } from "react-bootstrap";

function Contact() {
  return (
    <Jumbotron>
      <header>
        <h2>Contáctanos ... Envianos tu mensaje...</h2>
      </header>
      <Container>
        <Form>
          <Form.Row>
            {" "}
            <Col xs="auto">
              <Form.Group as={Row} controlId="formHorizontalName">
                <Form.Control
                  type="name"
                  placeholder="Ingresa tu nombre"
                  className="mb-2"
                />
              </Form.Group>
              <Form.Group as={Row} controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Ingresa tu correo" />
                <Form.Text className="text-muted">
                  Nunca compartiremos tus datos.
                </Form.Text>
              </Form.Group>
              <Form.Group as={Row} controlId="exampleForm.ControlTextarea1">
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Dejanos tus Comentarios..."
                />
              </Form.Group>
            </Col>
          </Form.Row>
          <Form.Row>
            <Form.Group id="formGridCheckbox">
              <Form.Check type="checkbox" label="Quiero recibir Promos" />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </Form.Row>
        </Form>
      </Container>
    </Jumbotron>
  );
}

export default Contact;
