// Home.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import SkillsSection from "../components/sections/SkillsSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import ContactSection from "../components/sections/ContactSection";
import Footer from "../components/Footer";

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
    <div className="min-h-screen flex flex-col">
      {/* Main content */}
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Footer always at bottom */}
      <Footer />
    </div>
  );
};
export default Home;
