import { useTranslation } from "react-i18next";
import Underline from "../common/Underline.tsx";
import AnimatedSection from "../../utils/AnimatedSection.tsx";

const experiences = [
  {
    key: "Emcrey",
    companyKey: "Emcrey",
    responsibilitiesKey: "EmcreyDesc",
    startDate: "2025/12",
    endDate: "Present",
    logo: "data:image/png;base64,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",
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
