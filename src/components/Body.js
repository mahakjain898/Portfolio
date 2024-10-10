import React from "react";
import Home from "./Home";
import WorkExperience from "./WorkExperience";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Header from "./Header";

const Body = () => {
  return (
    <div className="flex justify-center items-start min-h-screen bg-gradient-to-t from-white to-[#FFFDF6]">
      <div className="w-[1084px]">
        <Header />
        <Home />
        <WorkExperience />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default Body;
