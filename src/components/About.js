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
          <div className="pl-[64px] text-gray-700  text-[20px] leading-relaxed w-[564px]">
            As a full-stack developer, I enjoy working on both the front and
            back ends to bring ideas to life. I’m passionate about crafting
            minimalistic and modern user experiences while also optimizing
            complex backend systems for data efficiency. Whether it’s designing
            intuitive interfaces or diving into large-scale data challenges, I’m
            always excited to build impactful solutions that bridge the gap
            between aesthetics and functionality.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
