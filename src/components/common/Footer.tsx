import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="w-full bg-[var(--color-secondary)] py-6 mt-12 text-sm text-white">
      <div className="flex flex-col  justify-center gap-4 text-center">
     
      </div>
      <p className="text-2xl text-center mb-2">SocialApps</p>
      <hr className="bg-amber-50  w-1/4 text-center mx-auto" />
      <div className="flex justify-center md:justify-center gap-6 text-2xl mt-4">

        <a
          href="https://github.com/TalalAlrashedi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[var(--color-accent)] transition-transform transform hover:scale-110"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/talal-alshaban-3a2127273/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[var(--color-accent)] transition-transform transform hover:scale-110"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://x.com/t_a_a5"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[var(--color-accent)] transition-transform transform hover:scale-110"
        >
          <BsTwitterX />
        </a>
        <a
          href="https://wa.me/966581540432"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-[var(--color-accent)] transition-transform transform hover:scale-110"
        >
          <FaWhatsapp />
        </a>
      </div>
      <p className="text-center mt-4 text-white]">
          &copy; {new Date().getFullYear()} Made it by Talal Al Shaban. All
          rights reserved.
        </p>
    </footer>
  );
};

export default Footer;
