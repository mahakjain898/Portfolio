import React from "react";
import Home from "./Home";
import WorkExperience from "./WorkExperience";
import Projects from "./Projects";
import About from "./About";
import Contact from "./Contact";
// import Pill from "./Pill";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";]

const Body = () => {
  return (
    <div>
      <Home />
      <WorkExperience />
      <Projects />
      <About />
      <Contact />
      {/* <Pill items={["java", "python"]} /> */}
    </div>
  );
};

export default Body;
