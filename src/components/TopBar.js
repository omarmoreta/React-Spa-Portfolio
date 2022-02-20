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
              OMAR MORETA
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
                    fontFamily: "Lucida Sans",
                    color: "gray",
                    padding: "5px",
                    textDecoration: "none",
                  }}
                >
                  HOME
                </NavHashLink>
                <NavHashLink
                  to="#projects"
                  style={{
                    fontFamily: "Lucida Sans",
                    color: "gray",
                    padding: "5px",
                    textDecoration: "none",
                  }}
                >
                  PROJECTS
                </NavHashLink>
                <NavHashLink
                  to="#about"
                  style={{
                    fontFamily: "Lucida Sans",
                    color: "gray",
                    padding: "5px",
                    textDecoration: "none",
                  }}
                >
                  ABOUT
                </NavHashLink>
                <NavHashLink
                  to="#contact"
                  style={{
                    fontFamily: "Lucida Sans",
                    color: "gray",
                    padding: "5px",
                    textDecoration: "none",
                  }}
                >
                  CONTACT
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
