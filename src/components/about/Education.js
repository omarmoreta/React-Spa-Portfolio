import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import njit from "../../videos/NJIT.mp4";

const Education = () => {
  return (
    <Container style={{ backgroundColor: "grey" }} className="m-0 p-0">
      <Card style={{ backgroundColor: "yellow" }} className="m-0 p-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          alt="blackjack web game"
          type="video/mp4"
          src={njit}
        >
          Video not supported by browser.
        </video>
      </Card>
      <Card
        border="danger"
        className="m-0 p-0"
        style={{ backgroundColor: "pink" }}
      >
        <Card.Body>
          <Card.Title>Education</Card.Title>
          <Card.Text style={{ fontFamily: "Lucida Sans" }}>
            Software Development bootcamp student at the New Jersey Institute of
            Technology. Also was POSSE Foundation scholar at Bucknell.
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
