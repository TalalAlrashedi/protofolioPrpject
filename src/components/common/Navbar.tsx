import { useState, useEffect } from "react";
import {
  HiMenu,
  HiX,
  HiHome,
  HiUser,
  HiFolderOpen,
  HiPhone,
  HiBookOpen
} from "react-icons/hi";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    i18n.changeLanguage(newLang);
    localStorage.setItem("i18nextLng", newLang);
  };

  useEffect(() => {
    document.documentElement.dir = i18n.language === "ar" ? "rtl" : "ltr";
  }, [i18n.language]);

  const navItems = [
    {
      label: t("home"),
      id: "hero",
      icon: <HiHome className="inline-block mr-2 text-xl" />,
    },
    {
      label: t("about"),
      id: "about",
      icon: <HiUser className="inline-block mr-2 text-xl" />,
    },
    {
      label: t("projects"),
      id: "projects",
      icon: <HiFolderOpen className="inline-block mr-2 text-xl" />,
    },
    {
      label: t("courses.title"),
      id: "courses",
      icon: <HiBookOpen className="inline-block mr-2 text-xl" />,
    },
    {
      label: t("contact"),
      id: "contact",
      icon: <HiPhone className="inline-block mr-2 text-xl" />,
    },
  
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("hero");

  // 🔹 Dark Mode state
  const [darkMode, setDarkMode] = useState(() => {
    // Get saved mode from localStorage
    const saved = localStorage.getItem("darkMode");
    return saved === "true" ? true : false;
  });
  

  // 🔹 Apply dark mode class to HTML tag when state changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

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
  }, [navItems]);

  const handleClick = (id) => {
    setActiveId(id);
    setMenuOpen(false);
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 md:backdrop-blur-md h-20 mb-1">
      <div className="bg-[var(--color-mobile-navbar)] md:bg-transparent py-5 px-3 flex items-center justify-between relative">
        {/* Logo */}
        <img
          src="/src/assets/logo1.png"
          alt="TalalTech Logo"
          className="w-28 h-auto"
          style={{
            order: i18n.language === "ar" ? 2 : 1, // logo on right for Arabic, left for English
          }}
        />

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 items-center bg-[var(--color-navbar)] p-3 px-4 rounded-full shadow-md absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleClick(item.id)}
                className={`flex items-center py-2 px-2 transition-all rounded-2xl ${
                  activeId === item.id
                    ? "bg-[var(--color-secondary)] px-4 text-white hover:cursor-pointer"
                    : "text-[var(--color-text)] hover:cursor-pointer hover:bg-gray-200 hover:text-black"
                }`}
              >
                {i18n.language === "ar" ? (
                  <>
                    <span>{item.label}</span>
                    <span className="inline-block ml-2">{item.icon}</span>
                  </>
                ) : (
                  <>
                    <span className="inline-block mr-2">{item.icon}</span>
                    <span>{item.label}</span>
                  </>
                )}
              </button>
            </li>
          ))}

          {/* Language and Dark Mode Buttons */}
          <li>
            <button
              onClick={toggleLanguage}
              className="py-2 px-4 bg-[var(--color-secondary)] text-white rounded-full hover:cursor-pointer hover:opacity-75 transition"
            >
              {i18n.language === "en" ? "AR" : "EN"}
            </button>
          </li>
          <li>
            <button
              onClick={() => setDarkMode((prev) => !prev)}
              className="py-2 px-4 bg-[var(--color-secondary)] hover:cursor-pointer text-white rounded-full hover:opacity-75 transition"
            >
              {darkMode ? "☀️" : "🌙"}
            </button>
          </li>
        </ul>

        {/* Mobile Toggle Button */}
        <button
          className={`md:hidden focus:outline-none ${
            darkMode ? "text-white" : "text-black"
          }`}
          style={{
            order: i18n.language === "ar" ? 2 : 1, // burger left for Arabic, right for English
          }}
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
        <ul className="md:hidden min-h-screen bg-[var(--color-mobile-navbar)] bg-opacity-20 py-5 flex flex-col items-center px-4 space-y-4 text-center rounded-b-2xl shadow-md">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleClick(item.id)}
                className={`flex items-center py-4 px-6 transition-all duration-400 ease-in-out hover:bg-gray-200 rounded-2xl hover:text-black hover:cursor-pointer ${
                  activeId === item.id
                    ? "bg-[var(--color-secondary)] text-white"
                    : "text-[var(--color-text)]"
                }`}
              >
                {i18n.language === "ar" ? (
                  <>
                    <span>{item.label}</span>
                    <span className="inline-block ml-2">{item.icon}</span>
                  </>
                ) : (
                  <>
                    <span className="inline-block mr-2">{item.icon}</span>
                    <span>{item.label}</span>
                  </>
                )}
              </button>
            </li>
          ))}

          {/* Dark Mode Toggle */}
          <li>
            <button
              onClick={() => setDarkMode((prev) => !prev)}
              className="py-3 px-6 bg-[var(--color-secondary)] text-white rounded-full hover:bg-green-700 transition"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? "Light" : "Dark"}
            </button>
          </li>

          {/* Language Toggle */}
          <li>
            <button
              onClick={toggleLanguage}
              className="py-3 px-6 bg-[var(--color-secondary)] text-white rounded-full hover:bg-green-700 transition"
              aria-label="Toggle Language"
            >
              {i18n.language === "en" ? "AR" : "EN"}
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;