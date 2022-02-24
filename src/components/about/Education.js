import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import njit from "../../videos/NJIT.mp4";

const Education = () => {
  return (
    <Card border="danger" className="mb-3">
      <Card.Img />
      <video
        autoPlay
        loop
        muted
        playsInline
        alt="restaurant review application"
        type="video/mp4"
        src={njit}
      >
        Video not supported by browser
      </video>
      <Card.Body>
        <Card.Title>Education</Card.Title>
        <Card.Text style={{ fontFamily: "Lucida Sans" }}>
          Software Development bootcamp student at the New Jersey Institute of
          Technology. I was also a POSSE Foundation scholar at Bucknell
          University.
        </Card.Text>
        <a
          href="https://www.youtube.com/watch?v=1DB9S8GyURc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="danger" size="lg">
            NJIT
          </Button>
        </a>
      </Card.Body>
      <Card.Footer>Completion: May 2022</Card.Footer>
    </Card>
  );
};

export default Education;
