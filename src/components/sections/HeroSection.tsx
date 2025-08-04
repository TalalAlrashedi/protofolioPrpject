import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

import laptopFrame from "../../assets/apple-macbookpro16-front.png";
import iphoneFrame from "../../assets/apple-iphone-15-plus-black-portrait.png";

const imagePaths = [
  "/IntelliCite.png",
  "/AttendanceProject.png",
  "/ActivationClone.png",
  "/unitedairlinesClone.png",
  "/ProductShop.png",
  "/RiyadhSeasonClone.png",
  "/Todolist.png",
  "/Weather.png",
];

const HeroSection = () => {
  const [laptopImage, setLaptopImage] = useState(imagePaths[0]);
  const [phoneImage, setPhoneImage] = useState(imagePaths[1]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setLaptopImage((prev) => getNextImage(prev));
  //     setPhoneImage((prev) => getNextImage(prev));
  //   }, 5000);
  //   return () => clearInterval(interval);
  // }, []);

  // const getNextImage = (current: string) => {
  //   const index = imagePaths.indexOf(current);
  //   return imagePaths[(index + 1) % imagePaths.length];
  // };

  return (
    <section
      id="hero"
      className="relative text-center px-4 overflow-hidden min-h-screen flex flex-col items-center justify-center gap-10 "
    >
      {/* Blur animation background circle */}

      {/* Intro text */}
      <div className="mx-auto animate-fade-up text-gray-800 p-6">
        <div className="flex justify-center mb-6">
          <img
            src="/personalPhoto1"
            alt="Talal Alrashedi"
            title="Talal Alrashedi"
            className="w-40 h-40 rounded-full object-cover border-4 border-indigo-800 shadow-lg"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Hello, I'm{" "}
          <span className="text-[var(--color-secondary)]">Talal Alrashedi</span>
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Software Engineer | Web Developer | Cybersecurity & Data Analyst
        </p>

        {/* Social icons */}
        <div className="flex justify-center gap-6 text-2xl text-indigo-600 mb-6">
          <a
            href="https://github.com/username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-transform transform hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-transform transform hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-transform transform hover:scale-110"
          >
            <FaTwitter />
          </a>
        </div>

        {/* CV button */}
        <a
          href="/cv/TalalAlrashediCv.pdf"
          download
          className="inline-block bg-[var(--color-secondary)] hover:bg-[#13302b] text-white px-6 py-3 rounded-lg shadow-md transition-transform transform hover:scale-105"
        >
          Download CV
        </a>
      </div>

      {/* Project preview in device frames */}
      <div className="relative flex flex-col md:flex-row items-center justify-center mt-10 gap-6">
        {/* Laptop frame */}
        <div className="relative w-[320px] md:w-[650px]">
          <img
            src={laptopFrame}
            alt="Laptop"
            className="w-full h-auto object-contain"
          />

          <div className="absolute top-[11%] left-[10%] w-[80%] h-[78%]  shadow-md">
            <img
              src={laptopImage}
              alt="Project on laptop"
              className="w-full object-cover"
            />
          </div>
        </div>

        {/* iPhone frame */}
        <div className="relative w-[100px] md:w-[160px] -mt-10 md:mt-0 z-10">
          <img
            src={iphoneFrame}
            alt="Phone"
            className="relative will-change-[top,left] -left-[18px] top-[40px] md:-left-[25px] md:top-[50px] z-50"
          />

          {/* Inner screen for phone */}
          <div className="absolute top-[13%] left-[12%] w-[76%] h-[74%] overflow-hidden rounded-xl">
            <img
              src={phoneImage}
              alt="Project on phone"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
