// pages/Projects.jsx
import React from "react";

import ProjectCard from "../ProjectCard";
const projects = [
  {
    title: "Mini Project Ideas Management",
    url: "https://mini-project-ideas-managment.onrender.com/login",
    image: "https://cdn-icons-png.flaticon.com/512/3596/3596073.png",
    tags: ["React", "Tailwind", "Node.js"],
  },
  {
    title: "Activition Clone",
    url: "https://activitionclonepro.onrender.com/",
    image: "https://cdn-icons-png.flaticon.com/512/1865/1865856.png",
    tags: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "United Airlines Clone",
    url: "https://unitedairlines-651s.onrender.com/",
    image: "https://cdn-icons-png.flaticon.com/512/1532/1532703.png",
    tags: ["React", "Tailwind"],
  },
  {
    title: "Tailwind Lab 1",
    url: "https://w6-tailwind-lab1.onrender.com/",
    image: "https://cdn-icons-png.flaticon.com/512/873/873120.png",
    tags: ["HTML", "Tailwind CSS"],
  },
  {
    title: "Riyadh Season Clone",
    url: "https://riyadhseasonclone.onrender.com/",
    image: "https://cdn-icons-png.flaticon.com/512/3022/3022216.png",
    tags: ["React", "Tailwind", "Clone"],
  },
  {
    title: "Job Application",
    url: "https://w7-d1-hw1-hooks.onrender.com/",
    image: "https://cdn-icons-png.flaticon.com/512/1260/1260667.png",
    tags: ["React", "Hooks"],
  },
  {
    title: "BMI Calculator",
    url: "https://bmicalc-4lo7.onrender.com/",
    image: "https://cdn-icons-png.flaticon.com/512/3126/3126591.png",
    tags: ["React", "CSS", "Math"],
  },
  {
    title: "To-Do List App",
    url: "https://todolistappt.netlify.app/",
    image: "https://cdn-icons-png.flaticon.com/512/2948/2948037.png",
    tags: ["React", "Hooks", "LocalStorage"],
  },
  {
    title: "Chat App",
    url: "https://chatapppro-3hjo.onrender.com/",
    image: "https://cdn-icons-png.flaticon.com/512/2462/2462719.png",
    tags: ["React", "Socket.io", "Node.js"],
  },
  {
    title: "Weather App",
    url: "https://weatherapp-frontend-gcel.onrender.com/login",
    image: "https://cdn-icons-png.flaticon.com/512/4052/4052984.png",
    tags: ["React", "API", "Tailwind"],
  },
];

const Projects = () => {
  return (
    <section id="projects" >

    <div className="bg-[var(--color-bg)] text-[var(--color-text)] px-4 py-20 min-h-screen font-sans">
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-12 text-[var(--color-text)]">My Projects</h1>
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