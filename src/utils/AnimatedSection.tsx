import type { ReactNode } from "react";
import { motion } from "framer-motion";
import type { Transition, HTMLMotionProps } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface AnimatedSectionProps extends Omit<HTMLMotionProps<"section">, "ref"> {
  children: ReactNode;
  className?: string;
}

const transition: Transition = {
  duration: 0.2,
  ease: "easeOut",
};

const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  className = "",
  ...rest
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={transition}
      className={className}
      {...rest}
    >
      {children}
    </motion.section>
  );
};

export default AnimatedSection;