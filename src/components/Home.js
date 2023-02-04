import React from "react";
import About from "./About";
import Bio from "./Bio";
import Hero from "./Hero";
import Projects from "./Projects";
import Skill from "./Skill";

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Bio />
      <Projects />
      <Skill />
      <About />
    </div>
  );
};

export default Home;
