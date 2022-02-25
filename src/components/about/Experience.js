import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import about from "../../videos/about.mp4";

const Experience = () => {
  return (
    <Container>
      <video width="400" height="auto" autoPlay loop muted playsInline>
        <source src={about} type="video/mp4" />
        Your browser does not support the video.
      </video>
      <Card border="primary" className="card m-3">
        <Card.Body>
          <Card.Title>Experience</Card.Title>
          <Card.Text style={{ fontFamily: "Lucida Sans" }}>
            Full-stack developer open to new opportunities. Volunteer, helping
            students learn Python with TEALS program.
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
