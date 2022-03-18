import React from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import logo from "../images/OMlogo.jpg";
import logoMobile from "../images/Omobile.webp";

const TopBar = () => {
  return (
    <Navbar collapseOnSelect bg="secondary" expand="lg" fixed="top">
      <Container fluid>
        <Navbar.Brand style={{ color: "white" }} href="#">
          <source
            src-set={logoMobile}
            alt="mobile logo"
            media="(min-width: 800px)"
          />
          <img src={logo} alt="OM logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav style={{ color: "white" }}>
            <Nav.Link href="#home">
              {" "}
              <Button variant="secondary" size="md">
                HOME
              </Button>
            </Nav.Link>
            <Nav.Link href="#projects">
              {" "}
              <Button variant="secondary" size="md">
                PROJECTS
              </Button>
            </Nav.Link>
            <Nav.Link smooth href="#about">
              {" "}
              <Button variant="secondary" size="md">
                ABOUT
              </Button>
            </Nav.Link>
            <Nav.Link smooth href="#contactME">
              <Button variant="secondary" size="md">
                CONTACT
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopBar;
