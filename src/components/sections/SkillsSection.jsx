const skills = [
  "React",
  "Tailwind CSS",
  "TypeScript",
  "JavaScript (ES6+)",
  "Cybersecurity",
  "Data Analysis (Python, Pandas)",
  "HTML5 / CSS3",
  "Git & GitHub",
];

const SkillsSection = () => (
  <section id="skills" className="max-w-5xl mx-auto p-10 text-center">
    <h2 className="text-4xl font-bold text-black mb-10 relative inline-block">
      Skills
      <span className="block w-16 h-1 bg-blue-500 mx-auto mt-2 rounded"></span>
    </h2>

    <div className="flex flex-wrap justify-center gap-4">
      {skills.map((skill, idx) => (
        <div
          key={idx}
          className="bg-white/10 text-black border border-white/20 px-4 py-2 rounded-full shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 backdrop-blur-sm"
        >
          {skill}
        </div>
      ))}
    </div>
  </section>
);

export default SkillsSection;
