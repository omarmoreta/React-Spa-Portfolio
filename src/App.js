import "./App.css";
import { useEffect, useState } from "react";
import TopBar from "./components/TopBar";
import Intro from "./components/Intro";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [gitHubURL, setGitHubURL] = useState("");
  const [gitHubImageURL, setGitHubImageURL] = useState("");

  useEffect(() => {
    fetch("https://api.github.com/users/omarmoreta")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
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
      <div style={{ marginTop: "70px", marginBottom: "70px" }}>
        <img
          id="contact"
          style={{ borderRadius: "500px" }}
          src={gitHubImageURL}
          alt="Github profile image"
        />
        <br />
        <br />
        <div>
          <a href={gitHubURL}>
            <button>GitHub</button>
          </a>
        </div>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
