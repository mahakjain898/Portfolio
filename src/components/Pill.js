import React from "react";

const Pill = ({ items }) => {
  return (
    <div className="flex flex-wrap py-3">
      {items.map((ele, index) => (
        <span
          key={index}
          className="bg-[#ffc98a] text-black text-[14px] h-[27px] mr-2 mb-2 px-3 py-1 rounded-full shadow-lg"
        >
          {ele}
        </span>
      ))}
    </div>
  );
};

export default Pill;
