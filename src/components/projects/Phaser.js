import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import phaser from "../../videos/PhaserGame.mp4";

const Phaser = () => {
  return (
    <Container className="m-0 p-0">
      <Card className="m-3">
        <video
          style={{ marginTop: "0", marginBottom: "0" }}
          autoPlay
          loop
          muted
        >
          <source src={phaser} type="video/mp4" />
          Your browser does not support the video.
        </video>
      </Card>
      <Card border="warning" className="m-3">
        <Card.Body>
          <Card.Title>RPG Phaser Game</Card.Title>
          <Card.Text style={{ fontFamily: "Lucida Sans" }}>
            Collaborating on a functional and captivating RPG Phaser game with
            NJIT Software Development Bootcamp classmate.
          </Card.Text>
          <Button variant="warning" size="lg" disabled>
            Coming Soon
          </Button>
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
        </Card.Footer>
      </Card>
    </Container>
  );
};

export default Phaser;
