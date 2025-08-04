import TagCloudSection from "../../features/TagCloudSection";

const skills = [
  "React",
  "Tailwind CSS",
  "TypeScript",
  "JavaScript",
  "Cybersecurity",
  "Data Analysis",
  "Git & GitHub",
];

const SkillsSection = () => (
  <TagCloudSection id="skills" title="Skills" tags={skills} />
);

export default SkillsSection;
