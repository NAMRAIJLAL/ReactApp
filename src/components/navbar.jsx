import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const NavBar = ({ totalCounters }) => {
  return (
    // <Container>
    <Navbar expand="lg" variant="light" bg="info">
      <Container>
        <Navbar.Brand href="#">Navbar</Navbar.Brand>
      </Container>
    </Navbar>
    // </Container>
  );
};

export default NavBar;
