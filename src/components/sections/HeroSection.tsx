import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";


const HeroSection = () => (
  <section
    id="hero"

    className="relative text-center px-4 overflow-hidden min-h-screen flex items-center justify-center "
  >
    {/* Animated Background Blob */}
    <div
      className="absolute top-1/2 left-1/2 w-[600px] h-[600px] 
                 rounded-full opacity-70 blur-[150px] 
                 animate-pulse-slow -z-10 "
    ></div>

    {/* Content */}
    <div className="mx-auto animate-fade-up text-gray-800 p-6 ">
      <div className="flex justify-center mb-6">
        <img
          src="/personalPhoto1"
          title="Talal Alrashedi"
          alt="TalalAlrashedi"
          className="w-50 h-50 rounded-full object-cover border-4 border-indigo-800 shadow-lg"
        />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
        Hello, I'm{" "}
        <span className="text-[var(--color-secondary)]">Talal Alrashedi</span>
      </h1>

      <p className="text-lg text-gray-600 mb-8">
        Software Engineer | Web Developer | Cybersecurity & Data Analyst
      </p>

      {/* Social Links */}
      <div className="flex justify-center gap-6 text-2xl text-indigo-600 mb-6">
        <a
          href="https://github.com/username"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition-transform transform hover:scale-110"
        >
          <FaGithub />
        </a>
        <a
          href="https://linkedin.com/in/username"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition-transform transform hover:scale-110"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com/username"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition-transform transform hover:scale-110"
        >
          <FaTwitter />
        </a>
      </div>

      {/* Download CV Button */}
      <a
        href="/cv/TalalAlrashediCv.pdf"
        download
        className="inline-block bg-[var(--color-secondary)] hover:bg-[#13302b] text-white px-6 py-3 rounded-lg shadow-md transition-transform transform hover:scale-105"
      >
        Download CV
      </a>
    </div>
  </section>
);

export default HeroSection;