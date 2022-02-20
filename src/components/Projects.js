import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

const Projects = () => {
  return (
    <div>
      <h1 id="projects">Projects</h1>
      <Container style={{ marginTop: "50px", marginBottom: "50px" }}>
        <Row xs={1} md={3}>
          <Col>
            <Card border="secondary" className="mb-3">
              <Card.Img variant="top" src="http://placekitten.com/160/100" />
              <Card.Body>
                <Card.Title>Project 1</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Button variant="secondary" size="md">
                  Button
                </Button>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  <Button variant="secondary" size="md">
                    GitHub
                  </Button>
                </small>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card border="secondary" className="mb-3">
              <Card.Img variant="top" src="http://placekitten.com/160/100" />
              <Card.Body>
                <Card.Title>Project 2</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Button variant="secondary" size="md">
                  Button
                </Button>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  <Button variant="secondary" size="md">
                    GitHub
                  </Button>
                </small>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <Card border="secondary" className="mb-3">
              <Card.Img variant="top" src="http://placekitten.com/160/100" />
              <Card.Body>
                <Card.Title>Project 3</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
                <Button variant="secondary" size="md">
                  Button
                </Button>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  <Button variant="secondary" size="md">
                    GitHub
                  </Button>
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
