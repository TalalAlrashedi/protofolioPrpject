import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import DownArrow from "../../utils/DownArrow";
import DevicePreview from "./DevicePreview.tsx";

const HeroSection = () => {
  const { t } = useTranslation();
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section
      id="hero"
      className={`relative px-4 py-15 overflow-hidden min-h-screen flex flex-col items-center justify-center gap-2 mt-5 ${
        imageLoaded ? "animate-fade-up" : "opacity-0"
      }`}
    >
      {/* Intro */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-center lg:space-x-40 gap-8 p-8 w-full max-w-6xl">
        {/* Left - Text + Social */}
        <div className="flex flex-col items-center md:items-start text-[var(--color-font)] order-2 sm:order-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight ">
            {t("hero_greeting")}
            <span className="block text-[var(--color-introduce)]">
              {t("hero_name")}
            </span>
          </h1>
          <p className="text-lg text-[var(--color-font)] mb-6 text-center md:text-left">
            {t("hero_professions")}
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-6 text-2xl text-[var(--color-secondary)] mb-6">
            <a href="https://github.com/TalalAlrashedi" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-transform transform hover:scale-110">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/talal-alshaban-3a2127273/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-transform transform hover:scale-110">
              <FaLinkedin />
            </a>
            <a href="https://x.com/t_a_a5" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-transform transform hover:scale-110">
              <BsTwitterX />
            </a>
          </div>

          {/* Download CV */}
          <a
            href="/cv/talalAlshaban.pdf"
            download
            className="inline-block bg-[var(--color-secondary)] hover:opacity-80 text-white px-6 py-3 rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            {t("download_cv")}
          </a>
        </div>

        {/* Right - Profile Image */}
        <div className="flex-shrink-0 flex py-8 justify-center md:justify-end order-1 md:order-2">
          <img
            src="/cv/profile4.png"
            alt="Talal Al Shaban"
            className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-[var(--color-secondary)] shadow-lg"
            onLoad={() => setImageLoaded(true)}
            loading="lazy"
          />
        </div>
      </div>

      <DownArrow />

      {/* Device Preview */}
      <DevicePreview />
    </section>
  );
};

export default HeroSection;