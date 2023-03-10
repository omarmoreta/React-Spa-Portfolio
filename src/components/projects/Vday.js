import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import vday from "../../videos/vday.mp4";

const Restrant = () => {
  return (
    <Container className="m-0 p-0">
      <video width="370" height="auto" autoPlay loop muted playsInline>
        <source src={vday} type="video/mp4" />
        Your browser does not support the video.
      </video>
      <Card border="secondary" className="card m-3">
        <Card.Body>
          <Card.Title>V-Day Gift Generator</Card.Title>
          <Card.Text style={{ fontFamily: "Lucida Sans" }}>
            Valentine's day gift generator using OpenAI's text-davinci-003 model
            API, React, Nextjs, and Vercel to build SPA.
          </Card.Text>
          <a
            href="https://vday-gift-ideas-3hqr8mtax-omoreta-gmailcom.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="info" size="lg">
              Gift Ideas
            </Button>
          </a>
        </Card.Body>
        <Card.Footer>
          <a
            href="https://github.com/omarmoreta/chatGPT-vday-generator"
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
