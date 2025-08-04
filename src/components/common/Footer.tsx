import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" h-full w-full bg-gray-100 dark:bg-gray-900 py-6 mt-12 text-sm text-gray-600 dark:text-gray-300">
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} Talal Alrashedi. All rights
          reserved.
        </p>

        <div className="flex gap-4 text-xl">
          <a
            href="https://github.com/username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 dark:hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/username"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 dark:hover:text-blue-300 transition"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;