import TagCloudSection from "../../features/TagCloudSection";

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

const ToolsSection = () => (
  <TagCloudSection id="tools" title="Tools" tags={tools} />
);

export default ToolsSection;
