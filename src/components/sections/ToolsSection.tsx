import TagCloudSection from "../../features/TagCloudSection";
import { useTranslation } from "react-i18next";
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

const ToolsSection = () => {
  const { t } = useTranslation();
  return <TagCloudSection id="tools" title={t("tools")} tags={tools} />;

}
export default ToolsSection;
