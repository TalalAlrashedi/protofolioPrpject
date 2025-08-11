import React from "react";

interface UnderlineProps {
  color?: string;
  width?: string;
  className?: string;
}

const Underline: React.FC<UnderlineProps> = ({
  color = "bg-[var(--color-secondary)]",
  width = "w-25",
  className = "",
}) => {
  return (
    <span
      className={`block ${width} ${color} mx-auto mt-2 h-[8px] rounded animate-pulse  ${className}`}
    ></span>
  );
};

export default Underline;