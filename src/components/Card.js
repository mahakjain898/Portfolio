import React from "react";

const Card = ({ i, title, description, link }) => {
  const content = (
    <div className="font-nunito py-6 bg-gray-300 bg-opacity-20 shadow-lg rounded-lg p-6 w-full transition-transform duration-200 ease-in-out transform hover:scale-105 hover:shadow-[0px_4px_15px_#fd9983]">
      {i && (
        <div className="mb-4">
          <img src={i} alt={title} className="w-full h-auto rounded-md" />
        </div>
      )}
      <div className="font-semibold text-[20px] mb-2 text-gray-900">
        {title}
      </div>
      <p className="text-gray-700 text-base text-[16px]">{description}</p>
    </div>
  );

  return link ? (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-6"
    >
      {content}
    </a>
  ) : (
    <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-6">{content}</div>
  );
};

export default Card;
