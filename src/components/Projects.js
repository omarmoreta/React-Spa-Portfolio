import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const Projects = () => {
  const Blackjack = React.lazy(() => import("./projects/Blackjack"));
  const Vday = React.lazy(() => import("./projects/Vday"));
  const Phaser = React.lazy(() => import("./projects/Phaser"));

  return (
    <div>
      <h1 id="projects">Projects</h1>
      <Container style={{ marginTop: "50px", marginBottom: "50px" }}>
        <Row fluid xxl={3}>
          <Blackjack />
          <Vday />
          <Phaser />
        </Row>
      </Container>
    </div>
  );
};

export default Projects;
