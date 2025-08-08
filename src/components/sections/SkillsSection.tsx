import TagCloudSection from "../../features/TagCloudSection";
import { useTranslation } from "react-i18next";



const skills = [
  "React",
  "Tailwind CSS",
  "TypeScript",
  "JavaScript",
  "Cybersecurity",
  "Data Analysis",
  "Git & GitHub",
];

const SkillsSection = () => {
  const { t } = useTranslation();
  return<TagCloudSection id="skills" title={t("skills")} tags={skills} />
}

export default SkillsSection;
