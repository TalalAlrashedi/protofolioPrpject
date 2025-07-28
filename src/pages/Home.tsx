// Home.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import SkillsSection from "../components/sections/SkillsSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import ContactSection from "../components/sections/ContactSection";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToId) {
      const targetId = location.state.scrollToId;
      const section = document.getElementById(targetId);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="font-sans min-h-screen bg-[var(--color-bg)] text-[var(--color-text)]">
      <HeroSection />

      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
};

export default Home;
