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

  const navLinkClass = (path) =>
    `block py-2 px-2 md:inline hover:text-blue-500 transition ${
      location.pathname === path
        ? "font-bold text-blue-600"
        : "text-[var(--color-text)]"
    }`;

  const handleNavigate = (item) => {
    setMenuOpen(false);
    if (item.path && location.pathname !== item.path) {
      navigate(item.path, { state: { scrollToId: item.id } });
    } else if (item.id) {
      const section = document.getElementById(item.id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      } else if (item.id === "hero") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="bg-[var(--color-bg)] sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center md:justify-center">
        <h1 className="text-xl font-bold text-white md:absolute left-6 top-4">
          Talal Alrashedi
        </h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-10 items-center">
          {navItems.map(({ label, path }) => (
            <li key={label}>
              {path ? (
                <Link
                  to={path}
                  onClick={() => setMenuOpen(false)}
                  className={navLinkClass(path)}
                >
                  {label}
                </Link>
              ) : (
                <button
                  onClick={() =>
                    handleNavigate(navItems.find((i) => i.label === label))
                  }
                  className="block py-2 px-2 md:inline text-[var(--color-text)] hover:text-blue-500 transition"
                >
                  {label}
                </button>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-black focus:outline-none"
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
        <ul className="md:hidden px-4 pb-4 space-y-2 text-[var(--color-text)] text-center">
          {navItems.map(({ label, path }) => (
            <li key={label}>
              {path ? (
                <Link
                  to={path}
                  onClick={() => setMenuOpen(false)}
                  className={navLinkClass(path)}
                >
                  {label}
                </Link>
              ) : (
                <button
                  onClick={() =>
                    handleNavigate(navItems.find((i) => i.label === label))
                  }
                  className="block py-2 hover:text-blue-500 transition w-full"
                >
                  {label}
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
