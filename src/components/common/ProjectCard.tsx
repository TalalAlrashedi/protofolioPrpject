import { getTagColor } from "../../utils/tagColors";
import { FiEye } from "react-icons/fi"; // Import Eye icon from react-icons

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
      className="rounded-2xl bg-[var(--color-cards)] shadow-sm hover:shadow-xl transition-shadow duration-300 "
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
        <hr className="border-t-2 border-gray-300 mb-2" />
        {description && <p className="text-sm text-gray mb-2">{description}</p>}

        <div className="flex flex-wrap gap-2 mb-4">
          {tags?.map((tag, i) => (
            <span
              key={i}
              className={`text-xs px-2 py-1 rounded-full ${getTagColor(tag)}`}
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-4"></div>
        <button
          type="button"
          className="flex items-center gap-2 text-sm text-blue-500 font-medium bg-blue-50 hover:bg-blue-100 px-3 py-1 rounded transition"

        >
          {/* Eye icon from react-icons */}
          <FiEye className="h-4 w-4" />
          View Page
        </button>
      </div>
    </a>
  );
};

export default ProjectCard;
