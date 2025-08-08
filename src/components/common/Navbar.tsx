import { useState, useEffect } from "react";
import {
  HiMenu,
  HiX,
  HiHome,
  HiUser,
  HiFolderOpen,
  HiPhone,
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
      label: t("contact"),
      id: "contact",
      icon: <HiPhone className="inline-block mr-2 text-xl" />,
    },
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("hero");

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
    <nav className="sticky top-0 z-50 md:backdrop-blur-md h-20 mb-1 ">
      <div className="bg-[var(--color-mobile-navbar)] md:bg-transparent md:justify-evenly py-4 px-3 flex justify-between items-center">
      <h1
  className="text-xl font-bold text-black md:absolute top-7"
  style={{
    left: i18n.language === "en" ? "2.25rem" /* left-9 */ : "auto",
    right: i18n.language === "ar" ? "2.25rem" /* right-9 */ : "auto",
  }}
>
  Talal<span className="text-[var(--color-secondary)]">Tech(TAS)</span>
</h1>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 md:justify-evenly md:items-center bg-[var(--color-navbar)] p-3 px-3 rounded-full shadow-md ">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleClick(item.id)}
                className={`flex items-center py-2 px-2  transition-all duration-400 ease-in-out hover:bg-gray-200 rounded-2xl hover:text-black hover:cursor-pointer ${
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

          {/* زر تبديل اللغة */}
          <li>
            <button
              onClick={toggleLanguage}
              className="ml-4 py-2 px-4 bg-[var(--color-secondary)] text-white rounded-full hover:bg-green-700 transition"
              aria-label="Toggle Language"
            >
              {i18n.language === "en" ? "AR" : "EN"}
            </button>
          </li>
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
          {/* زر تبديل اللغة في القائمة الجوال */}
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
