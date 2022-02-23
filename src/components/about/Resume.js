import React from "react";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import resume from "../../videos/Resume.mp4";

const Resume = () => {
  return (
    <Card border="secondary" className="mb-3">
      <video
        autoPlay
        loop
        muted
        playsInline
        alt="restaurant review application"
        type="video/mp4"
      >
        <source src={resume} type="video/mp4" />
      </video>
      <Card.Body>
        <Card.Title>Resume</Card.Title>
        <Card.Text style={{ fontFamily: "Lucida Sans" }}>
          If you would like a copy of my resume, please click request. Complete
          the contact form and I will get back to you as soon as possible.
        </Card.Text>
        <BrowserRouter>
          <HashLink
            smooth
            to="#contactME"
            style={{
              textDecoration: "none",
            }}
          >
            <Button size="lg" variant="secondary">
              Request
            </Button>
          </HashLink>
        </BrowserRouter>
      </Card.Body>
      <Card.Footer>
        Updated Feb. 17<sup>th</sup>, 2022
      </Card.Footer>
    </Card>
  );
};

export default Resume;
