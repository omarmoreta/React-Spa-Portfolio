import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

const TopBar = () => {
  return (
    <div>
      <Router>
        <Navbar bg="light" fixed="top">
          <Container>
            <Navbar.Brand>&#60; Omar Moreta &#47;&#62;</Navbar.Brand>
          </Container>
          <Nav variant="pills" className="justify-content-end">
            <Nav.Item>
              <Nav.Link>
                <Link to="/home">Home</Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <Link to="/about">About</Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <Link to="/projects">Projects</Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <Link to="/contact">Contact</Link>
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
