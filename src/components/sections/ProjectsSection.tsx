import ProjectCard from "../common/ProjectCard.js";
import Underline from "../common/Underline.jsx";
import { useTranslation } from "react-i18next";

const projects = [
  {
    title: "IntelliCite",
    url: "https://intellicite-ui.onrender.com/",
    image: "project/IntelliCite.png",
    tags: ["React", "Tailwind", "Node.js", "API", "MongoDB", "Axios"],
    description:
      "AI-powered platform for exploring academic citations, summaries, and citation strength insights.",
  },
  {
    title: "StudentIdeas Management",
    url: "https://mini-project-ideas-managment.onrender.com/login",
    image: "project/AttendanceProject.png",
    tags: [
      "React",
      "Tailwind",
      "Node.js",
      "API",
      "MongoDB",
      "SweetAlert2",
      "Axios",
    ],
    description:
      "Web app to manage student project ideas with roles for students and admins, secure login, and approval workflows.",
  },
  {
    title: "Activition Clone",
    url: "https://activitionclonepro.onrender.com/",
    image: "project/ActivationClone.png",
    tags: ["React", "Tailwind", "Node.js"],
    description:
      "A responsive UI clone of Activision's website showcasing sleek design and layout replication.",
  },
  {
    title: "United Airlines Clone",
    url: "https://unitedairlines-651s.onrender.com/",
    image: "project/unitedairlinesClone.png",
    tags: ["React", "Tailwind", "Node.js", "API"],
    description:
      "Frontend clone of United Airlines with flight search simulation and adaptive UI.",
  },
  {
    title: "Product Shop",
    url: "https://w6-tailwind-lab1.onrender.com/",
    image: "project/ProductShop.png",
    tags: ["React", "Tailwind", "Node.js", "API", "Axios"],
    description:
      "E-commerce demo app displaying product listings with responsive UI and API integration.",
  },
  {
    title: "Riyadh Season Clone",
    url: "https://riyadhseasonclone.onrender.com/",
    image: "project/RiyadhSeasonClone.png",
    tags: ["React", "Tailwind", "Node.js"],
    description:
      "Modern clone of Riyadh Season website with attractive sections and event showcase.",
  },
  {
    title: "Job Application",
    url: "https://w7-d1-hw1-hooks.onrender.com/",
    image: "https://cdn-icons-png.flaticon.com/512/1260/1260667.png",
    tags: ["React", "Tailwind", "SweetAlert2", "Axios"],
    description:
      "Job submission form using React hooks with validation, alerts, and clean UI.",
  },
  {
    title: "BMI Calculator",
    url: "https://bmicalc-4lo7.onrender.com/",
    image: "https://cdn-icons-png.flaticon.com/512/3126/3126591.png",
    tags: ["React", "Tailwind", "Node.js", "SweetAlert2"],
    description:
      "Simple and responsive Body Mass Index calculator with alerts for results.",
  },
  {
    title: "To-Do List App",
    url: "https://todolistappt.netlify.app/",
    image: "project/Todolist.png",
    tags: ["JavaScript", "Bootstrap", "LocalStorage"],
    description:
      "A clean to-do list app with local storage support and Bootstrap-based design.",
  },
  {
    title: "Chat App",
    url: "https://chatapppro-3hjo.onrender.com/",
    image: "https://cdn-icons-png.flaticon.com/512/2462/2462719.png",
    tags: ["React", "Tailwind", "Node.js", "API", "SweetAlert2", "Axios"],
    description:
      "Real-time chat application built using React and Node.js with styled components.",
  },
  {
    title: "Weather App",
    url: "https://weatherapp-frontend-gcel.onrender.com/login",
    image: "project/Weather.png",
    tags: [
      "React",
      "Tailwind",
      "Node.js",
      "API",
      "MongoDB",
      "SweetAlert2",
      "Axios",
    ],
    description:
      "Weather forecasting app with login support and API integration for real-time data.",
  },
];


const ProjectsSection = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className=" py-20">
      <div className="  px-4 py-20 ">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 text-[var(--color-font)]">
            {t("projects")}
            <Underline />
          </h1>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 ">
            {projects.map((project, index) => (
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
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
