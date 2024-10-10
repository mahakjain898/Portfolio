import React from "react";
import Home from "./Home";
import WorkExperience from "./WorkExperience";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";]

const Body = () => {
  return (
    <div>
      <Home />
      <WorkExperience />
      <Projects />
      <About />
      <Contact />
    </div>
  );
};

export default Body;
