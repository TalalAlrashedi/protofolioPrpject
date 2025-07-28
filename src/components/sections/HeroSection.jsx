import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const HeroSection = () => (
  <section
    id="hero"
    className="relative text-center py-36 px-4 overflow-hidden"
  >
    {/* Background blob */}
    <div
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                 w-[600px] h-[600px] bg-[#bbece3] rounded-full
                 opacity-80 blur-[150px] -z-10"
    ></div>

    <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">
      Hello, I'm <span className="text-black">Talal Alrashedi</span>
    </h1>

    <p className="text-lg text-gray-500 mb-6">
      Software Engineer | Web Developer | Cybersecurity & Data Enthusiast
    </p>

    <div className="flex justify-center gap-6 text-xl mb-6 text-gray-600">
      <a
        href="https://github.com/username"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-black transition"
      >
        <FaGithub />
      </a>
      <a
        href="https://linkedin.com/in/username"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-black transition"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://twitter.com/username"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-black transition"
      >
        <FaTwitter />
      </a>
    </div>

    <a
      href="#projects"
      className="inline-block px-6 py-2 rounded border border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white transition"
    >
      View My Work
    </a>
  </section>
);

export default HeroSection;