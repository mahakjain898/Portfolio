import React from "react";
import Home from "./Home";
import WorkExperience from "./WorkExperience";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

const Body = () => {
  return (
    <div>
      <Home />
      <WorkExperience />
      <About />
      <Projects />
      <Contact />
    </div>
  );
};

export default Body;
