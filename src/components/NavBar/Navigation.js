import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, NavDropdown, NavLink, Nav, Container} from "react-bootstrap";

import "./NavBar.css";

class Navigation extends Component {
   

  render() {
    return (
      <>
      <Container>
        <Navbar collapseOnSelect expand="lg"  className="NavBarItems" fixed="top">
        <Navbar.Brand href="/"> <h1 className="navbar-  logo">FiKa React <i className="fab fa-react"> </i></h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="nav-menu">
          <Nav.Link href="/">Inicio</Nav.Link> 
            <NavDropdown title="Catálogo" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/catalogo">Todo</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Bebidas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Dulces y Salados</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">Combos</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/about">Nuestra Historia</Nav.Link> 
            <Nav.Link href="/contact">Contacto</Nav.Link> 
            <Nav.Link href="/my-cart"><i className="fas fa-shopping-cart" placeholder="Mi Carrito"></i></Nav.Link> 
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </Container>
      </>
    );
  }
}

export default Navigation;
