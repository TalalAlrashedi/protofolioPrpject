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
    <section className="max-w-4xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-semibold mb-6">Skills</h2>
      <ul className="flex flex-wrap gap-4 text-sm">
        {skills.map((skill) => (
          <li key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
  
  export default SkillsSection;