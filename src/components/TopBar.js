import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavHashLink } from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";

const TopBar = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar bg="dark" expand="lg" fixed="top">
          <Container fluid>
            <Navbar.Brand style={{ color: "white" }} href="#">
              OMAR MORETA
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
                  HOME
                </NavHashLink>
                <NavHashLink
                  smooth
                  to="#projects"
                  style={{
                    color: "white",
                    padding: "5px",
                  }}
                >
                  PROJECTS
                </NavHashLink>
                <NavHashLink
                  smooth
                  to="#about"
                  style={{
                    color: "white",
                    padding: "5px",
                  }}
                >
                  ABOUT
                </NavHashLink>
                <NavHashLink
                  smooth
                  to="#contact"
                  style={{
                    color: "white",
                    padding: "5px",
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
