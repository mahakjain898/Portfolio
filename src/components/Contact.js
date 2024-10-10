import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="bg-gray-300 text-[20px] h-[400px] w-[1081px] bg-opacity-20 font-manrope py-14 px-10 border border-black border-opacity-20 rounded-2xl shadow-md flex flex-col justify-between">
        <div className="w-9/12">
          <div className="text-[#FFA237] font-bold mb-4 py-2">Get in touch</div>
          <div className="text-gray-700 mb-6 py-2 text-justify">
            Whether you have a question, a project idea, or just want to say
            hello, I'd love to hear from you. Reach out and let's start a
            conversation.
          </div>
          <button className="bg-white text-[20px] text-black border-black border-solid px-6 py-2 rounded-lg transition-all duration-200 ease-in-out hover:shadow-[0_4px_20px_rgba(255,162,55,0.6)]">
            Interview me
          </button>
        </div>

        {/* Footer Section aligned with everything */}
        <div className="mt-10 text-gray-500 text-[16px] w-9/12">
          2024 @Made by yours truly
        </div>
      </div>
    </div>
  );
};

export default Contact;
