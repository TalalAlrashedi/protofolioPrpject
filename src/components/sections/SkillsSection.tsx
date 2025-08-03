import {
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiGithub,
} from "react-icons/si";
import { FaLock } from "react-icons/fa";
import { MdAnalytics } from "react-icons/md";
import { getTagColor } from "../../utils/tagColors.js";
import Underline from "../Underline.jsx";

const skills = [
  "React",
  "Tailwind CSS",
  "TypeScript",
  "JavaScript",
  "Cybersecurity",
  "Data Analysis",
  "HTML",
  "CSS",
  "Git & GitHub",
];

const skillIcons = {
  React: <SiReact className="inline-block mr-2 text-blue-500" />,
  "Tailwind CSS": <SiTailwindcss className="inline-block mr-2 text-teal-500" />,
  TypeScript: <SiTypescript className="inline-block mr-2 text-sky-600" />,
  JavaScript: <SiJavascript className="inline-block mr-2 text-yellow-500" />,
  Cybersecurity: <FaLock className="inline-block mr-2 text-red-600" />,
  "Data Analysis": (
    <MdAnalytics className="inline-block mr-2 text-indigo-500" />
  ),
  HTML: <SiHtml5 className="inline-block mr-2 text-orange-500" />,
  CSS: <SiCss3 className="inline-block mr-2 text-indigo-600" />,
  "Git & GitHub": <SiGithub className="inline-block mr-2 text-black-700" />,
};

const SkillsSection = () => (
  <section id="skills" className="max-w-5xl mx-auto p-10 text-center ">
    <h2 className="text-4xl font-bold text-black mb-10 relative inline-block">
      Skills
      <Underline />
    </h2>

    <div className="flex flex-wrap justify-center gap-4 bg-white shadow-md p-5 rounded-2xl">
      {skills.map((skill, idx) => (
        <div
          key={idx}
          className={`px-4 py-2 rounded-full flex items-center ${getTagColor(
            skill
          )} shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300`}
        >
          {skillIcons[skill] || null}
          <span>{skill}</span>
        </div>
      ))}
    </div>
  </section>
);

export default SkillsSection;
