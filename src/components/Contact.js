import React from "react";

const Contact = () => {
  return (
    <div className="pb-[100px]">
      <div className="bg-[#ffd5ad] text-[20px] h-[450px] w-[1081px]  font-manrope pb-[90px] pt-[48px] pl-[68px] border  rounded-2xl flex flex-col justify-between">
        <div className="w-9/12">
          <div className="g-[#f0a45d] text-[32px] font-bold mb-[16px]">
            Get in touch
          </div>
          <div className="text-gray-700 text-[18px] mb-6 text-justify">
            Whether you have a question, a project idea, or just want to say
            hello, I'd love to hear from you. Reach out and let's start a
            conversation.
          </div>
          <div className="flex space-x-4">
            <a href="https://calendly.com/jainmahak1310/30min">
              <button className="bg-white text-[20px] text-black border-black border-solid px-6 py-2 rounded-lg transition-all duration-200 ease-in-out hover:shadow-[0_4px_20px_rgba(255,162,55,0.6)]">
                Interview me
              </button>
            </a>

            <a href="mailto:jainmahak1310.com">
              <button className="bg-white text-[20px] text-black border-black border-solid px-6 py-2 rounded-lg transition-all duration-200 ease-in-out hover:shadow-[0_4px_20px_rgba(255,162,55,0.6)]">
                Email me
              </button>
            </a>
          </div>
        </div>

        {/* Footer Section aligned with everything */}
        <div className=" text-black-500 font-semibold text-[20px] w-9/12">
          2024 @Made by yours truly
        </div>
      </div>
    </div>
  );
};

export default Contact;
