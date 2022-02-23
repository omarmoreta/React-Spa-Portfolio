import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import blackjack from "../../videos/BlackJack.mp4";

const Blackjack = () => {
  return (
    <Card border="success" className="mb-3">
      <Card>
        <video
          autoPlay
          loop
          muted
          playsInline
          alt="blackjack web game"
          type="video/mp4"
        >
          <source src={blackjack} type="video/mp4" />
        </video>
      </Card>
      <Card.Body>
        <Card.Title>BlackJack</Card.Title>
        <Card.Text style={{ fontFamily: "Lucida Sans" }}>
          A blackjack front-end game built with HTML, CSS, and JavaScript. The
          game was deployed using netlify.
        </Card.Text>
        <a
          href="https://thirsty-bhaskara-2f67ea.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="success" size="lg">
            Play
          </Button>
        </a>
      </Card.Body>
      <Card.Footer>
        <a
          href="https://github.com/omarmoreta/blackjack-casino-game"
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

export default Blackjack;
