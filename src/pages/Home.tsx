// Home.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import SkillsSection from "../components/sections/SkillsSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import ContactSection from "../components/sections/ContactSection";
import Footer from "../components/common/Footer";
import ToolsSection from "../components/sections/ToolsSection";
import CoursesSection from "../components/sections/CoursesSection";
import ExperienceSection from "../components/sections/ExperienceSection";
import CertificationsSection from "../components/sections/CertificationsSection";
const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToId) {
      const targetId = location.state.scrollToId;
  
      const onLoad = () => {
        const section = document.getElementById(targetId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      };
  
      if (document.readyState === "complete") {
        onLoad();
      } else {
        window.addEventListener("load", onLoad);
        return () => window.removeEventListener("load", onLoad);
      }
    }
  }, [location]);
  return (
    <div className="min-h-screen flex flex-col">
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection/>
        <div className=" max-w-6xl mx-auto md:px-6 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-8  text-white ">
          {" "}
          <SkillsSection />
          <ToolsSection />
        </div>

        <ProjectsSection />
        <CertificationsSection />
        <CoursesSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};
export default Home;
