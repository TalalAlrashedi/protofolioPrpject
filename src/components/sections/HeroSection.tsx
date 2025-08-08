import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

import laptopFrame from "../../assets/apple-macbookpro16-front.png";
import iphoneFrame from "../../assets/apple-iphone-15-plus-black-portrait.png";

// Separate image paths
const allImages = [
  "/IntelliCite.png",
  "/intellciteResponsive.jpeg",
  "/AttendanceProject.png",
  "/studentManagmentResponsive.jpeg",
  "/ActivationClone.png",
  "/activationResponsive.jpeg",
  "/unitedairlinesClone.png",
  "/unitedAirlinesResponsive.jpeg",
  "/RiyadhSeasonClone.png",
  "/riyadhResponsive.jpeg",
  "/Todolist.png",
  "/todolistResponsive.jpeg",
];

// Filtered image paths
const laptopImages = allImages.filter((img) => !img.toLowerCase().includes("responsive"));
const phoneImages = allImages.filter((img) => img.toLowerCase().includes("responsive"));

const HeroSection = () => {
  const [laptopIndex, setLaptopIndex] = useState(0);
  const [phoneIndex, setPhoneIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setLaptopIndex((prev) => (prev + 1) % laptopImages.length);
      setPhoneIndex((prev) => (prev + 1) % phoneImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);
  
  return (
    <section
      id="hero"
      className="relative px-4 overflow-hidden min-h-screen flex flex-col items-center justify-center gap-2 mt-5"
    >
      {/* Intro */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center lg:space-x-40 gap-8 p-8 w-full max-w-6xl">
        
        {/* Left - Text + Social */}
        <div className="flex flex-col items-center md:items-start text-gray-800 order-2 sm:order-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-center md:text-left">
            Hello, I'm
            <span className="block text-[var(--color-secondary)]">Talal Al Shaban</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6 text-center md:text-left">
            Software Engineer | Web Developer | Cybersecurity & Data Analyst
          </p>
  
          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-6 text-2xl text-[var(--color-secondary)] mb-6">
            <a href="https://github.com/username" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-transform transform hover:scale-110"><FaGithub /></a>
            <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-transform transform hover:scale-110"><FaLinkedin /></a>
            <a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-transform transform hover:scale-110"><FaTwitter /></a>
          </div>
  
          {/* Download CV */}
          <a
            href="/cv/talalalshaban.pdf"
            download
            className="inline-block bg-[var(--color-secondary)] hover:bg-[#13302b] text-white px-6 py-3 rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            Download CV
          </a>
        </div>
  
        {/* Right - Profile Image */}
        <div className="flex-shrink-0 flex py-8 justify-center md:justify-end order-1 md:order-2">
          <img
            src="/personalPhoto1"
            alt="Talal Al Shaban"
            className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-[var(--color-secondary)] shadow-lg"
          />
        </div>
      </div>
  
      {/* Device Preview */}
      <div className="relative flex flex-col md:flex-row items-center justify-center mt-4">
        {/* Laptop */}
        <div className="relative w-[320px] md:w-[670px]">
          <img src={laptopFrame} alt="Laptop" className="w-full h-auto object-contain" />
          <div className="absolute top-[11%] left-[10%] w-[80%] h-[78%] overflow-hidden shadow-md rounded-md">
            <img
              src={laptopImages[laptopIndex]}
              alt="Project on laptop"
              className="w-full h-full"
            />
          </div>
        </div>
  
        {/* Phone */}
        <div className="relative w-[100px] md:ml-3 md:w-[170px] md:mt-1 z-10 mt-5">
          <img
            src={iphoneFrame}
            alt="Phone"
            className="relative md:-left-[20px] md:top-[45px] z-10"
          />
          <div className="absolute top-[3.6%] left-[6%] md:top-[17%] md:-left-2 w-[90%] h-[100%]  md:w-[85%] md:h-[100%] overflow-hidden">
            <img
              src={phoneImages[phoneIndex]}
              alt="Project on phone"
              className="w-100 h-[92.5%] rounded-xl md:rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
  }

export default HeroSection;