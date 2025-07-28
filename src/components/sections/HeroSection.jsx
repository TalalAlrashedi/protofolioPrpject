import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const HeroSection = () => (
  <section id="hero" className="text-center py-24 px-4">
    <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-up text-[var(--color-text)]">
      Hello, I'm <span className="text-black">Talal Alrashedi</span>
    </h1>
    <p className="text-lg text-gray-400 mb-6">
      Software Engineer | Web Developer | Cybersecurity & Data Enthusiast
    </p>
    <div className="flex justify-center gap-6 text-xl mb-6">
      <a
        href="https://github.com/username"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition"
      >
        <FaGithub />
      </a>
      <a
        href="https://linkedin.com/in/username"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://twitter.com/username"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-white transition"
      >
        <FaTwitter />
      </a>
    </div>
    <a
      href="#projects"
      className="inline-block px-6 py-2 rounded border border-[var(--color-text)] text-[var(--color-text)] hover:bg-[var(--color-text)] hover:text-white transition"
    >
      View My Work
    </a>
  </section>
);

export default HeroSection;
