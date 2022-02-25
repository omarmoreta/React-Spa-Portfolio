import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import blackjack from "../../videos/BlackJack.mp4";

const Blackjack = () => {
  return (
    <Container className="m-0 p-0">
      <Card className="m-3">
        <video width="auto" height="auto" autoPlay loop muted playsInline>
          <source src={blackjack} type="video/mp4" />
          Your browser does not support the video.
        </video>
      </Card>
      <Card border="success" className="m-3">
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
    </Container>
  );
};

export default Blackjack;
