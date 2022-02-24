import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import restrant from "../../videos/REST-rant.mp4";

const Restrant = () => {
  return (
    <Card border="info" className="mb-3">
      <Card className="m-0 p-0 ratio-*">
        <video
          autoPlay
          loop
          muted
          playsInline
          alt="restaurant review application"
          type="video/mp4"
          src={restrant}
        >
          Video not supported by browser.
        </video>
      </Card>
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
  );
};

export default Restrant;
