import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import about from "../../videos/about.mp4";

const Experience = () => {
  return (
    <Card border="primary" className="mb-3">
      <video
        autoPlay
        loop
        muted
        playsInline
        alt="linkedin and github pages"
        type="video/mp4"
      >
        <source src={about} type="video/mp4" />
      </video>
      <Card.Body>
        <Card.Title>Experience</Card.Title>
        <Card.Text style={{ fontFamily: "Lucida Sans" }}>
          Full-stack developer open to new opportunities. Volunteering at a
          local high school to help students learn Python as a TEALS volunteer.
        </Card.Text>
        <a
          href="https://www.linkedin.com/in/moretaomar/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="primary" size="lg">
            LinkedIn
          </Button>
        </a>
      </Card.Body>
      <Card.Footer>Open to Work</Card.Footer>
    </Card>
  );
};

export default Experience;
