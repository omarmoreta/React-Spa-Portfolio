import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Button from "react-bootstrap/Button";
import About from "./Intro";
import Projects from "./Projects";
import Contact from "./Contact";

const TopBar = () => {
  return (
    <div>
      <Router>
        <Navbar bg="light" fixed="top">
          <Container style={{ marginLeft: 1 }}>
            <Navbar.Brand
              style={{
                fontFamily: "Courier New",
                fontSize: "25px",
              }}
            >
              <a
                style={{
                  color: "rgba(0, 0, 0, 0.55)",
                  textDecoration: "none",
                  hover: "black",
                }}
                href="/home"
              >
                Omar Moreta
              </a>
            </Navbar.Brand>
          </Container>
          <Nav
            variant="pills"
            defaultActiveKey="/home"
            className="nav-style"
            className="justify-content-end"
            style={{
              fontFamily: "Courier New",
              fontSize: "25px",
            }}
          >
            <Nav.Item>
              <Nav.Link>
                <Button style={{ padding: "5px" }} variant="outline-secondary">
                  Home
                </Button>{" "}
                {/* <Link to="/home">Home</Link>*/}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <Button style={{ padding: "5px" }} variant="outline-secondary">
                  About
                </Button>{" "}
                {/* <Link to="/about">About</Link>*/}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <Button style={{ padding: "5px" }} variant="outline-secondary">
                  Projects
                </Button>{" "}
                {/* <Link to="/projects">Projects</Link> */}
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <Button style={{ padding: "5px" }} variant="outline-secondary">
                  Contact
                </Button>{" "}
                {/* <Link to="/contact">Contact</Link> */}
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar>
        <Routes>
          <Route path="/home" />
          <Route path="/about" />
          <Route path="/projects" />
          <Route path="/contact" />
        </Routes>
      </Router>
    </div>
  );
};

export default TopBar;
