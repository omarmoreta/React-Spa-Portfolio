import "./App.css";
import { useEffect, useState } from "react";
import TopBar from "./components/TopBar";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

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
      <div style={{ marginTop: "70px" }}>
        <img
          style={{ borderRadius: "500px" }}
          src={gitHubImageURL}
          alt="Github profile image"
        />
        <br />
        <br />
        <div>
          <a href={gitHubURL}>
            <button>GitHub Page</button>
          </a>
        </div>
      </div>

      <Projects />

      <Contact />
      <Footer />
    </div>
  );
}

export default App;
