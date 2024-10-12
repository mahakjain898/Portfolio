import React from "react";
import Card from "./Card";
import insu from "../public/insurance.jpeg";
import netf from "../public/netflixgpt.png";
import crowd from "../public/crowd.jpeg";
import swi from "../public/swiggy.png";
import shop from "../public/shop.png";
import we from "../public/web.jpeg";

const Projects = () => {
  return (
    <div>
      <div className="relative mb-4">
        <h2 className="text-gray-900 mb-2 text-[24px] inline-block">
          Projects
        </h2>
        <div className="w-1/12 absolute left-0 right-0 bottom-0 h-[4px] bg-[#FFA237]"></div>
      </div>

      {/* Flex container to hold cards in a responsive grid */}
      <div className="flex flex-wrap -mx-4 py-10">
        <Card
          title="Swiggy"
          description="Built a real-time web scraping tool for monitoring site changes and alerting users of updates."
          link="https://github.com/mahakjain898/Swigger"
          i={swi}
        />
        <Card
          title="Netflix GPT"
          description="Developed an intelligent movie recommendation platform that utilizes GPT for AI-driven insights and GraphQL for efficient data querying."
          link="https://github.com/mahakjain898/netflix-gpt"
          i={netf}
        />
        <Card
          title="Shopping Cart"
          description="Developed a robust shopping cart system using microservices architecture with payment gateway integration."
          link="https://github.com/mahakjain898/shopping-cart"
          i={shop}
        />

        <Card
          title="Insurance Maintenance"
          description="Developed a scalable backend in Node.js, integrating Redis for data storage, RabbitMQ for task processing, and Elasticsearch with Kibana for advanced querying and visualization."
          link="https://github.com/mahakjain898/Insurance-Maintenance"
          i={insu}
        />
        <Card
          title="Crowdfunding Platform"
          description="Developed a crowdfunding platform that enables users to discover and contribute to global projects while providing insights into popular initiatives and backers."
          link="https://github.com/mahakjain898/Crowd-Funding-Application"
          i={crowd}
        />

        <Card
          title="Web Monitoring Tool"
          description="Built a high-availability monitoring system with Kubernetes and AWS ECR, automating CI/CD pipelines and real-time logging using the EFK stack for improved reliability."
          i={we}
        />
      </div>
    </div>
  );
};

export default Projects;
