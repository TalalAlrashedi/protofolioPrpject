import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import CourseCertification from "../common/CourseCertification.tsx";
type Course = {
  id: number;
  key: string; // مفتاح الترجمة
  imageUrl?: string;
  tags: string[];
  date: string;
};

const courses: Course[] = [
  {
    id: 1,
    key: "fullstackJS",
    imageUrl:
      "https://graffersid.com/wp-content/uploads/2023/08/MERN-Stack-scaled.webp",
    tags: ["تطوير مواقع الويب", "Fullstack"],
    date: "2025-04-13 - 2025-07-10",
  },
  {
    id: 2,
    key: "networkPlus",
    imageUrl: "/Courses/Network.jpeg",
    tags: ["Networking", "شبكات"],
    date: "2023-12-03 - 2024-02-02",
  },
  {
    id: 8,
    key: "AWS",
    imageUrl:
      "https://www.opentext.com/assets/images/partners/opentext-aws-logo-cover-416x274.png",
    tags: ["Cloud Computing", "الحوسبة السحابية"],
    date: "2024-04-13 - 2024-04-26",
  },

  {
    id: 9,
    key: "Jira",
    imageUrl:
      "https://www.logicgate.com/wp-content/smush-webp/plt-jira-01-hero-01.png.webp",
    tags: ["Project Management", "إدارة المشاريع"],
    date: "2025-7-25 - 2025-08-10",
  },
  {
    id: 4,
    key: "webAppPenTest",
    imageUrl: "/Courses/webApplication.jpeg",
    tags: ["Cybersecurity", "الامن السيبراني"],
    date: "2024-04-21 - 2024-05-16",
  },

  {
    id: 6,
    key: "grcIntro",
    imageUrl: "/Courses/Grc.jpeg",
    tags: ["Foundations", "مسار تأسيسي"],
    date: "2024-12-08 - 2024-12-15",
  },
  {
    id: 7,
    key: "cyberFundamentals",
    imageUrl: "/Courses/cyberBootcamp.jpeg",
    tags: ["Cybersecurity", "الامن السيبراني"],
    date: "2025-03-16 - 2025-03-29",
  },
  {
    id: 10,
    key: "AWS Ai",
    imageUrl: "/certifications/Aws.png",
    tags: ["AI", "الذكاء الاصطناعي"],
    date: "2025-10-20 - 2025-10-27",
  },
];

const CoursesSection = () => {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    if (i18n.language === "ar") {
      document.documentElement.setAttribute("dir", "rtl");
    } else {
      document.documentElement.setAttribute("dir", "ltr");
    }
  }, [i18n.language]);

  return (
    <section>
      <CourseCertification
        sectionId="courses"
        title={t("courses.title")}
        items={courses}
        translationNamespace="courses"
      />
    </section>
  );
};

export default CoursesSection;
