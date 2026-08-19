import { useTranslation } from "react-i18next";
import CourseCertification from "../common/CourseCertification.tsx";

export type Certification = {
  id: number;
  key: string; // مفتاح الترجمة
  title: string; // للعرض الافتراضي أو fallback
  imageUrl?: string;
  tags: string[];
  date: string;
};

const certifications: Certification[] = [
  {
    id: 10,
    key: "ITIL",
    title: "ITIL Foundation",
    imageUrl: "/certifications/ITIL.png",
    tags: ["IT Service Management"],
    date: "2024",
  },
  {
    id: 1,
    key: "awsDevAssociate",
    title: "AWS Certified Developer – Associate",
    imageUrl: "/certifications/AWSAI.png",
    tags: ["Cloud", "DevOps", "Serverless", "Security"],
    date: "2025",
  },
  {
    id: 10,
    key: "OracleCertifiedAssociate",
    title: "Oracle Certified Associate (OCA) Java SE 8 Programmer",
    imageUrl: "/certifications/OCA.png",
    tags: ["Java", "OOP", "Programming", "Backend"],
    date: "2026",
  },
  {
    id: 8,
    key: "tuwaiqFullstack",
    title: "Tuwaiq Fullstack Development Bootcamp",
    imageUrl: "/certifications/tuwaiqbootcamp.png",
    tags: ["Fullstack", "MERN"],
    date: "2025",
  },
  {
    id: 2,
    key: "jiraAgile",
    title: "Agile with Atlassian Jira",
    imageUrl: "/certifications/Jira.png",
    tags: ["Agile", "Scrum", "Management"],
    date: "2025",
  },

  {
    id: 4,
    key: "uiux",
    title: "UI / UX Design",
    imageUrl: "/certifications/UXUI.png",
    tags: ["UI/UX", "Figma"],
    date: "2024",
  },
  {
    id: 5,
    key: "ejpt",
    title: "eJPT Certification",
    imageUrl: "/certifications/ejpt.png",
    tags: ["Pentest", "Networking"],
    date: "2025",
  },

  {
    id: 9,
    key: "awsPractitioner",
    title: "AWS Cloud Practitioner",
    imageUrl: "/certifications/Aws.png",
    tags: ["Cloud", "AWS"],
    date: "2024",
  },
];

const CertificationsSection = () => {
  const { t } = useTranslation();

  return (
    <section>
      <CourseCertification
        sectionId="certifications"
        title={t("certifications.title")}
        items={certifications}
        translationNamespace="certifications"
      />
    </section>
  );
};

export default CertificationsSection;
