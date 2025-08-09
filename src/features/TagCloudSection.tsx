import { motion } from "framer-motion";
import Underline from "../components/common/Underline";
import { getTagColor } from "../utils/tagColors";
import { unifiedIcons } from "../utils/iconsMap";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "tween",
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

interface TagCloudSectionProps {
  id: string;
  title: string;
  tags: string[];
}

const TagCloudSection = ({ id, title, tags }: TagCloudSectionProps) => {
  return (
    <section id={id} className="max-w-6xl mx-auto px-6 py-1 text-center">
      <h2 className="text-4xl font-bold text-[var(--color-font)] mb-12 relative inline-block">
        {title}
        <Underline />
      </h2>

      <motion.div
        className="flex flex-wrap justify-center gap-4 bg-[var(--color-cards)] shadow-md p-6 rounded-3xl"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {tags.map((tag, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium ${getTagColor(
              tag
            )} shadow-md transition-transform duration-300`}
          >
            <span className="text-lg">{unifiedIcons[tag] || null}</span>
            <span>{tag}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default TagCloudSection;