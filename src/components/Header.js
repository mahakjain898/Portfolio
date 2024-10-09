import React from "react";
import Container from "./Container";

const Header = () => {
  return (
    <Container>
      <div className="flex justify-between items-center w-full h-full text-black sticky ">
        <div className="flex items-center p-2">
          <div className="m-2">Mahak Jain</div>
        </div>

        <div className="flex items-center">
          <ul className="flex">
            <li className="px-6 py-4">Home</li>
            <li className="px-6 py-4">About</li>
            <li className="px-6 py-4">Project</li>
            <li className="px-6 py-4">Resume</li>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Header;
