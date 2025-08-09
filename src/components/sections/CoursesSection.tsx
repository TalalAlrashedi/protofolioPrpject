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
    imageUrl: "/public/Courses/",
    tags: ["تطوير مواقع الويب", "Fullstack"],
    date: "2025-04-13 - 2025-07-10",
  },
  {
    id: 2,
    key: "networkPlus",
    imageUrl: "/public/Courses/Network.jpeg",
    tags: ["Networking", "تأسيسي"],
    date: "2023-12-03 - 2024-02-02",
  },
  {
    id: 3,
    key: "networkPenTest",
    imageUrl: "/public/Courses/penetrationtestingjpeg.jpeg",
    tags: ["Cybersecurity", "هجوم"],
    date: "2024-02-04 - 2024-03-01",
  },
  {
    id: 4,
    key: "webAppPenTest",
    imageUrl: "/public/Courses/webApplication.jpeg",
    tags: ["Cybersecurity", "هجوم"],
    date: "2024-04-21 - 2024-05-16",
  },
  {
    id: 5,
    key: "digitalForensics",
    imageUrl: "/public/Courses/digital.png",
    tags: ["Cybersecurity", "دفاع"],
    date: "2024-06-30 - 2024-07-28",
  },
  {
    id: 6,
    key: "grcIntro",
    imageUrl: "/public/Courses/Grc.jpeg",
    tags: ["Foundations", "تأسيسي"],
    date: "2024-12-08 - 2024-12-15",
  },
  {
    id: 7,
    key: "cyberFundamentals",
    imageUrl: "/public/Courses/cyberBootcamp.jpeg",
    tags: ["Cybersecurity", "هجوم", "دفاع"],
    date: "2025-03-16 - 2025-03-29",
  },
];

const CoursesSection = () => {

  const { t, i18n } = useTranslation();

  useEffect(() => {
    // ضبط اتجاه الصفحة ديناميكياً حسب اللغة
    if (i18n.language === "ar") {
      document.documentElement.setAttribute("dir", "rtl");
    } else {
      document.documentElement.setAttribute("dir", "ltr");
    }
  }, [i18n.language]);
  return (
    <section className="py-20 px-6 max-w-4xl mx-auto"   dir={i18n.language === "ar" ? "rtl" : "ltr"}
>
      <h1
        className="text-4xl font-extrabold text-[var(--color-font)] text-center"
        style={{ marginBottom: "1rem" }}
      >
        {t("courses.title")}
      </h1>
      <Underline />
      <ul className="space-y-8 mt-8">
        {courses.map((course) => (
          <li
            key={course.id}
            className="border border-[var(--color-secondary)] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            {course.imageUrl && (
              <img
                src={course.imageUrl}
                alt={t(`courses.${course.key}.title`)}
                className="w-48 h-28 object-cover mb-4 rounded"
              />
            )}
            <h2 className="text-2xl font-semibold text-[var(--color-font)] mb-2">
              {t(`courses.${course.key}.title`)}
            </h2>
            <p className="text-[var(--color-font)] mb-3 leading-relaxed">
              {t(`courses.${course.key}.description`)}
            </p>
            <p className="text-sm text-[var(--color-secondary)] mb-3">
              {t("courses.date")}: {course.date}
            </p>
            <div className="flex flex-wrap gap-3">
              {course.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-[var(--color-secondary)] text-white text-xs font-semibold px-3 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CoursesSection;