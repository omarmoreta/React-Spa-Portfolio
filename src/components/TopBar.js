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
        <Navbar bg="light" expand="lg" fixed="top">
          <Container fluid>
            <Navbar.Brand href="#">Omar Moreta</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              ></Nav>
              <Nav style={{ justifyContent: "end" }}>
                <Nav.Link href="#">Home</Nav.Link>
                <Nav.Link href="#action2">About</Nav.Link>
                <Nav.Link href="#action3">Home</Nav.Link>
                <Nav.Link href="#action4">Projects</Nav.Link>
                <Nav.Link href="#action5">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path="#" />
          <Route path="/about" />
          <Route path="/projects" />
          <Route path="/contact" />
        </Routes>
      </Router>
    </div>
  );
};

export default TopBar;
