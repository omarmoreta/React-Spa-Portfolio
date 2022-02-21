import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import blackjack from "../images/blackjack.gif";
import restrant from "../images/rest-rant.gif";
import phaser from "../images/phaser.gif";

const Projects = () => {
  return (
    <div>
      <h1 id="projects">Projects</h1>
      <Container style={{ marginTop: "50px", marginBottom: "50px" }}>
        <Row xs={1} md={3}>
          <Col>
            <Card
              border="success"
              className="mb-3"
              style={{ fontFamily: "Lucida Sans" }}
            >
              <Card.Img variant="top" src={blackjack} alt="blackjack game" />
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
                  <Button variant="success" size="md">
                    Play
                  </Button>
                </a>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  <a
                    href="https://github.com/omarmoreta/blackjack-casino-game"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="secondary" size="md">
                      GitHub
                    </Button>
                  </a>
                </small>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card border="info" className="mb-3">
              <Card.Img variant="top" src={restrant} />
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
                  <Button variant="info" size="md">
                    Rant
                  </Button>
                </a>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  <a
                    href="https://github.com/omarmoreta/REST-rant-project"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="secondary" size="md">
                      GitHub
                    </Button>
                  </a>
                </small>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card border="warning" className="mb-3">
              <Card.Img variant="top" src={phaser} />
              <Card.Body>
                <Card.Title>RPG Phaser Game</Card.Title>
                <Card.Text style={{ fontFamily: "Lucida Sans" }}>
                  Collaborating on a functional and captivationg RPG Phaser game
                  with NJIT Software Development Bootcamp classmate.
                </Card.Text>
                <Button variant="warning" size="md">
                  Coming Soon
                </Button>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  <a
                    href="https://github.com/Gaalmonte/Phaser-Game"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="secondary" size="md">
                      GitHub
                    </Button>
                  </a>
                </small>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
