import React from "react";
import persis from "../public/persistent.jpeg";
import radical from "../public/radical.jpeg";
import quest from "../public/quest.jpeg";
import Pill from "./Pill";

const WorkExperienceItem = ({ company, date, description, icon, i }) => (
  <li className="mb-10 flex items-start font-nunito">
    <span className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full">
      {icon}
    </span>
    <div className="ml-6">
      <h3 className="text-[20px] py-2 text-gray-700">{company}</h3>
      <time className="block mb-1 text-sm font-normal leading-none text-gray-400">
        {date}
      </time>
      <p className="text-base py-2 font-light text-gray-700 text-[16px]">
        {description}
      </p>
      {/* Render Pill component here to align it with the description */}
      {i && <Pill items={i} />}
    </div>
  </li>
);

const WorkExperience = () => {
  return (
    <section className="py-10 font-manrope">
      <div className="relative mb-4 w-3/12 py-2">
        <h2 className="text-gray-900 mb-2 text-[24px] inline-block">
          Work Experience
        </h2>
        <div className="absolute left-0 w-9/12 right-0 bottom-0 h-[4px] bg-[#FFA237]"></div>
      </div>
      <ol className="relative py-6">
        <WorkExperienceItem
          company="Radical AI"
          date="February 2024 - July 2024"
          description="Created a scalable quiz platform that dynamically generates quizzes from user-uploaded documents, optimizes performance with caching and asynchronous processing, and enhances user experience with interactive features and real-time feedback."
          icon={
            <img
              src={radical}
              alt="Radical AI Logo"
              className="w-12 h-12 rounded-full object-cover"
            />
          }
          i={["GCP", "JavaScript", "React", "Django", "Python", "NextJS"]}
        />

        <WorkExperienceItem
          company="Persistent Systems"
          date="June 2021 - July 2022"
          description="Enhanced application performance by optimizing data fetching and state management, improving backend efficiency for healthcare management, and streamlining deployment processes for a DNA microservice."
          icon={
            <img
              src={persis}
              alt="Persistent Systems Logo"
              className="w-12 h-12 rounded-full object-cover"
            />
          }
          i={[
            "JavaScript",
            "React",
            "Redux",
            "AWS",
            "jQuery",
            "Node",
            "PostgreSQL",
            "Docker",
            "Jenkins",
            "Jest",
          ]}
        />
        <WorkExperienceItem
          company="Quest Global Technologies"
          date="May 2020 - June 2021"
          description="Revamped the user interface to improve development efficiency and streamlined API processes for enhanced performance and resource management."
          icon={
            <img
              src={quest}
              alt="Quest Global Technologies Logo"
              className="w-12 h-12 rounded-full object-cover"
            />
          }
          i={["Java", "Spring Boot", "ReactJS", "AWS"]}
        />
      </ol>
    </section>
  );
};

export default WorkExperience;
