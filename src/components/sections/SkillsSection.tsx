import { getTagColor } from "../../utils/tagColors.js";
import Underline from "../Underline.jsx";
import AnimatedSection from "../../utils/AnimatedSection.jsx";
import { unifiedIcons } from "../../utils/iconsMap";
import { motion } from "framer-motion";

const skills = [
  "React",
  "Tailwind CSS",
  "TypeScript",
  "JavaScript",
  "Cybersecurity",
  "Data Analysis",
  "Git & GitHub",
];

// إعدادات الحركة التدريجية
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1, // تأخير بسيط بين كل عنصر وآخر
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 10 },
  },
};

const SkillsSection = () => {
  return (
    <AnimatedSection
      id="skills"
      className="max-w-6xl mx-auto px-6 py-16 text-center"
    >
      <h2 className="text-4xl font-bold text-black mb-12 relative inline-block">
        Skills
        <Underline />
      </h2>

      <motion.div
        className="flex flex-wrap justify-center gap-4 bg-white shadow-md p-6 rounded-3xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {skills.map((skill, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${getTagColor(
              skill
            )} shadow-md transition-transform duration-300`}
          >
            <span className="text-lg">{unifiedIcons[skill] || null}</span>
            <span>{skill}</span>
          </motion.div>
        ))}
      </motion.div>
    </AnimatedSection>
  );
};

export default SkillsSection;
