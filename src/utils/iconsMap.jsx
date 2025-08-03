import {
    SiReact,
    SiTailwindcss,
    SiTypescript,
    SiJavascript,
    SiHtml5,
    SiCss3,
    SiGithub,
    SiPostman,
    SiFigma,
    SiNotion,
    SiJirasoftware,
    SiMongodb,
    SiNodedotjs,
  } from "react-icons/si";
  import { FaLock, FaTerminal } from "react-icons/fa";
  import { MdAnalytics } from "react-icons/md";
  
  export const unifiedIcons = {
    React: <SiReact className="inline-block mr-2 text-blue-500" />,
    "Tailwind CSS": <SiTailwindcss className="inline-block mr-2 text-teal-500" />,
    TypeScript: <SiTypescript className="inline-block mr-2 text-sky-600" />,
    JavaScript: <SiJavascript className="inline-block mr-2 text-yellow-500" />,
    Cybersecurity: <FaLock className="inline-block mr-2 text-red-600" />,
    "Data Analysis": <MdAnalytics className="inline-block mr-2 text-indigo-500" />,

    "Git & GitHub": <SiGithub className="inline-block mr-2 text-white" />,
    Postman: <SiPostman className="inline-block mr-2 text-orange-600" />,
    iTerm: <FaTerminal className="inline-block mr-2 text-gray-600" />,
    Figma: <SiFigma className="inline-block mr-2 text-pink-500" />,
    Jira: <SiJirasoftware className="inline-block mr-2 text-blue-700" />,
    Notion: <SiNotion className="inline-block mr-2 text-black" />,
    MongoDB: <SiMongodb className="inline-block mr-2 text-green-600" />,
    "Node.js": <SiNodedotjs className="inline-block mr-2 text-green-500" />,
  };
  