import React from "react";
import { NavHashLink } from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import logo from "../images/OMlogo.jpg";

const Footer = () => {
  return (
    <div style={{ marginTop: "135px" }}>
      <BrowserRouter>
        <Navbar bg="secondary">
          <Container
            style={{
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
          >
            <Nav>
              <NavHashLink smooth to="#home">
                <Button variant="secondary" size="sm">
                  HOME
                </Button>
              </NavHashLink>
              <NavHashLink smooth to="#projects">
                <Button variant="secondary" size="sm">
                  PROJECTS
                </Button>
              </NavHashLink>
              <NavHashLink smooth to="#about">
                <Button variant="secondary" size="sm">
                  ABOUT
                </Button>
              </NavHashLink>
              <Nav
                style={{
                  paddingLeft: "150px",
                }}
                href="#"
              >
                <img src={logo} alt="OM logo" />
                <p style={{ color: "white" }}>&#169;</p>
              </Nav>
            </Nav>
          </Container>
        </Navbar>
      </BrowserRouter>
    </div>
  );
};

export default Footer;
