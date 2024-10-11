import React from "react";
import Marquee from "react-fast-marquee";
import { FaReact, FaNodeJs, FaPython, FaJava } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  //   SiHtml5,
  //   SiCss3,
  //   SiJson,
  //   SiKubernetes,
  //   SiJira,
  //   SiJenkins,
  //   SiApachekafka,
  //   SiGit,
  //   SiPostman,
  //   SiFirebase,
  //   SiMongodb,
  //   SiAmazondynamodb,
  //   SiRedis,
  //   SiGraphql,
  //   SiElasticsearch,
  //   SiFlask,
  //   SiDjango,
  //   SiSpringboot,
  //   SiFlutter,
  //   SiPostgresql,
} from "react-icons/si";
import { DiAngularSimple } from "react-icons/di";

const skills = [
  { icon: <SiJavascript size={60} />, name: "JavaScript" },
  { icon: <SiTypescript size={60} />, name: "TypeScript" },
  //   { icon: <FaPython size={60} />, name: "Python" },
  //   { icon: <FaJava size={60} />, name: "Java" },
  //   { icon: <SiHtml5 size={60} />, name: "HTML5" },
  //   { icon: <SiCss3 size={60} />, name: "CSS3" },
  //   { icon: <SiJson size={60} />, name: "JSON" },
  //   { icon: <FaReact size={60} />, name: "React" },
  //   { icon: <FaNodeJs size={60} />, name: "Node.js" },
  //   { icon: <SiKubernetes size={60} />, name: "Kubernetes" },
  //   { icon: <SiFlutter size={60} />, name: "Flutter" },
  //   { icon: <DiAngularSimple size={60} />, name: "Angular" },
  //   { icon: <SiFlask size={60} />, name: "Flask" },
  //   { icon: <SiDjango size={60} />, name: "Django" },
  //   { icon: <SiSpringboot size={60} />, name: "Spring Boot" },
  //   { icon: <SiGraphql size={60} />, name: "GraphQL" },
  //   { icon: <SiElasticsearch size={60} />, name: "Elasticsearch" },
  //   { icon: <SiJira size={60} />, name: "Jira" },
  //   { icon: <SiJenkins size={60} />, name: "Jenkins" },
  //   { icon: <SiApachekafka size={60} />, name: "Kafka" },
  //   { icon: <SiGit size={60} />, name: "Git" },
  //   { icon: <SiPostman size={60} />, name: "Postman" },
  //   { icon: <SiFirebase size={60} />, name: "Firebase" },
  //   { icon: <SiPostgresql size={60} />, name: "PostgreSQL" },
  //   { icon: <SiRedis size={60} />, name: "Redis" },
  //   { icon: <SiMongodb size={60} />, name: "MongoDB" },
  //   { icon: <SiAmazondynamodb size={60} />, name: "DynamoDB" },
];

const SkillsMarquee = () => {
  return (
    <div className="skills-marquee">
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
    </div>
  );
};

export default SkillsMarquee;
