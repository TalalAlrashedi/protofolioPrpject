import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";

const navItems = [
  { label: "Home", id: "hero", path: "/" },
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigate = ({ label, id, path }) => {
    setMenuOpen(false);
    if (path && location.pathname !== path) {
      navigate(path, { state: { scrollToId: id } });
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      } else if (id === "hero") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  const renderNavItem = ({ label, path, id }) => (
    <li key={label}>
      <button
        onClick={() => handleNavigate({ label, path, id })}
        className={`block py-2 px-2 w-full text-left md:inline md:w-auto hover:text-blue-500 transition ${
          location.pathname === path && path
            ? "font-bold text-blue-600"
            : "text-[var(--color-text)]"
        }`}
      >
        {label}
      </button>
    </li>
  );

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md h-20 mb-1 ">
      <div className="max-w-6xl mx-auto  py-4 flex justify-between items-center md:justify-center">
        <h1 className="text-xl font-bold text-black md:absolute left-6 top-4">
          myProtofolio
        </h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-10 items-center bg-white bg-opacity-20 p-1 px-2 rounded-full shadow-md ">
          {navItems.map(renderNavItem)}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden  text-black focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <HiX className="w-6 h-6" />
          ) : (
            <HiMenu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden  bg-white  flex flex-col items-center px-4 pb-4 space-y-2 text-center">
          {navItems.map(renderNavItem)}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
