import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import phaser from "../../videos/PhaserGame.mp4";

const Phaser = () => {
  return (
    <Card border="warning" className="mb-3">
      <Card>
        <video
          autoPlay
          loop
          muted
          playsInline
          alt="RPG Phaser Game"
          type="video/mp4"
        >
          <source src={phaser} type="video/mp4" />
        </video>
      </Card>
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
  );
};

export default Phaser;
