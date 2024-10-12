import React from "react";
import { BiLinkExternal } from "react-icons/bi";

const Card = ({ i, title, description, link }) => {
  const content = (
    <div className="font-nunito h-[400px] px-4 py-6 bg-gray-300 bg-opacity-20 shadow-lg rounded-xl p-6 w-full transition-transform duration-200 ease-in-out transform hover:scale-105 hover:shadow-[0px_4px_15px_#fd9983]">
      {i && (
        <div className="mb-4">
          <img src={i} alt={title} className="w-full h-auto rounded-md" />
        </div>
      )}
      <div className="flex justify-between">
        <div className="font-semibold text-[20px] mb-2 text-gray-900">
          {title}
        </div>
        <BiLinkExternal />
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
