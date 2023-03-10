import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import njit from "../../videos/NJIT.mp4";

const Education = () => {
  return (
    <Container className="m-0 p-0">
      <video width="370" height="auto" autoPlay loop muted playsInline>
        <source src={njit} type="video/mp4" />
        Your browser does not support the video.
      </video>
      <Card border="secondary" className="card m-3">
        <Card.Body>
          <Card.Title>Education</Card.Title>
          <Card.Text style={{ fontFamily: "Lucida Sans" }}>
            Currently attending Rutgers for a Fintech Certificate. Earned
            Full-Stack Certificate at NJIT.{" "}
            <a
              href="https://www.possefoundation.org/shaping-the-future/posse-photo-viewer"
              target="_blank"
              rel="noopener noreferrer"
            >
              Boston POSSE 2
            </a>{" "}
            scholar at Bucknell.
          </Card.Text>
          <a
            href="https://www.youtube.com/watch?v=1DB9S8GyURc"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="danger" size="lg">
              NJIT
            </Button>
          </a>
        </Card.Body>
        <Card.Footer>NJIT: May 2022, RU: June 2023</Card.Footer>
      </Card>
    </Container>
  );
};

export default Education;
