import React from "react";
import About from "./About";
import Bio from "./Bio";
import Contact from "./Contact";
import Hero from "./Hero";
import Projects from "./Projects";
import Skill from "./Skill";

const Home = () => {
  return (
    <div className="home" id="home">
      <Hero />
      <Bio />
      <Projects />
      <Skill />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
