import "./App.css";
import React, { useEffect, useState, Suspense } from "react";
import Button from "react-bootstrap/Button";
import TopBar from "./components/TopBar";
import Intro from "./components/Intro";
import About from "./components/About";
const Contact = React.lazy(() => import("./components/Contact"));
const Projects = React.lazy(() => import("./components/Projects"));

function App() {
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
    <Suspense fallback={<div>Loading...</div>}>
      <div className="App">
        <TopBar />
        <Intro />
        <Projects />
        <About />
        <div>
          <h1>{gitHubName}</h1>
          <div style={{ marginTop: "70px", marginBottom: "70px" }}>
            <img
              style={{ borderRadius: "500px", maxWidth: "370px" }}
              src={gitHubImageURL}
              alt="Github profile image"
            />
            <br />
            <br />
            <div>
              <a href={gitHubURL} target="_blank" rel="noopener noreferrer">
                <Button variant="secondary" size="lg">
                  GitHub
                </Button>
              </a>
            </div>
          </div>
        </div>
        <Contact />
      </div>
    </Suspense>
  );
}

export default App;
