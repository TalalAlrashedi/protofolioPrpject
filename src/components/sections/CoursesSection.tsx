import { useTranslation } from "react-i18next";
import Underline from "../common/Underline.jsx";
import { useEffect } from "react";

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
    imageUrl: "/Courses/javascript.jpg",
    tags: ["تطوير مواقع الويب", "Fullstack"],
    date: "2025-04-13 - 2025-07-10",
  },
  {
    id: 2,
    key: "networkPlus",
    imageUrl: "/Courses/Network.jpeg",
    tags: ["Networking", "تأسيسي"],
    date: "2023-12-03 - 2024-02-02",
  },
  {
    id: 3,
    key: "networkPenTest",
    imageUrl: "/Courses/penetrationtestingjpeg.jpeg",
    tags: ["Cybersecurity", "هجوم"],
    date: "2024-02-04 - 2024-03-01",
  },
  {
    id: 4,
    key: "webAppPenTest",
    imageUrl: "/Courses/webApplication.jpeg",
    tags: ["Cybersecurity", "هجوم"],
    date: "2024-04-21 - 2024-05-16",
  },
  {
    id: 5,
    key: "digitalForensics",
    imageUrl: "/Courses/digital.png",
    tags: ["Cybersecurity", "دفاع"],
    date: "2024-06-30 - 2024-07-28",
  },
  {
    id: 6,
    key: "grcIntro",
    imageUrl: "/Courses/Grc.jpeg",
    tags: ["Foundations", "تأسيسي"],
    date: "2024-12-08 - 2024-12-15",
  },
  {
    id: 7,
    key: "cyberFundamentals",
    imageUrl: "/Courses/cyberBootcamp.jpeg",
    tags: ["Cybersecurity", "هجوم", "دفاع"],
    date: "2025-03-16 - 2025-03-29",
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
    <section
    id="courses"
    className="py-12 px-6 max-w-6xl mx-auto"
    dir={i18n.language === "ar" ? "rtl" : "ltr"}
  >
    <h1
      className="text-4xl  font-extrabold text-[var(--color-font)] text-center mb-6"
    >
      {t("courses.title")}
    </h1>
    <Underline />
  
    <div
      className={`mt-8 flex space-x-6 overflow-x-auto scrollbar-hide ${
        i18n.language === "ar" ? "space-x-reverse" : ""
      }`}
      style={{
        scrollSnapType: "x mandatory ",
        direction: i18n.language === "ar" ? "rtl" : "ltr",
      }}
    >
      {courses.map((course) => (
        <div
          key={course.id}
          className="flex-shrink-0 w-72 border border-[var(--color-secondary)] rounded-lg shadow-md p-6 m-5 hover:shadow-lg transition-shadow duration-300 scroll-snap-align-start bg-[var(--color-cards)]"
        >
          {course.imageUrl && (
            <img
              src={course.imageUrl}
              alt={t(`courses.${course.key}.title`)}
              className="w-full h-40 object-cover rounded mb-4"
            />
          )}
          <h2 className="text-2xl font-semibold text-[var(--color-font)] mb-4 text-center">
            {t(`courses.${course.key}.title`)}
          </h2>
          <p className="text-sm text-[var(--color-secondary)] mb-3 text-center">
            {t("courses.date")}: {course.date}
          </p>
          <div className="flex justify-center flex-wrap gap-2">
            {course.tags.map((tag, idx) => (
              <span
                key={idx}
                className="bg-[var(--color-secondary)] text-white text-xs font-semibold px-3 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
  );
};

export default CoursesSection;