import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import restrant from "../../videos/REST-rant.mp4";

const Restrant = () => {
  return (
    <Container className="m-0 p-0">
      <Card className="m-3">
        <video
          style={{ marginTop: "0", marginBottom: "0" }}
          autoPlay
          loop
          muted
        >
          <source src={restrant} type="video/mp4" />
          Your browser does not support the video.
        </video>
      </Card>
      <Card border="info" className="m-3">
        <Card.Body>
          <Card.Title>REST-rant</Card.Title>
          <Card.Text style={{ fontFamily: "Lucida Sans" }}>
            Restaurant review app using Express, Node, and React. RESTful routes
            connected to mongoDB. Deployed on heroku.
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
    </Container>
  );
};

export default Restrant;
