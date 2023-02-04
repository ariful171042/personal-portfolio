import React from "react";
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
    </div>
  );
};

export default Home;
