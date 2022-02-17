import "./App.css";
import TopBar from "./components/TopBar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <TopBar />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
