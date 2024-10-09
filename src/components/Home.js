import React, { useEffect, useState } from "react";
import ramen from "../public/giphy.gif";
import book from "../public/book.gif";
import code from "../public/coding.gif";
import git from "../public/GithubLogo.svg";
import link from "../public/LinkedinLogo.svg";
import read from "../public/ReadCvLogo.svg";
import leet from "../public/leetcode.svg";

const gifs = [ramen, code, book]; // Array of GIFs
const logos = [
  { src: git, alt: "GitHub Logo" },
  { src: link, alt: "LinkedIn Logo" },
  { src: read, alt: "Resume Logo" },
  { src: leet, alt: "LeetCode Logo" },
];
const links = [
  "https://github.com/mahakjain898",
  "https://www.linkedin.com/in/mahak-jain-b84645133/",
  "https://drive.google.com/file/d/1fmAGmOcZK3jaNK4OB_TTMcG1TNDYfNCK/view?usp=sharing",
  "https://leetcode.com/u/mahakjain1999/",
];

const Home = () => {
  const [currentGifIndex, setCurrentGifIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGifIndex((prevIndex) =>
        prevIndex === gifs.length - 1 ? 0 : prevIndex + 1
      );
    }, 3200); // Change GIF every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="flex justify-between items-center mt-[75px] pb-[100px]">
      {/* Text Section */}
      <div className="p-[10px] w-[664px]">
        <p className="text-[32px] pb-2">Hi, I am Mahak!</p>
        <p className="text-justify">
          I'm a passionate software developer who loves solving problems through
          code. When I’m not busy building innovative solutions, you’ll likely
          find me immersed in a good book, whipping up a new recipe in the
          kitchen, or indulging in my favourite ramen.
        </p>
        <div className="flex py-5 justify-start">
          {logos.map((logo, index) => (
            <a
              key={index}
              href={links[index]} // Use the index to access the correct URL
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className={`w-[32px] h-[32px] mx-2 transition duration-300 ease-in-out 
                            filter brightness-50 hover:brightness-400 
                            hover:shadow-lg hover:shadow-orange-500`} // Apply hover effect and color change
              />
            </a>
          ))}
        </div>
      </div>
      <div className="flex">
        <img
          className="w-[205px] h-[212px] rounded-[12px]"
          src={gifs[currentGifIndex]}
          alt="Slideshow GIF"
        />
      </div>
    </div>
  );
};

export default Home;
