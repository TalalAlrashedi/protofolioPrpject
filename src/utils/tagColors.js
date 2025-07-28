export const getTagColor = (tag) => {
    const colors = {
      React: "bg-blue-100 text-blue-800",
      "Tailwind CSS": "bg-teal-100 text-teal-800",
      Tailwind: "bg-teal-100 text-teal-800",
      TypeScript: "bg-sky-100 text-sky-800",
      JavaScript: "bg-yellow-100 text-yellow-800",
      Cybersecurity: "bg-red-100 text-red-800",
      "Data Analysis": "bg-indigo-100 text-indigo-800",
      HTML: "bg-orange-100 text-orange-800",
      CSS: "bg-indigo-200 text-indigo-900",
      "Git & GitHub": "bg-gray-700 text-white",
      "Node.js": "bg-green-100 text-green-800",
      Bootstrap: "bg-indigo-100 text-indigo-800",
      Hooks: "bg-purple-100 text-purple-800",
      API: "bg-lime-100 text-lime-800",
      LocalStorage: "bg-violet-200 text-gray-800",
      MongoDB: "bg-emerald-100 text-emerald-800",
      SweetAlert2: "bg-rose-100 text-rose-800",
      Axios: "bg-sky-100 text-sky-800",
    };
  
    return colors[tag] || "bg-gray-100 text-gray-800";
  };