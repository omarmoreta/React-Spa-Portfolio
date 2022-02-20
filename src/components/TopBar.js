import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavHashLink } from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";

const TopBar = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar bg="light" expand="lg" fixed="top">
          <Container fluid>
            <Navbar.Brand
              style={{ color: "gray", fontFamily: "Lucida Sans" }}
              href="#"
            >
              Omar Moreta
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              ></Nav>
              <Nav
                style={{
                  fontFamily: "Lucida Sans",
                  textDecoration: "none",
                  justifyContent: "end",
                }}
              >
                <NavHashLink
                  to="#home"
                  style={{
                    color: "gray",
                    padding: "5px",
                    textDecoration: "none",
                  }}
                >
                  Home
                </NavHashLink>
                <NavHashLink
                  to="#projects"
                  style={{
                    color: "gray",
                    padding: "5px",
                    textDecoration: "none",
                  }}
                >
                  Projects
                </NavHashLink>
                <NavHashLink
                  to="#about"
                  style={{
                    color: "gray",
                    padding: "5px",
                    textDecoration: "none",
                  }}
                >
                  About
                </NavHashLink>
                <NavHashLink
                  to="#contact"
                  style={{
                    color: "gray",
                    padding: "5px",
                    textDecoration: "none",
                  }}
                >
                  Contact
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
