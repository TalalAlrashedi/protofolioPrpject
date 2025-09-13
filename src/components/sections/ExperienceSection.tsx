import { useTranslation } from "react-i18next";
import Underline from "../common/Underline.tsx";
import AnimatedSection from "../../utils/AnimatedSection.tsx";

const experiences = [
  {
    key: "experience",
    titleKey: "experience",
    companyKey: "hospital",
    responsibilitiesKey: "experience_desc",
  },
];

const ExperienceSection = () => {
  const { t } = useTranslation();

  return (
    <AnimatedSection id="experience" className="mt-15 py-20 px-6 md:px-12">
      <div className="w-full max-w-5xl mx-auto text-center bg-[var(--color-cards)] rounded-3xl p-4 md:p-8 shadow-lg border border-[var(--color-secondary)]">
        <div className="mb-10">
          <h2 className="text-4xl font-bold text-[var(--color-font)] flex justify-center items-center gap-2">
            {t("experience")}
          </h2>

          <Underline />
        </div>

        <div className="space-y-8">
          {experiences.map(({ key, companyKey, responsibilitiesKey }) => {
            return (
              <div
                key={key}
                className="bg-[var(--color-background)]  p-2 rounded-xl hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex flex-col md:flex-row items-center gap-4 md:justify-between">
                  <img
                    src="public/LogoHailHealth.png"
                    className="w-14 h-14 md:w-12 md:h-12 rounded-full object-cover border-2 border-[var(--color-secondary)] mb-2 md:mb-0"
                  />

                  <h3 className="text-sm sm:text-base md:text-2xl font-bold text-[var(--color-introduce)] text-center md:text-left">
                    {t(companyKey)}
                  </h3>

                  <p className="text-xs sm:text-sm text-[var(--color-font)] whitespace-nowrap mt-1 md:mt-0">
                    2023/05 - 2023/12
                  </p>
                  
                </div>

                <div className="text-center py-2 border-t-1 m-2">
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
