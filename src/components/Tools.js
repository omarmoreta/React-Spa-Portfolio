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
      <br />
      <Container>
        <Row fluid xxl={2}>
          <Container>
            <img alt="TEALS program badge" src="https://images.credly.com/size/340x340/images/88abc6d6-27c3-4cc4-96fc-78bf7346e9cb/image.png" />
            <img alt="Rutgers Fintech badge" src="https://api.accredible.com/v1/frontend/credential_website_embed_image/badge/76713602" />
          </Container>
          <Container>
            <br />
            <h2>Languages and Tools</h2>
            <br />
            <h4>HTML | CSS | JavaScript | Python | Java</h4>
            <h4>Express | Node | React | Flask</h4>
            <h4>Solidity | Ganache | Truffle | Scikit | Pandas | Numpy</h4>
            <h4>PostgreSQL | MongoDB | Selenium | Cucumber | Cypress</h4>
            <h4>Postman | SoapUI | Gradle | Maven | Bitbucket | Redux</h4>
            <h4>CircleCI | Jenkins | AWS Cloudfront | Sentry</h4>
            <h4>Github | Heroku | Netlify | Vercel | Jira | Confluence</h4>
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
        <Row fluid xxl={2}>
          <Container>
            <h1>{gitHubName}</h1>
            <img
              style={{ borderRadius: "500px", maxWidth: "370px" }}
              src={gitHubImageURL}
              alt="Github profile face"
            />
          </Container>
        </Row>
      </Container>
    </div >
  );
};

export default Tools;
