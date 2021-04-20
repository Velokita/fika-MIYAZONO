import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import { MenuItems } from "./MenuItems";
import { CartWidget } from "../CartWidget/CartWidget";
import "./NavBar.css";
import Navbar from "react-bootstrap/Navbar";

class NavBar extends Component {
  state = {
    clicked: false,
  };

  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked,
    });
  };

  render() {
    return (
      <Navbar className="NavBarItems" fixed="top">
        <h1 className="navbar-logo">
          FiKa React <i className="fab fa-react"> </i>
        </h1>
        <div className="menu-icon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <Link to={item.url}>
                <li key={index}>
                  <a className={item.cName} >
                    {item.title}
                  </a>
                </li>
              </Link>
            );
          })}
        </ul>
        <Button>
          Mi Carrito <CartWidget />{" "}
        </Button>
      </Navbar>
    );
  }
}

export default NavBar;
