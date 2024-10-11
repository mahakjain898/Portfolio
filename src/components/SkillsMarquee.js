import React, { Suspense } from "react";

// Dynamically import react-fast-marquee
const Marquee = React.lazy(() => import("react-fast-marquee"));

// Dynamically import icons
const FaReact = React.lazy(() =>
  import("react-icons/fa").then((module) => ({ default: module.FaReact }))
);
const FaNodeJs = React.lazy(() =>
  import("react-icons/fa").then((module) => ({ default: module.FaNodeJs }))
);
const FaPython = React.lazy(() =>
  import("react-icons/fa").then((module) => ({ default: module.FaPython }))
);
const FaJava = React.lazy(() =>
  import("react-icons/fa").then((module) => ({ default: module.FaJava }))
);
const SiJavascript = React.lazy(() =>
  import("react-icons/si").then((module) => ({ default: module.SiJavascript }))
);
const SiTypescript = React.lazy(() =>
  import("react-icons/si").then((module) => ({ default: module.SiTypescript }))
);
const SiHtml5 = React.lazy(() =>
  import("react-icons/si").then((module) => ({ default: module.SiHtml5 }))
);
const SiCss3 = React.lazy(() =>
  import("react-icons/si").then((module) => ({ default: module.SiCss3 }))
);
const SiJson = React.lazy(() =>
  import("react-icons/si").then((module) => ({ default: module.SiJson }))
);
const SiKubernetes = React.lazy(() =>
  import("react-icons/si").then((module) => ({ default: module.SiKubernetes }))
);
const DiAngularSimple = React.lazy(() =>
  import("react-icons/di").then((module) => ({
    default: module.DiAngularSimple,
  }))
);
// Add other icons similarly...

const skills = [
  { icon: <SiJavascript size={60} />, name: "JavaScript" },
  { icon: <SiTypescript size={60} />, name: "TypeScript" },
  { icon: <FaPython size={60} />, name: "Python" },
  { icon: <FaJava size={60} />, name: "Java" },
  { icon: <SiHtml5 size={60} />, name: "HTML5" },
  { icon: <SiCss3 size={60} />, name: "CSS3" },
  { icon: <SiJson size={60} />, name: "JSON" },
  { icon: <FaReact size={60} />, name: "React" },
  { icon: <FaNodeJs size={60} />, name: "Node.js" },
  { icon: <SiKubernetes size={60} />, name: "Kubernetes" },
  { icon: <DiAngularSimple size={60} />, name: "Angular" },
  // Add other skills similarly...
];

const SkillsMarquee = () => {
  return (
    <div className="skills-marquee">
      <Suspense fallback={<div>Loading skills...</div>}>
        <Marquee speed={60} gradient={false}>
          {skills.map((skill, index) => (
            <div key={index} className="flex flex-col items-center mx-4">
              <div className="flex items-center justify-center rounded-full bg-orange-400 w-[100px] h-[100px]">
                {skill.icon}
              </div>
              <span className="mt-2 text-sm text-center">{skill.name}</span>
            </div>
          ))}
        </Marquee>
      </Suspense>
    </div>
  );
};

export default SkillsMarquee;
