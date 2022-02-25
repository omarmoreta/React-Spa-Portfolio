import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import njit from "../../videos/NJIT.mp4";

const Education = () => {
  return (
    <Container>
      <video width="380" height="auto" autoPlay loop muted playsInline>
        <source src={njit} type="video/mp4" />
        Your browser does not support the video.
      </video>
      <Card border="danger" className="card m-3">
        <Card.Body>
          <Card.Title>Education</Card.Title>
          <Card.Text style={{ fontFamily: "Lucida Sans" }}>
            Software Development bootcamp student at the New Jersey Institute of
            Technology. Prior POSSE Foundation scholar at Bucknell.
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
        <Card.Footer>Completion: May 2022</Card.Footer>
      </Card>
    </Container>
  );
};

export default Education;
