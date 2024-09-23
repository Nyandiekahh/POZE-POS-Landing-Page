import React from 'react';
import './Topbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const Topbar = () => {
  return (
    <Navbar className="topbar" expand="lg">
      <Navbar.Brand href="#" className="logo">
        P O Z E
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ml-auto topbar-links">
          <Nav.Link href="#">Home</Nav.Link>
          <NavDropdown title="What We Offer" id="offer-dropdown">
            <NavDropdown.Item href="#">POS</NavDropdown.Item>
            <NavDropdown.Item href="#">Stock-take & Data Entry</NavDropdown.Item>
            <NavDropdown.Item href="#">E-Commerce Integration</NavDropdown.Item>
            <NavDropdown.Item href="#">Payment Integration</NavDropdown.Item>
            <NavDropdown.Item href="#">POS Hardwares</NavDropdown.Item>
            <NavDropdown.Item href="#">Tracking Expenses</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#">Products</Nav.Link>
          <Nav.Link href="#">Why POZE?</Nav.Link>
          <Nav.Link href="#">About Us</Nav.Link>
          <Nav.Link href="https://templates.iqonic.design/posdash/html/backend/index.html" target="_blank" rel="noopener noreferrer">
            Click For Free Trial
          </Nav.Link>
          <Nav.Link href="#">Get in Touch</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Topbar;
