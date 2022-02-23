import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavHashLink } from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";
import Button from "react-bootstrap/Button";
import logo from "../images/OMlogo.jpg";

const TopBar = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar bg="secondary" expand="lg" fixed="top">
          <Container fluid>
            <Navbar.Brand style={{ color: "white" }} href="#">
              <Button variant="secondary" size="sm">
                <img src={logo} />
              </Button>
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
                  smooth
                  to="#home"
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
                  smooth
                  to="#projects"
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
                  smooth
                  to="#about"
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
                  smooth
                  to="#contact"
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
