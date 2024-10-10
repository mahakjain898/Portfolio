import React from "react";
import Card from "./Card";

const Projects = () => {
  return (
    <div>
      <div className="relative mb-4">
        <h2 className="text-gray-900 dark:text-white mb-2 text-[24px] inline-block">
          Projects
        </h2>
        <div className="w-1/12 absolute left-0 right-0 bottom-0 h-[4px] bg-[#FFA237]"></div>
      </div>

      {/* Flex container to hold exactly 3 cards per row */}
      <div className="flex flex-wrap -mx-4 py-10">
        <Card
          title="Insurance Maintenance"
          description="Developed a scalable backend in Node.js, integrating Redis for data storage, RabbitMQ for task processing, and Elasticsearch with Kibana for advanced querying and visualization."
          link="https://github.com/mahakjain898/Insurance-Maintenance"
        />
        <Card
          title="Crowdfunding Platform"
          description="Developed a crowdfunding platform that enables users to discover and contribute to global projects while providing insights into popular initiatives and backers."
          link="https://example.com/crowdfunding"
        />
        <Card
          title="Netflix GPT"
          description="Developed an intelligent movie recommendation platform that utilizes GPT for AI-driven insights and GraphQL for efficient data querying."
          //   i="https://example.com/netflix-gpt-image.jpg"
          link="https://github.com/mahakjain898/netflix-gpt"
        />
        <Card
          title="Web Monitoring Tool"
          description="Built a high-availability monitoring system with Kubernetes and AWS ECR, automating CI/CD pipelines and real-time logging using the EFK stack for improved reliability."
        />
        <Card
          title="Swigger"
          description="Built a real-time web scraping tool for monitoring site changes and alerting users of updates."
          link="https://github.com/mahakjain898/Swigger"
        />
        <Card
          title="Shopping Cart"
          description="Developed a robust shopping cart system using microservices architecture with payment gateway integration."
          link="https://github.com/mahakjain898/shopping-cart"
        />
      </div>
    </div>
  );
};

export default Projects;
