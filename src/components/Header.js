import React from "react";
import Container from "./Container";

const Header = () => {
  return (
    <div className="pt-[42px]">
      <Container>
        <div className="flex justify-between items-center w-full h-full sticky ">
          <div className="flex items-center p-2">
            <div className="relative m-2 text-black transition-transform duration-200 ease-in-out transform hover:scale-110 hover:text-orange-600">
              Mahak Jain
              <span className="absolute left-0 right-0 bottom-0 h-1 bg-orange-300 scale-0 transition-transform duration-200 ease-in-out transform hover:scale-100" />
            </div>
          </div>

          <div className="flex items-center">
            <ul className="flex">
              {["Home", "About", "Project", "Resume"].map((item) => (
                <li
                  key={item}
                  className="relative px-6 py-4 transition-transform duration-200 ease-in-out transform hover:scale-110 hover:text-orange-600 hover:cursor-pointer"
                >
                  <div>{item}</div>
                  <span className="absolute left-0 right-0 bottom-0 h-1 bg-orange-300 scale-0 transition-transform duration-200 ease-in-out transform hover:scale-100" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
