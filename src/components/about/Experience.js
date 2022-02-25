import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import about from "../../videos/about.mp4";

const Experience = () => {
  return (
    <Container className="m-0 p-0">
      <Card className="m-3">
        <video width="auto" height="auto" autoPlay loop muted playsInline>
          <source src={about} type="video/mp4" />
          Your browser does not support the video.
        </video>
      </Card>
      <Card border="primary" className="m-3">
        <Card.Body>
          <Card.Title>Experience</Card.Title>
          <Card.Text style={{ fontFamily: "Lucida Sans" }}>
            Full-stack developer open to new opportunities. Volunteering at a
            local high school to help students learn Python as a TEALS
            volunteer.
          </Card.Text>
          <a
            href="https://www.linkedin.com/in/moretaomar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="primary" size="lg">
              LinkedIn
            </Button>
          </a>
        </Card.Body>
        <Card.Footer>Open to Work</Card.Footer>
      </Card>
    </Container>
  );
};

export default Experience;
