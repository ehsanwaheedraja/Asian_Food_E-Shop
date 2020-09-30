import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown, Button, FormControl } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import logoLg from "../images/logo_190x104.jpg";
import logoSm from "../images/logo_120x67.jpg";

export const Header = () => {
  const [sumItems, setSumItems] = useState(0);
  let user_id = localStorage.getItem("id"); // get id from logged-user
  useEffect(() => {
    axios
      .get(`http://localhost:5000/checkout/${user_id}`)
      .then(function (response) {
        let totalItems = response.data.length;
        setSumItems(totalItems);
      });
  }, [user_id]);
  const [name, setName] = useState("");
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar2">
      <Navbar.Brand href="/">
        <img
          src={logoLg}
          alt="The Ultimate Asian Food Eshop Logo"
          className="d-none d-md-inline-block"
        />
        <img
          src={logoSm}
          alt="The Ultimate Asian Food Eshop Logo"
          className="d-inline-block d-md-none"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto containerLinks">
          <div className="containerLinks1">
            <div className="columnLinks">
              <Link to="/" className="nav-link2 active">
                Home
              </Link>
              <Link to="/About" className="nav-link2">
                About
              </Link>
              <NavDropdown
                title="Categories"
                className="linkCategories"
                id="collasible-nav-dropdown"
              >
                <NavDropdown.Item>
                  <Link to="/categories/Desserts">Desserts</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/categories/Traditional-Food">
                    Asian Traditional foods
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/categories/Spices">Spices</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/categories/Lentils-Rice-Flour">
                    Lentils/Rice/Flour
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Link to="/Faq" className="nav-link2">
                FAQ
              </Link>
            </div>
            <div className="columnLinks">
              <Link to="/Contact" className="nav-link2">
                Contact
              </Link>
              <Link to="/Login" className="nav-link2">
                Login
              </Link>
              <Link to="/Register" className="nav-link2">
                Register
              </Link>
            </div>
          </div>
          <div className="containerLinks2">
            <form className="form-search">
              <FormControl
                type="text"
                name="name"
                value={name}
                className="mr-sm-2"
                onChange={(e) => setName(e.target.value)}
              />
              <Link to={`/Search/${name}`}>
                <Button variant="outline-primary">Search</Button>
              </Link>
            </form>
          </div>
        </Nav>

        <Nav>
          <div
            className="navbar-buttons d-flex justify-content-end"
            id="cartButton"
          >
            <Link
              to="/ShoppingCart"
              href="basket.html"
              className="btn btn-primary navbar-btn"
            >
              <i className="fa fa-shopping-cart"></i>

              <div>{sumItems}</div>
            </Link>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
