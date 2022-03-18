import React, { useEffect, useState } from "react";
import { Row, Button, Container } from "react-bootstrap";

const Tools = () => {
  const [gitHubName, setGitHubName] = useState("");
  const [gitHubURL, setGitHubURL] = useState("");
  const [gitHubImageURL, setGitHubImageURL] = useState("");

  useEffect(() => {
    fetch("https://api.github.com/users/omarmoreta")
      .then((res) => res.json())
      .then((data) => {
        setGitHubName(data.name);
        setGitHubURL(data.html_url);
        setGitHubImageURL(data.avatar_url);
      });
  }, []);

  return (
    <div>
      <h1>{gitHubName}</h1>
      <br />
      <Container>
        <Row fluid xxl={2}>
          <Container>
            <img
              style={{ borderRadius: "500px", maxWidth: "370px" }}
              src={gitHubImageURL}
              alt="profile face"
            />
          </Container>
          <Container>
            <br />
            <h2>Languages and Tools</h2>
            <br />
            <h4>HTML | CSS | JavaScript | React</h4>
            <h4>Express | Node | Redux | MongoDB</h4>
            <h4>PostgreSQL | Postman | GitHub</h4>
            <h4>Heroku | Netlify | Bootstrap | Git</h4>
            <br />
            <div style={{ marginBottom: "10px" }}>
              <a href={gitHubURL} target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" size="lg">
                  GitHub
                </Button>
              </a>
            </div>
          </Container>
        </Row>
      </Container>
    </div>
  );
};

export default Tools;
