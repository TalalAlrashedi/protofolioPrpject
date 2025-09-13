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
  return <div>  
    
    <TagCloudSection id="skills" title={t("skills")} tags={skills} />
  
  </div>

}

export default SkillsSection;
