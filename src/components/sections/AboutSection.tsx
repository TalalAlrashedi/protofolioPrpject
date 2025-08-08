import Underline from "../common/Underline.jsx";
import AnimatedSection from "../../utils/AnimatedSection.jsx";

const stats = [
  { label: "Certificates", value: 6, color: "text-blue-800" },
  { label: "Years Experience", value: 1, color: "text-green-800" },
  { label: "Projects", value: 11, color: "text-purple-800" },
];

const AboutSection = () => {
  return (
    <AnimatedSection id="about" className="mt-8 py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-10">
          <h2 className="text-4xl font-extrabold text-gray-900 flex justify-center items-center gap-2">
            About Me
          </h2>
          <Underline />
        </div>

        <p className="text-xl leading-relaxed text-gray-700 max-w-3xl mx-auto mb-16">
          I'm{" "}
          <span className="font-semibold text-[var(--color-secondary)]">Talal Al Shaban</span>, a passionate{" "}
          <span className="text-black font-medium">Software Engineer</span>{" "}
          specialized in building modern, secure, and user-centric web
          applications.
          <br className="hidden md:block" />I blend{" "}
          <span className="text-black font-medium">frontend development</span>{" "}
          with{" "}
          <span className="text-black font-medium">
            cybersecurity awareness
          </span>{" "}
          and <span className="text-black font-medium">data analysis</span> to
          deliver efficient, scalable digital solutions.
          <br className="hidden md:block" />
          Whether it’s crafting clean interfaces with <strong>
            React
          </strong> and <strong>Tailwind CSS</strong>, or integrating backend
          logic with <strong>Node.js</strong> — I’m all about bringing ideas to
          life securely and beautifully.
        </p>

        {/* Stats Section */}
        <div className="flex justify-center gap-10 flex-wrap">
          {stats.map(({ label, value, color }) => (
            <div
              key={label}
              className="w-40 bg-transparent rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300 cursor-default"
            >
              <h3 className={`text-5xl font-extrabold mb-3 ${color}`}>{value}</h3>
              <p className="text-gray-600 uppercase tracking-widest text-sm">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default AboutSection;