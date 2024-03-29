import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const About = () => {
  const Resume = React.lazy(() => import("./about/Resume"));
  const Experience = React.lazy(() => import("./about/Experience"));
  const Education = React.lazy(() => import("./about/Education"));

  return (
    <div>
      <h1 id="about">About Me</h1>
      <Container style={{ marginTop: "50px", marginBottom: "50px" }}>
        <Row fluid xxl={3}>
          <Education />
          <Experience />
          <Resume />
        </Row>
      </Container>
    </div>
  );
};

export default About;
