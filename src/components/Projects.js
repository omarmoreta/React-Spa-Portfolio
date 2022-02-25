import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const Projects = () => {
  const Blackjack = React.lazy(() => import("./projects/Blackjack"));
  const Restrant = React.lazy(() => import("./projects/Restrant"));
  const Phaser = React.lazy(() => import("./projects/Phaser"));

  return (
    <div>
      <h1 id="projects">Projects</h1>
      <Container style={{ marginTop: "50px", marginBottom: "50px" }}>
        <Row md={3}>
          <Col>
            <Blackjack />
          </Col>
          <Col>
            <Restrant />
          </Col>
          <Col>
            <Phaser />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
