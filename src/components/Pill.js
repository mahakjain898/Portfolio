import React from "react";

const Pill = ({ items }) => {
  return (
    <div className="flex flex-wrap">
      {items.map((ele, index) => (
        <span
          key={index}
          className="bg-[#ffc98a] text-Black text-[14px] h-[27px] mr-2 mb-2 px-3 py-1 rounded-full"
        >
          {ele}
        </span>
      ))}
    </div>
  );
};

export default Pill;