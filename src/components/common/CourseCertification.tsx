"use client";

import { useRef, useEffect } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import Underline from "./Underline";
import { useTranslation } from "react-i18next";

interface Item {
  id: number;
  key: string;
  imageUrl?: string;
  tags: string[];
  date?: string;
}

interface Props {
  title: string;
  items: Item[];
  sectionId: string;
  translationNamespace: string; // "courses" أو "certifications"
}

const CourseCertification = ({
  title,
  items,
  sectionId,
  translationNamespace,
}: Props) => {
  const { i18n, t } = useTranslation();
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: dir === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    document.documentElement.setAttribute(
      "dir",
      i18n.language === "ar" ? "rtl" : "ltr",
    );
  }, [i18n.language]);

  return (
    <section
      id={sectionId}
      className="py-6 px-5 w-[90%] mx-auto mb-25 relative bg-[var(--color-cards)] rounded-3xl shadow-lg border border-[var(--color-secondary)] md:max-w-6xl"
    >
      <h1 className="text-4xl font-bold text-[var(--color-font)] text-center">
        {title}
      </h1>
      <Underline />

      {/* زر اليسار */}
      <button
        onClick={() => scroll("left")}
        className="absolute top-1/2 left-2 -translate-y-1/2 bg-[var(--color-secondary)] text-white p-2 rounded-full shadow hover:opacity-75 transition z-10"
      >
        <HiChevronLeft className="w-6 h-6" />
      </button>

      {/* زر اليمين */}
      <button
        onClick={() => scroll("right")}
        className="absolute top-1/2 right-2 -translate-y-1/2 bg-[var(--color-secondary)] text-white p-2 rounded-full shadow hover:opacity-75 transition z-10"
      >
        <HiChevronRight className="w-6 h-6" />
      </button>

      <div
        ref={scrollRef}
        className="mt-8 flex space-x-6 overflow-x-auto scrollbar-hide"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {items.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-70 p-6 m-5 bg-[var(--color-cards)] border border-gray-300 rounded-3xl shadow-md transition-shadow duration-300 hover:shadow-xl scroll-snap-align-start group"
          >
            <img
              src={item.imageUrl}
              alt={t(`${translationNamespace}.${item.key}.title`)}
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h2 className="font-semibold mb-3 text-center text-[var(--color-font)] group-hover:scale-110 transition-transform duration-300">
              {t(`${translationNamespace}.${item.key}.title`)}
            </h2>

            {item.date && (
              <p className="text-sm text-[var(--color-secondary)] mb-3 text-center">
                {t("courses.date")}: {item.date}
              </p>
            )}

            <div className="flex justify-center gap-2 flex-wrap">

              {item.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="bg-[var(--color-secondary)] text-white text-xs font-semibold px-2 py-1 rounded-2xl"
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

export default CourseCertification;
