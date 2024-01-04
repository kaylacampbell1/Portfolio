import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav.jsx";
import Intro from "./components/Intro.jsx";
import AboutMe from "./components/AboutMe.jsx";
import Experiences from "./components/Experiences.jsx";
import Projects from "./components/Projects.jsx";
import Education from "./components/Education.jsx";
import Connections from "./components/Connections.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div id="portfolio">
      <Nav />
      <main>
        <Intro />
        <AboutMe />
        <Experiences />
        <Projects />
        {/* <Education /> */}
      </main>

      <Connections />
      <Footer />
    </div>
  );
}

export default App;
