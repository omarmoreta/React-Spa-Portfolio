import "./App.css";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import TopBar from "./components/TopBar";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  const [gitHubName, setGitHubName] = useState("");
  const [gitHubURL, setGitHubURL] = useState("");
  const [gitHubImageURL, setGitHubImageURL] = useState("");

  useEffect(() => {
    fetch("https://api.github.com/users/omarmoreta")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setGitHubName(data.name);
        setGitHubURL(data.html_url);
        setGitHubImageURL(data.avatar_url);
      });
  }, []);

  return (
    <div className="App">
      <TopBar />
      <Intro />
      <Projects />
      <About />
      <div>
        <h1 id="github">{gitHubName}</h1>
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
  );
}

export default App;
