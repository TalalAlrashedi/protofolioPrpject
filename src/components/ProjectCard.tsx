const getTagColor = (tag) => {
  const colors = {
    React: "bg-blue-100 text-blue-800",
    Tailwind: "bg-teal-100 text-teal-800",
    "Tailwind CSS": "bg-teal-100 text-teal-800",
    "Node.js": "bg-green-100 text-green-800",
    HTML: "bg-orange-100 text-orange-800",
    Bootstrap: "bg-indigo-100 text-indigo-800",
    JavaScript: "bg-yellow-100 text-yellow-800",
    Hooks: "bg-purple-100 text-purple-800",
    API: "bg-lime-100 text-lime-800",
    LocalStorage: "bg-violet-200 text-gray-800",
    MongoDB: "bg-emerald-100 text-emerald-800",
    SweetAlert2: "bg-rose-100 text-rose-800",
    Axios: "bg-sky-100 text-sky-800",
  };

  return colors[tag] || "bg-gray-100 text-gray-800";
};

const ProjectCard = ({ title, url, image, tags }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-xl bg-bg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
    >
      <img
        src={image}
        alt={title}
        style={{ backgroundColor: "var(--color-bg)" }}
        className="w-full h-48 object-contain rounded-t-xl p-4"
      />
      <div className="p-5 text-black">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
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
        <p className="text-sm text-blue-600 font-medium">View Project →</p>
      </div>
    </a>
  );
};

export default ProjectCard;
