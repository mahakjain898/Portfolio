import React from "react";
import i from "../public/mahak.png";

const About = () => {
  return (
    <div className="py-[90px]">
      <div>
        <div className="relative mb-4">
          <h2 className="text-gray-900  mb-2 text-[24px] inline-block">
            About
          </h2>
          <div className="w-[70px] absolute left-0 right-0 bottom-0 h-[4px] bg-[#FFA237]"></div>
        </div>

        <div className="flex items-center gap-6 font-nunito py-20">
          <img
            src={i}
            alt="Mahak Jain"
            className="w-[436px] h-[300px] rounded-xl object-cover"
          />
          <div className="pl-[64px] text-gray-700  text-[22px] leading-relaxed w-[564px]">
            I'm a passionate software developer who loves solving problems
            through code. When I’m not busy building innovative solutions,
            you’ll likely find me immersed in a good book, whipping up a new
            recipe in the kitchen, or indulging in my favorite ramen.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
