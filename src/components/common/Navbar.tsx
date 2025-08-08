import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const navItems = [
  { label: "Home", id: "hero" },
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  // { label: "Courses", id: "courses" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("hero");
  

  // this for highlighting the active section in the navbar
  // using IntersectionObserver to detect which section is currently in view
  useEffect(() => {
    const sectionIds = navItems.map((item) => item.id);
    const observers = [];
  
    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (!section) return;
  
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveId(id);
          }
        },
        {
          root: null,
          threshold: 0.1,
          rootMargin: "0px",
        }
      );
      observer.observe(section);
      observers.push(observer);
    });
  
    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  // this for scrolling to the section when clicking on the navbar item
  const handleClick = (id:string) => {
    setActiveId(id);
    setMenuOpen(false);
    const section = document.getElementById(id);
    section?.scrollIntoView({behavior:"smooth"});
    // console.log(section);  
  };

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md h-20 mb-1">
      <div className="max-w-6xl mx-auto py-4 flex justify-between items-center md:justify-center">
        <h1 className="text-xl font-bold text-black md:absolute left-6 top-4">
          Talal<span className="text-[var(--color-secondary)]">Tech(TTA)</span>
        </h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-10 items-center bg-white bg-opacity-20 p-1 px-2 rounded-full shadow-md">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleClick(item.id)}
                className={`py-2 px-2 transition-all duration-400 ease-in-out hover:bg-[var(--color-secondary)] rounded-2xl hover:text-white hover:cursor-pointer ${
                  activeId === item.id
                    ? " bg-[var(--color-secondary)] text-white"
                    : "text-[var(--color-text)]"
                }`}
              >
                {item.label}
              </button>
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
        <ul className="md:hidden bg-white bg-opacity-20 flex flex-col items-center px-4 pb-4 space-y-2 text-center rounded-b-2xl shadow-md">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleClick(item.id)}
                className={`py-2 px-2 transition-all duration-200 ease-in-out hover:bg-[var(--color-secondary)] rounded-2xl hover:text-white hover:cursor-pointer ${
                  activeId === item.id
                    ? "bg-[var(--color-secondary)] text-white"
                    : "text-[var(--color-text)]"
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
