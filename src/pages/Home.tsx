import React from "react";
import ProjectCard from "../components/ProjectCard";

const homeProjects = [
  {
    title: "Portfolio Website",
    url: "#", // أو رابط حقيقي لو عندك
    image: "https://cdn-icons-png.flaticon.com/512/841/841364.png",
    tags: ["React", "Tailwind", "Portfolio"],
  },
  {
    title: "Cybersecurity Dashboard",
    url: "#",
    image: "https://cdn-icons-png.flaticon.com/512/3064/3064197.png",
    tags: ["React", "Data", "Security"],
  },
];

const Home = () => {
  return (
    <div className="font-sans bg-bg text-text min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-24 px-4">
        <h1 className="text-4xl font-bold mb-4">Hello, I'm Talal Alrashedi</h1>
        <p className="text-lg mb-6">
          Software Engineer | Web Developer | Cybersecurity & Data Enthusiast
        </p>
        <a
          href="#projects"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          View My Work
        </a>
      </section>

      {/* About Section */}
      <section className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="leading-relaxed">
          I’m Talal Alrashedi, a software engineer passionate about building secure, responsive, and efficient web applications.
          I bring a unique blend of frontend development, cybersecurity awareness, and data analysis to every project.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-center">Projects</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {homeProjects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                url={project.url}
                image={project.image}
                tags={project.tags}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-semibold mb-6">Skills</h2>
        <ul className="flex flex-wrap gap-4 text-sm">
          {[
            "React",
            "Tailwind CSS",
            "TypeScript",
            "JavaScript (ES6+)",
            "Cybersecurity",
            "Data Analysis (Python, Pandas)",
            "HTML5 / CSS3",
            "Git & GitHub",
          ].map((skill) => (
            <li
              key={skill}
              className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full"
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6 text-center">Contact Me</h2>
          <form className="grid gap-4" onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              placeholder="Your Name"
              required
              className="border border-gray-300 px-4 py-2 rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="border border-gray-300 px-4 py-2 rounded"
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              required
              className="border border-gray-300 px-4 py-2 rounded"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-sm border-t mt-16">
        <p>
          &copy; 2025 Talal Alrashedi •{" "}
          <a
            href="https://github.com"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </a>{" "}
          •{" "}
          <a
            href="https://linkedin.com"
            className="text-blue-600 hover:underline"
          >
            LinkedIn
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Home;