import {
    SiGithub,
    SiPostman,
    SiMongodb,
    SiFigma,

    SiNotion,
    SiJirasoftware,
    SiNodedotjs,
  } from "react-icons/si";
  import { FaTerminal } from "react-icons/fa";
  import { getTagColor } from "../../utils/tagColors.js";
  import Underline from "../Underline.jsx";
  
  const tools = [
    "Git & GitHub",
    "Postman",
    "VS Code",
    "iTerm",
    "Figma",
    "Jira",
    "Notion",
    "MongoDB",
    "Node.js",
  ];
  
  const toolIcons = {
    "Git & GitHub": <SiGithub className="inline-block mr-2 text-black" />,
    Postman: <SiPostman className="inline-block mr-2 text-orange-600" />,

    iTerm: <FaTerminal className="inline-block mr-2 text-gray-600" />,
    Figma: <SiFigma className="inline-block mr-2 text-pink-500" />,
    Jira: <SiJirasoftware className="inline-block mr-2 text-blue-700" />,
    Notion: <SiNotion className="inline-block mr-2 text-black" />,
    MongoDB: <SiMongodb className="inline-block mr-2 text-green-600" />,
    "Node.js": <SiNodedotjs className="inline-block mr-2 text-green-500" />,
  };
  
  const ToolsSection = () => {
    return (
      <section id="tools" className="max-w-5xl mx-auto p-10 text-center">
        <h2 className="text-4xl font-bold text-black mb-10 relative inline-block">
          Tools
          <Underline />
        </h2>
  
        <div className="flex flex-wrap justify-center gap-4 bg-white shadow-md p-5 rounded-2xl">
          {tools.map((tool, idx) => (
            <div
              key={idx}
              className={`px-4 py-2 rounded-full flex items-center ${getTagColor(
                tool
              )} shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300`}
            >
              {toolIcons[tool] || null}
              <span>{tool}</span>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default ToolsSection;