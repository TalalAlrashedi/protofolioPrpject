import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = (path: string) =>
    `block py-2 px-2 md:inline hover:text-blue-500 transition ${
      location.pathname === path ? "font-bold text-blue-600" : "text-[var(--color-text)]"
    }`;

  return (
    <nav className="bg-[var(--color-bg)] sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center md:justify-center">
        {/* Logo or Name (optional) */}
        <h1 className="text-xl font-bold text-black md:absolute left-6 top-4">
          Talal Alrashedi
        </h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-10 items-center">
          <li>
            <Link to="/" className={navLinkClass("/")}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={navLinkClass("/about")}>
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" className={navLinkClass("/projects")}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" className={navLinkClass("/contact")}>
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-black focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden px-4 pb-4 space-y-2 text-[var(--color-text)] text-center">
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)} className={navLinkClass("/")}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setMenuOpen(false)} className={navLinkClass("/about")}>
              About
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={() => setMenuOpen(false)} className={navLinkClass("/projects")}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setMenuOpen(false)} className={navLinkClass("/contact")}>
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;