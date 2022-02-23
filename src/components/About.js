import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter } from "react-router-dom";
import about from "../videos/about.mp4";
import njit from "../videos/NJIT.mp4";
import resume from "../videos/Resume.mp4";

const About = () => {
  return (
    <div>
      <h1 id="about">About Me</h1>
      <div>
        <Container style={{ marginTop: "50px", marginBottom: "50px" }}>
          <Row xs={1} md={3}>
            <Col>
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
                    Full-stack developer open to new opportunities. Volunteering
                    at a local high school to help students learn Python as a
                    TEALS volunteer.
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
            </Col>
            <Col>
              <Card border="danger" className="mb-3">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  alt="restaurant review application"
                  type="video/mp4"
                >
                  <source src={njit} type="video/mp4" />
                </video>
                <Card.Body>
                  <Card.Title>Education</Card.Title>
                  <Card.Text style={{ fontFamily: "Lucida Sans" }}>
                    Software Development bootcamp student at the New Jersey
                    Institute of Technology. I was also a POSSE Foundation
                    scholar at Bucknell University.
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
            </Col>
            <Col>
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
                    If you would like a copy of my resume, please click request.
                    Complete the contact form and I will get back to you as soon
                    as possible.
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
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
