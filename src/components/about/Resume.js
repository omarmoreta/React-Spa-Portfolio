import React from "react";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import resume from "../../videos/Resume.mp4";

const Resume = () => {
  return (
    <Container className="m-0 p-0">
      <video width="370" height="auto" autoPlay loop muted playsInline>
        <source src={resume} type="video/mp4" />
        Your browser does not support the video.
      </video>
      <Card border="secondary" className="card m-3">
        <Card.Body>
          <Card.Title>Resume</Card.Title>
          <Card.Text style={{ fontFamily: "Lucida Sans" }}>
            If you would like a copy of my resume, please click request and fill
            out form and I will get back to you as soon as possible.
          </Card.Text>
          <BrowserRouter>
            <HashLink smooth to="#contactME" style={{ textDecoration: "none" }}>
              <Button size="lg" variant="secondary">
                Request
              </Button>
            </HashLink>
          </BrowserRouter>
        </Card.Body>
        <Card.Footer>
          Updated Feb. 17<sup>th</sup>, 2022
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default Resume;
