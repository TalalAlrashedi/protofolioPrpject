import ProjectCard from "../common/ProjectCard.js";
import Underline from "../common/Underline.tsx";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const projects = [
  {
    title: "IntelliCite",
    url: "https://intellicite-ui.onrender.com/",
    image: "project/IntelliCite.png",
    tags: ["React", "Tailwind", "Node.js", "API", "MongoDB", "Axios"],
    description:
      "منصة ذكاء اصطناعي لتحليل المراجع والاقتباسات الأكاديمية.\n\nAI platform for academic citation analysis and smart summaries.",
  },
  {
    title: "Nazeeh نزيه",
    url: "https://nazeeh-two.vercel.app/",
    image: "project/nazeeh.png",
    tags: ["NextJs", "Tailwind", "Node.js", "API", "MongoDB", "Axios", "AI","Python","framer"],
    description:
      "منصة ذكية لتحليل القضايا الطبية والجنائية.\n\nAI-driven platform for medical and criminal case analysis.",
  },
  {
    title: "CastleOfWallpapers",
    url: "https://castleofwallpapers.onrender.com/",
    image: "project/castleofwallpaper.jpeg",
    tags: ["React", "Tailwind", "Node.js", "API", "Axios"],
    description:
      "تطبيق لعرض وتنزيل الخلفيات عالية الجودة. باستخدام الذكاء الاصطناعي \n\nWallpaper app with search and download features and generate wallpapers using AI.",
  },
  {
    title: "Weather App",
    url: "https://weatherapp-khaki-five.vercel.app/",
    image: "project/Weather.png",
    tags: ["React", "Tailwind", "Node.js", "API", "MongoDB", "Next.js", "Axios"],
    description:
      "تطبيق طقس ببيانات لحظية ودعم تسجيل الدخول.\n\nReal-time weather app with authentication support.",
  },
  {
    title: "Activition Clone",
    url: "https://activitionclonepro.onrender.com/",
    image: "project/ActivationClone.png",
    tags: ["React", "Tailwind", "Node.js"],
    description:
      "محاكاة واجهة موقع Activision بتصميم متجاوب.\n\nResponsive UI clone of the Activision website.",
  },
  {
    title: "StudentIdeas Management",
    url: "https://mini-project-ideas-managment.onrender.com/login",
    image: "project/AttendanceProject.png",
    tags: ["React", "Tailwind", "Node.js", "API", "MongoDB", "SweetAlert2", "Axios"],
    description:
      "إدارة أفكار مشاريع الطلاب مع نظام صلاحيات.\n\nStudent project ideas management with role-based access.",
  },
  {
    title: "اعادة تصميم موقع ابن باز باستخدام HTML و CSS",
    url: "https://iimvalue.github.io/binbaz-pages/",
    image: "project/binbaz.png",
    tags: ["HTML", "CSS"],
    description:
      "إعادة تصميم موقع باستخدام HTML و CSS فقط.\n\nPure HTML and CSS website redesign.",
  },
  {
    title: "United Airlines Clone",
    url: "https://unitedairlines-651s.onrender.com/",
    image: "project/unitedairlinesClone.png",
    tags: ["React", "Tailwind", "Node.js", "API"],
    description:
      "محاكاة واجهة شركة طيران مع تجربة بحث رحلات.\n\nAirline website clone with flight search simulation.",
  },
  {
    title: "Product Shop",
    url: "https://w6-tailwind-lab1.onrender.com/",
    image: "project/ProductShop.png",
    tags: ["React", "Tailwind", "Node.js", "API", "Axios"],
    description:
      "تطبيق متجر إلكتروني تجريبي.\n\nDemo e-commerce application with API integration.",
  },
  {
    title: "Riyadh Season Clone",
    url: "https://riyadhseasonclone.onrender.com/",
    image: "project/RiyadhSeasonClone.png",
    tags: ["React", "Tailwind", "Node.js"],
    description:
      "محاكاة حديثة لموقع موسم الرياض.\n\nModern clone of the Riyadh Season website.",
  },
  {
    title: "Job Application",
    url: "https://w7-d1-hw1-hooks.onrender.com/",
    image: "https://cdn-icons-png.flaticon.com/512/1260/1260667.png",
    tags: ["React", "Tailwind", "SweetAlert2", "Axios"],
    description:
      "نموذج تقديم وظائف باستخدام React.\n\nJob application form built with React hooks.",
  },
  {
    title: "BMI Calculator",
    url: "https://bmicalc-4lo7.onrender.com/",
    image: "https://cdn-icons-png.flaticon.com/512/3126/3126591.png",
    tags: ["React", "Tailwind", "Node.js", "SweetAlert2"],
    description:
      "حاسبة مؤشر كتلة الجسم بواجهة بسيطة.\n\nSimple and responsive BMI calculator.",
  },
  {
    title: "To-Do List App",
    url: "https://todolistappt.netlify.app/",
    image: "project/Todolist.png",
    tags: ["JavaScript", "Bootstrap", "LocalStorage"],
    description:
      "تطبيق مهام مع تخزين محلي.\n\nTo-do list app with local storage support.",
  },
  {
    title: "Chat App",
    url: "https://chatapppro-3hjo.onrender.com/",
    image: "https://cdn-icons-png.flaticon.com/512/2462/2462719.png",
    tags: ["React", "Tailwind", "Node.js", "API", "SweetAlert2", "Axios"],
    description:
      "تطبيق محادثة فورية.\n\nReal-time chat application built with React and Node.js.",
  },
];

const ProjectsSection = () => {
  const { t } = useTranslation();
  const [showAll, setShowAll] = useState(false);
  const visibleProject = showAll ? projects : projects.slice(0, 3);

  return (
    <section dir="ltr" id="projects" className=" py-20">
      <div className="  px-4 py-20 ">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 text-[var(--color-font)]">
            {t("projects")}
            <Underline />
          </h1>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 ">
            {visibleProject.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                url={project.url}
                image={project.image}
                tags={project.tags}
                description={project.description}
              />
            ))}
          </div>
          <div>
            {!showAll && (
              <div className="text-center py-3">
                <button
                  onClick={() => setShowAll(true)}
                  className="px-6 py-2 mt-3 text-center rounded-full border border-[var(--color-secondary)] text-[var(--color-font)] hover:bg-[var(--color-secondary)] hover:text-white transition"
                >
                  {t("showAll")}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
