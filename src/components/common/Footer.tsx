// import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" h-full w-full bg-[var(--color-secondary)] py-6 mt-12 text-sm text-white ">
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} Made it by Talal Al Shaban. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;