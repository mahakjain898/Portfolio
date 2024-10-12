import React, { Suspense } from "react";
import Home from "./Home";
import WorkExperience from "./WorkExperience";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import SkillsMarquee from "./SkillsMarquee";

const Body = () => {
  return (
    <div>
      <Home />
      <WorkExperience />
      <React.Suspense fallback={<div>Loading...</div>}>
        {/* <SkillsMarquee /> */}
      </React.Suspense>

      <Projects />
      <About />
      <Contact />
    </div>
  );
};

export default Body;
