// pages/Projects.jsx
import React from "react";

import ProjectCard from "../ProjectCard";
import Underline from "../Underline";

const projects = [
  {
    title: "StudentIdeas Management",
    url: "https://mini-project-ideas-managment.onrender.com/login",
    image: "public/AttendanceProject.png",
    tags: [
      "React",
      "Tailwind",
      "Node.js",
      "API",
      "MongoDB",
      "SweetAlert2",
      "Axios",
    ],
  },
  {
    title: "Activition Clone",
    url: "https://activitionclonepro.onrender.com/",
    image: "public/ActivationClone.png",
    tags: ["React", "Tailwind", "Node.js"],
  },
  {
    title: "United Airlines Clone",
    url: "https://unitedairlines-651s.onrender.com/",
    image: "public/unitedairlinesClone.png",
    tags: ["React", "Tailwind", "Node.js", "API"],
  },
  {
    title: "Product Shop",
    url: "https://w6-tailwind-lab1.onrender.com/",
    image: "public/ProductShop.png",
    tags: ["React", "Tailwind", "Node.js", "API", "Axios"],
  },
  {
    title: "Riyadh Season Clone",
    url: "https://riyadhseasonclone.onrender.com/",
    image: "public/RiyadhSeasonClone.png",
    tags: ["React", "Tailwind", "Node.js"],
  },
  {
    title: "Job Application",
    url: "https://w7-d1-hw1-hooks.onrender.com/",
    image: "https://cdn-icons-png.flaticon.com/512/1260/1260667.png",
    tags: ["React", "Tailwind", "SweetAlert2", "Axios"],
  },
  {
    title: "BMI Calculator",
    url: "https://bmicalc-4lo7.onrender.com/",
    image: "https://cdn-icons-png.flaticon.com/512/3126/3126591.png",
    tags: ["React", "Tailwind", "Node.js", "SweetAlert2"],
  },
  {
    title: "To-Do List App",
    url: "https://todolistappt.netlify.app/",
    image: "public/Todolist.png",
    tags: ["JavaScript", "Bootstrap","LocalStorage"],
  },
  {
    title: "Chat App",
    url: "https://chatapppro-3hjo.onrender.com/",
    image: "https://cdn-icons-png.flaticon.com/512/2462/2462719.png",
    tags: ["React", "Tailwind", "Node.js", "API", "SweetAlert2", "Axios"],
  },
  {
    title: "Weather App",
    url: "https://weatherapp-frontend-gcel.onrender.com/login",
    image: "public/Weather.png",
    tags: [
      "React",
      "Tailwind",
      "Node.js",
      "API",
      "MongoDB",
      "SweetAlert2",
      "Axios",
    ],
  },
];
const Projects = () => {
  return (
    <section id="projects">
      <div className="bg-[var(--color-bg)] text-[var(--color-text)] px-4 py-20 min-h-screen font-sans">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 text-[var(--color-text)]">
            My Projects
            {/* <span className="block w-16 h-1 bg-blue-500 mx-auto mt-2 rounded"></span>
             */}
            <Underline
              color="bg-[var(--color-text)]"
              width="w-16"
              className="mx-auto mt-2"
            />
          </h1>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                url={project.url}
                image={project.image}
                tags={project.tags}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
