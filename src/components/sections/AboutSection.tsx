import { useTranslation } from "react-i18next";
import Underline from "../common/Underline.jsx";
import AnimatedSection from "../../utils/AnimatedSection.jsx";

const stats = [
  { key: "certificates", value: 6, color: "text-blue-600" },
  { key: "years_experience", value: 1, color: "text-green-600" },
  { key: "projects", value: 11, color: "text-purple-600" },
];

const AboutSection = () => {
  const { t } = useTranslation();

  return (
    <AnimatedSection id="about" className="mt-8 py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-10">
          <h2 className="text-4xl font-extrabold text-[var(--color-font)]flex justify-center items-center gap-2">
            {t("about_title")}
          </h2>
          <Underline />
        </div>

        <p className="text-xl leading-relaxed text-[var(--color-font)] max-w-3xl mx-auto mb-16">
          {t("about_description_1")}{" "}
          <span className="font-semibold text-[var(--color-secondary)]">
            {t("about_name")}
          </span>
          , {t("about_text")}
          <br className="hidden md:block" />
          {t("about_text2")}
          <br className="hidden md:block" />
          {t("about_text3")}
        </p>

        <div className="flex justify-center gap-10 flex-wrap">
          {stats.map(({ key, value, color }) => (
            <div
              key={key}
              className="w-40 bg-[var(--color-cards)] rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300 cursor-default"
            >
              <h3 className={`text-5xl font-extrabold mb-3 ${color}`}>
                {value}
              </h3>
              <p className="text-[var(--color-font)] uppercase tracking-widest text-sm">
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