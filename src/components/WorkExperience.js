import React from "react";
import persis from "../public/persistent.svg";
import radical from "../public/radical.svg";
import quest from "../public/quest.svg";

const WorkExperienceItem = ({ company, date, description, icon }) => (
  <li className="mb-10 ml-6">
    <span className=" absolute flex items-center justify-center w-10 h-10 bg-orange-100 rounded-full -left-3 ring-8 ring-white dark:ring-black-900 dark:bg-orange-900">
      {icon}
    </span>
    <h3 className="flex items-center mb-1 pl-4 text-[20px] pb-2 text-gray-900 dark:text-white">
      {company}
    </h3>
    <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
      {date}
    </time>
    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
      {description}
    </p>
  </li>
);

const WorkExperience = () => {
  return (
    <section className="py-10">
      <div className="relative mb-4">
        <h2 className="text-gray-900 dark:text-white mb-2 text-[24px] inline-block">
          Work Experience
        </h2>
        <div className="absolute left-0 right-0 bottom-0 h-[4px] bg-[#FFA237]"></div>
      </div>
      <ol className="relative border-l border-gray-200 dark:border-gray-700 py-6">
        <WorkExperienceItem
          company="Radical AI"
          date="February 2024 - July 2024"
          description="Created a scalable quiz platform that dynamically generates quizzes from user-uploaded documents, optimizes performance with caching and asynchronous processing, and enhances user experience with interactive features and real-time feedback."
          icon={
            <img
              src={radical}
              alt="Radical AI Logo"
              className="w-7 h-7 border-orange-50"
            />
          }
        />
        <WorkExperienceItem
          company="Persistent Systems"
          date="June 2021 - July 2022"
          description="Enhanced application performance by optimizing data fetching and state management, improving backend efficiency for healthcare management, and streamlining deployment processes for a DNA microservice."
          icon={
            <img
              src={persis}
              alt="Persistent Systems Logo"
              className="w-7 h-7 border-black"
            />
          }
        />
        <WorkExperienceItem
          company="Quest Global Technologies"
          date="May 2020 - June 2021"
          description="Revamped the user interface to improve development efficiency and streamlined API processes for enhanced performance and resource management."
          icon={
            <img
              src={quest}
              alt="Quest Global Technologies Logo"
              className="w-7 h-7 border-black"
            />
          }
        />
      </ol>
    </section>
  );
};

export default WorkExperience;
