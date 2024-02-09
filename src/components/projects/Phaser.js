import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import phaser from "../../videos/PhaserGame.mp4";

const Phaser = () => {
  return (
    <Container className="m-0 p-0">
      <video width="370" height="auto" autoPlay loop muted playsInline>
        <source src={phaser} type="video/mp4" />
        Your browser does not support the video.
      </video>
      <Card border="secondary" className="card m-3">
        <Card.Body>
          <Card.Title>RPG Phaser Game & REST-Rant App</Card.Title>
          <Card.Text style={{ fontFamily: "Lucida Sans" }}>
            Currently collaborating on a RPG game using
            PhaserJS.
            Created a full-stack restaurant review app
            deployed on render.
          </Card.Text>
          <a
            href="https://full-rest-rant.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="primary" size="lg">
              REST-rant
            </Button>
          </a>
        </Card.Body>
        <Card.Footer>
          <a
            href="https://github.com/omarmoreta/Phaser-Game"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="dark" size="sm">
              GitHub
            </Button>
          </a>
          <span>   </span>
          <a
            href="https://github.com/omarmoreta/REST-rant-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="dark" size="sm">
              GitHub
            </Button>
          </a>
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default Phaser;
