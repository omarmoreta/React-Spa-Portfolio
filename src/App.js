import "./App.css";
import React, { Suspense } from "react";
import TopBar from "./components/TopBar";
import Intro from "./components/Intro";
import { Oval } from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

function App() {
  const About = React.lazy(() => import("./components/About"));
  const Contact = React.lazy(() => import("./components/Contact"));
  const Projects = React.lazy(() => import("./components/Projects"));
  const Tools = React.lazy(() => import("./components/Tools"));

  return (
    <Suspense fallback={<Oval color="#00BFFF" height={40} width={40} />}>
      <div className="App">
        <TopBar />
        <Intro />
        <Projects />
        <About />
        <Tools />
        <Contact />
      </div>
    </Suspense>
  );
}

export default App;
