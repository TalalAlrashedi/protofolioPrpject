import { useTranslation } from "react-i18next";
import Underline from "../common/Underline.tsx";
import AnimatedSection from "../../utils/AnimatedSection.tsx";

const stats = [
  { key: "certificates", value: 8, color: "text-blue-600" },
  { key: "years_experience", value: 1, color: "text-green-600" },
  { key: "projects", value: 11, color: "text-purple-600" },
];

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <AnimatedSection id="about" className="mt-15 py-20 px-6 md:px-12  ">
      <div className="w-full max-w-5xl mx-auto text-center bg-[var(--color-cards)] rounded-3xl p-6 md:p-8 shadow-lg border border-[var(--color-secondary)]">
        {" "}
        <div className="mb-10">
          <h2 className="text-4xl font-bold text-[var(--color-font)] flex justify-center items-center gap-2">
            {t("about_title")}
          </h2>
          <Underline />
        </div>
        <p className="text-lg md:text-xl leading-relaxed text-[var(--color-font)] max-w-3xl mx-auto mb-16">
          <span className="text-[var(--color-introduce)] text-2xl md:text-3xl mb-3 block font-semibold">
            {t("about_name")}
          </span>
         {t("about_text")}
          <br className="hidden md:block" />
          {t("about_text2")}
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 justify-center justify-items-center text-center gap-6">          {" "}
          {stats.map(({ key, value, color }) => (
            <div
              key={key}
              className="w-full md:w-40 bg-[var(--color-cards)] border border-[var(--color-secondary)] p-3 rounded-lg md:p-5 shadow-md hover:shadow-xl transition-shadow duration-300 cursor-default"
            >
              <h3
                className={`text-3xl md:text-5xl font-extrabold mb-2 md:mb-3 ${color}`}
              >
                {value}
              </h3>
              <p className="text-[var(--color-font)] uppercase tracking-widest text-xs md:text-sm">
                {t(key)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default AboutSection;
