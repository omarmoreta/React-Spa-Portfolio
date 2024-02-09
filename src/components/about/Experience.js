import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import about from "../../videos/about.mp4";

const Experience = () => {
  return (
    <Container className="m-0 p-0">
      <video width="370" height="auto" autoPlay loop muted playsInline>
        <source src={about} type="video/mp4" />
        Your browser does not support the video.
      </video>
      <Card border="secondary" className="card m-3">
        <Card.Body>
          <Card.Title>Experience</Card.Title>
          <Card.Text style={{ fontFamily: "Lucida Sans" }}>
            Currently an Automation QE in the banking sector and Full-Stack Associate Instructor at
            ThriveDX. Volunteered with TEALS program.
          </Card.Text>
          <a
            href="https://www.credly.com/badges/182fa8fc-148d-474d-8f66-877f97f0e024?source=linked_in_profile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="primary" size="lg">
              TEALS
            </Button>
          </a>
        </Card.Body>
        <Card.Footer>Open to new Challenges</Card.Footer>
      </Card>
    </Container>
  );
};

export default Experience;
