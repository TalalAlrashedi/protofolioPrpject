import { getTagColor } from "../../utils/tagColors.tsx";
import { FiEye } from "react-icons/fi";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="relative rounded-2xl border border-[var(--color-secondary)] bg-[var(--color-cards)] shadow-md hover:shadow-xl hover:scale-105 transform transition duration-300"
    >
      <div className="relative flex items-center justify-center">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-50 rounded-t-lg"
        />
      </div>

      <div className="p-5 text-[var(--color-font)]">
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
        <hr className="border border-gray-300"/>
        <button
          type="button"
          className="mt-6 w-max flex items-center justify-center gap-2 text-sm text-blue-600 font-medium bg-blue-50 hover:bg-blue-100 px-2 py-2 mx-auto rounded-full transition"
          onClick={(e) => e.stopPropagation()}
        >
          <FiEye className="h-5 w-5" />
          {t("goToWebsite")}
        </button>
      </div>
    </a>
  );
};

export default ProjectCard;
