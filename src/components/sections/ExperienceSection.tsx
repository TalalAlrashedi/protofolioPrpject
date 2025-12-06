import { useTranslation } from "react-i18next";
import Underline from "../common/Underline.tsx";
import AnimatedSection from "../../utils/AnimatedSection.tsx";

const experiences = [
  {
    key: "hospital",
    companyKey: "hospital",
    responsibilitiesKey: "experience_desc",
    startDate: "2023/05",
    endDate: "2023/12",
    logo: "/LogoHailHealth.png",
  },
  {
    key: "tuwaiqAcademy",
    companyKey: "tuwaiqAcademy",
    responsibilitiesKey: "tuwaiqAcademyDesc",
    startDate: "2025/03",
    endDate: "2025/07",
    logo: "data:image/png;base64,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",
  },
];

const ExperienceSection = () => {
  const { t } = useTranslation();

  return (
    <AnimatedSection id="experience" className="mt-20 py-20 px-6 md:px-12">
      <div className="w-full max-w-5xl mx-auto text-center bg-[var(--color-cards)] rounded-3xl p-4 md:p-8 shadow-lg border border-[var(--color-secondary)]">
        <div className="mb-10">
          <h2 className="text-4xl font-bold text-[var(--color-font)] flex flex-row-reverse justify-center items-center gap-2">
            {t("experience")}
          </h2>

          <Underline />
        </div>

        <div className="space-y-8">
          {experiences.map((experience) => {
            const {
              key,
              companyKey,
              responsibilitiesKey,
              startDate,
              endDate,
              logo,
            } = experience;
            return (
              <div
                key={key}
                className="bg-[var(--color-background)] p-2 rounded-xl hover:shadow-md transition-shadow duration-300 border"
              >
                <div className="flex flex-col md:flex-row items-center gap-4 md:justify-between">
                  <img
                    src={logo}
                    className="w-14 h-14 md:w-12 md:h-12 rounded-full object-contain border-2 border-[var(--color-secondary)] mb-2 md:mb-0"
                  />

                  <h3 className="text-sm sm:text-base md:text-2xl font-bold text-[var(--color-introduce)] text-center md:text-left">
                    {t(companyKey)}
                  </h3>

                  <p className="text-xs sm:text-sm text-[var(--color-font)] whitespace-nowrap mt-1 md:mt-0">
                    {startDate} - {endDate}
                  </p>
                </div>

                <div className="text-center py-2 border-t-2 m-4">
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-3">
                    <h4 className="md:text-lg font-semibold text-[var(--color-font)]">
                      {t(responsibilitiesKey)}
                    </h4>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ExperienceSection;
