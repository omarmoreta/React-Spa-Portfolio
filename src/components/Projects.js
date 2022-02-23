import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import blackjack from "../videos/BlackJack.mp4";
import restrant from "../videos/REST-rant.mp4";
import phaser from "../videos/PhaserGame.mp4";

const Projects = () => {
  return (
    <div>
      <h1 id="projects">Projects</h1>
      <Container style={{ marginTop: "50px", marginBottom: "50px" }}>
        <Row xs={1} sm={3}>
          <Col>
            <Card border="success" className="mb-3">
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
              <Card.Body>
                <Card.Title>BlackJack</Card.Title>
                <Card.Text style={{ fontFamily: "Lucida Sans" }}>
                  A blackjack front-end game built with HTML, CSS, and
                  JavaScript. The game was deployed using netlify.
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
          </Col>
          <Col>
            <Card border="info" className="mb-3">
              <video
                autoPlay
                loop
                muted
                playsInline
                alt="restaurant review application"
                type="video/mp4"
              >
                <source src={restrant} type="video/mp4" />
              </video>
              <Card.Body>
                <Card.Title>REST-rant</Card.Title>
                <Card.Text style={{ fontFamily: "Lucida Sans" }}>
                  Restaurant review app using Express, Node, and React. RESTful
                  routes connected to mongoDB. Deployed on heroku.
                </Card.Text>
                <a
                  href="https://rest-rant-project.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="info" size="lg">
                    Rant
                  </Button>
                </a>
              </Card.Body>
              <Card.Footer>
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
          </Col>
          <Col>
            <Card border="warning" className="mb-3">
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
              <Card.Body>
                <Card.Title>RPG Phaser Game</Card.Title>
                <Card.Text style={{ fontFamily: "Lucida Sans" }}>
                  Collaborating on a functional and captivating RPG Phaser game
                  with NJIT Software Development Bootcamp classmate.
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
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
