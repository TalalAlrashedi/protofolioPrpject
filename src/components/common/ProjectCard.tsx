import { getTagColor } from "../../utils/tagColors";

interface ProjectCardProps {
  title: string;
  url: string;
  image: string;
  tags?: string[];
  description?: string;
}

const ProjectCard = ({
  title,
  url,
  image,
  tags,
  description,
}: ProjectCardProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-50 bg-[var(--color-cards)] shadow-sm hover:shadow-xl transition-shadow duration-300 "
    >
      <div className="flex items-center justify-center">
        <img
          src={image}
          alt={title}
          // loading="lazy"
          className=" h-50  rounded-t-lg"
        />
      </div>

      <div className="p-5 text-black">
        <h2 className="text-2xl font-semibold mb-2">{title}</h2>

        {description && <p className="text-sm text-gray mb-2">{description}</p>}

        <div className="flex flex-wrap gap-2 mb-4">
          {tags?.map((tag, i) => (
            <span
              key={i}
              className={`text-xs px-1 py-1 rounded-full ${getTagColor(tag)}`}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-4"></div>
        <p className="text-sm text-blue-600 font-medium">View Project →</p>
      </div>
    </a>
  );
};

export default ProjectCard;
