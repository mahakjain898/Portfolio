// Container.js
import React from "react";

const Container = ({ children }) => {
  return (
    <div className=" flex m-2 py-2 font-light bg-gray-300 bg-opacity-20 rounded-[24px] text-xl justify-between w-[1084px] h-[68px] text-black">
      {" "}
      {/* Added text-black here */}
      {children} {/* This will render the content passed to the Container */}
    </div>
  );
};

export default Container;
