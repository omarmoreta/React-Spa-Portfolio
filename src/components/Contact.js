import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import contact from "../images/contact.jpg";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropDown";
import { NavHashLink } from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";
import logo from "../images/OMlogo.jpg";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "Portfolio",
        form.current,
        "user_GIi8LXDh6SEAlZ5rawr0e"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    alert("Email was was submitted!");
  };

  return (
    <div>
      <Card style={{ border: "none" }}>
        <Card.Img
          src={contact}
          alt="contact banner"
          style={{ objectFit: "scale-down" }}
        />
        <Card.ImgOverlay>
          <Card.Title>
            <h1 id="contactME">Contact Me</h1>
          </Card.Title>
          <div>
            <p style={{ color: "red" }}>Fields marked with * are required.</p>
            <form ref={form} onSubmit={sendEmail} style={{ marginTop: "30px" }}>
              <label htmlFor="name">Name*</label>
              <br />
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Justin Case"
                pattern="[a-zA-Z\s]+"
                required
              />

              <br />
              <label htmlFor="email">Email*</label>
              <br />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="JustinCase@mail.com"
                pattern="\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$"
                required
              />

              <br />
              <label htmlFor="subject">Subject</label>
              <br />
              <select size="1">
                <option id="subject" name="subject" value="business">
                  Business
                </option>
                <option id="subject" name="subject" value="employment">
                  Employment
                </option>
                <option id="subject" name="subject" value="networking">
                  Networking
                </option>
                <option id="subject" name="subject" value="more info">
                  More Info
                </option>
              </select>
              <br />
              <label htmlFor="message">Message*</label>
              <br />
              <textarea
                name="message"
                name="message"
                type="text"
                placeholder="Hi there,
                              Thank you for reach out! I will respond back as soon as 
                              Best,
                              Omar"
                rows="5"
                cols="50"
                required
              ></textarea>
              <br />
              <Button as="input" type="submit" value="Submit" />
            </form>
          </div>
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
                    <Nav
                      style={{
                        paddingLeft: "20px",
                        paddingRight: "20px",
                      }}
                      href="#"
                    >
                      <img src={logo} />
                      <p style={{ color: "white" }}> &#169; 2022</p>
                    </Nav>
                    <NavHashLink smooth to="#about">
                      <Button variant="secondary" size="sm">
                        ABOUT
                      </Button>
                    </NavHashLink>
                    <NavHashLink smooth to="#github">
                      <Button variant="secondary" size="sm">
                        CONTACT
                      </Button>
                    </NavHashLink>
                  </Nav>
                </Container>
              </Navbar>
            </BrowserRouter>
          </div>
        </Card.ImgOverlay>
      </Card>
    </div>
  );
};

export default Contact;
