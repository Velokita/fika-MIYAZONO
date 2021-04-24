import React, { Component } from "react";
import { Navbar, NavDropdown, Nav, Container } from "react-bootstrap";

import "./NavBar.css";

class Navigation extends Component {
  render() {
    return (
      <>
        <Container>
          <Navbar
            collapseOnSelect
            expand="lg"
            className="NavBarItems"
            fixed="top"
          >
            <Navbar.Brand href="/">
              {" "}
              <h1 className="navbar-  logo">
                FiKa React <i className="fab fa-react"> </i>
              </h1>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="nav-menu">
                <Nav.Link href="/">Inicio</Nav.Link>
                <NavDropdown title="Catálogo" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/catalogo/todo">
                    Ver Todo
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/catalogo/bebidas">
                    Bebidas
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/catalogo/dulces">
                    Dulces
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/catalogo/salados">
                    Salados
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/catalogo/combos">
                    Combos
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/about">Nuestra Historia</Nav.Link>
                <Nav.Link href="/contact">Contacto</Nav.Link>
                <Nav.Link href="/my-cart">
                  <i
                    className="fas fa-shopping-cart"
                    placeholder="Mi Carrito"
                  ></i>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </>
    );
  }
}

export default Navigation;
