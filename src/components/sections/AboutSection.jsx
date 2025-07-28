import { FaUserShield } from "react-icons/fa";

const AboutSection = () => (
  <section
    id="about"
    className="relative bg-gradient-to-br from-white via-gray-50 to-gray-50 py-24 px-6 md:px-12"
  >
    <div className="max-w-5xl mx-auto text-center">
      <div className="mb-10">
        <h2 className="text-4xl font-extrabold text-gray-900 flex justify-center items-center gap-2">
          <FaUserShield className="text-blue-600 text-4xl" />
          About Me
        </h2>
        <span className="block w-20 h-1 bg-blue-500 mx-auto mt-3 rounded-full"></span>
      </div>

      <p className="text-xl leading-relaxed text-gray-700 max-w-3xl mx-auto">
        I'm <span className="font-semibold text-blue-700">Talal Alrashedi</span>, a passionate{" "}
        <span className="text-black font-medium">Software Engineer</span> specialized in building modern,
        secure, and user-centric web applications.
        <br className="hidden md:block" />
        I blend <span className="text-black font-medium">frontend development</span> with{" "}
        <span className="text-black font-medium">cybersecurity awareness</span> and{" "}
        <span className="text-black font-medium">data analysis</span> to deliver efficient, scalable digital solutions.
        <br className="hidden md:block" />
        Whether it’s crafting clean interfaces with <strong>React</strong> and <strong>Tailwind CSS</strong>, 
        or integrating backend logic with <strong>Node.js</strong> — I’m all about bringing ideas to life securely and beautifully.
      </p>

      
    </div>
  </section>
);

export default AboutSection;