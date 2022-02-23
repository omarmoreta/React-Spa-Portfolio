import React from "react";
import { NavHashLink } from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import logo from "../images/OMlogo.jpg";
import logoMobile from "../images/Omobile.webp";

const TopBar = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar bg="secondary" expand="lg" fixed="top">
          <Container fluid>
            <Navbar.Brand style={{ color: "white" }} href="#">
              <source srcSet={logo} alt="OM logo" media="(min-width: 800px)" />
              <img src={logoMobile} alt="mobile logo" />
            </Navbar.Brand>
            <Navbar.Toggle
              style={{ color: "white" }}
              aria-controls="navbarScroll"
            />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              ></Nav>
              <Nav
                style={{
                  justifyContent: "end",
                }}
              >
                <NavHashLink
                  to="#home"
                  smooth
                  style={{
                    color: "white",
                    padding: "5px",
                  }}
                >
                  <Button variant="secondary" size="md">
                    HOME
                  </Button>
                </NavHashLink>
                <NavHashLink
                  to="#projects"
                  smooth
                  style={{
                    color: "white",
                    padding: "5px",
                  }}
                >
                  <Button variant="secondary" size="md">
                    PROJECTS
                  </Button>
                </NavHashLink>
                <NavHashLink
                  to="#about"
                  smooth
                  style={{
                    color: "white",
                    padding: "5px",
                  }}
                >
                  <Button variant="secondary" size="md">
                    ABOUT
                  </Button>
                </NavHashLink>
                <NavHashLink
                  to="#contactME"
                  smooth
                  style={{
                    color: "white",
                    padding: "5px",
                  }}
                >
                  <Button variant="secondary" size="md">
                    CONTACT
                  </Button>
                </NavHashLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </BrowserRouter>
    </div>
  );
};

export default TopBar;
