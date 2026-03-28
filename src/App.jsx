import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Certificates />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
