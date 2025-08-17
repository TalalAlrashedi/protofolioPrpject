import { useState, useEffect } from "react";
import { HiMenu, HiX, HiHome, HiFolderOpen, HiBookOpen } from "react-icons/hi";
import { IoPersonSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { useMemo } from "react";

import { useTranslation } from "react-i18next";
import logo from "../../assets/logo1.png";
import { MdLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";

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

  const navItems = useMemo(
    () => [
      {
        label: t("home"),
        id: "hero",
        icon: <HiHome className="inline-block mr-2 text-xl" />,
      },
      {
        label: t("about"),
        id: "about",
        icon: <IoPersonSharp className="inline-block mr-2 text-sm " />,
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
        icon: <FaPhone className="inline-block mr-2 text-sm" />,
      },
    ],
    [t]
  );

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState<string>("hero");

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
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  // 🔹 Intersection Observer to track active section
  useEffect(() => {
    const sectionIds = navItems.map((item) => item.id);
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id: string) => {
      const section = document.getElementById(id);
      if (!section) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveId(id);
          }
        },
        { root: null, threshold: 0.1, rootMargin: "0px" }
      );

      observer.observe(section);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [navItems]);

  // 🔹 Handle click on nav item
  const handleClick = (id: string) => {
    setActiveId(id);
    setMenuOpen(false);
    const section =
      document.getElementById(id) || document.getElementById("hero");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 md:backdrop-blur-md h-20 mb-1">
      <div className="bg-[var(--color-mobile-navbar)] md:bg-transparent md:py-5  px-3 flex items-center justify-between relative">
        <img
          src={logo}
          alt="Talal Tech Logo"
          className="w-22 h-auto"
          onClick={() => handleClick("hero")}
          loading="lazy"
          style={{ order: i18n.language === "ar" ? 2 : 1 }}
        />

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-6 items-center bg-[var(--color-navbar)] py-3 px-3 rounded-3xl shadow-md absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleClick(item.id)}
                className={`flex items-center py-2 px-1 transition-all rounded-2xl ${
                  activeId === item.id
                    ? "bg-[var(--color-secondary)] px-2 py-2  text-white hover:cursor-pointer"
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
          <div
            className={`flex items-center gap-3 px-3 border-gray-400 ${
              i18n.language === "ar" ? "border-r" : "border-l"
            }`}
          >
            <li>
              <button
                onClick={toggleLanguage}
                className="py-1 px-2 border border-[var(--color-secondary)] text-[var(--color-font)] rounded-2xl hover:cursor-pointer hover:opacity-75 transition"
              >
                {i18n.language === "en" ? "عربي" : "EN"}
              </button>
            </li>
            <li>
              <button
                onClick={() => setDarkMode((prev) => !prev)}
                className="py-2 px-2 border border-[var(--color-secondary)] hover:cursor-pointer text-black rounded-2xl hover:opacity-75 transition"
              >
                {darkMode ? (
                  <div className=" flex gap-2 items-center">
                    <p className="text-[var(--color-font)] text-sm">
                      {" "}
                      {t("darkmode")}{" "}
                    </p>
                    <MdDarkMode className="text-white" />
                  </div>
                ) : (
                  <div className="  flex gap-2 items-center">
                    <p className="text-[var(--color-font)] text-sm">
                      {t("lightmode")}
                    </p>
                    <MdLightMode className="text-yellow-500" />
                  </div>
                )}
              </button>
            </li>
          </div>
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

        {/* Bottom Buttons Row */}
        <li className="w-full md:hidden items-center gap-4 px-4 mt-1 flex ">
          {/* Language Toggle - Left */}
          <button
            onClick={toggleLanguage}
            className="py-1 px-2 border border-[var(--color-secondary)] text-[var(--color-font)] rounded-2xl hover:bg-green-700 transition"
            aria-label="Toggle Language"
          >
            {i18n.language === "en" ? "عربى" : "EN"}
          </button>

          {/* Dark Mode Toggle - Right */}
          <button
            onClick={() => setDarkMode((prev) => !prev)}
            className="py-2 px-2 border border-[var(--color-secondary)] text-white rounded-2xl hover:bg-green-700 transition"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? (
              <div className=" flex gap-2 items-center">
                <p className="text-[var(--color-font)] text-sm">
                  {" "}
                  {t("darkmode")}{" "}
                </p>
                <MdDarkMode className="text-white" />
              </div>
            ) : (
              <div className="  flex gap-2 items-center">
                <p className="text-[var(--color-font)] text-sm">
                  {t("lightmode")}
                </p>
                <MdLightMode className="text-yellow-500" />
              </div>
            )}
          </button>
        </li>
      </div>

      {/* Mobile Menu */}

      <div
        className={`md:hidden overflow-hidden  transition-all duration-300 ease-in-out ${
          menuOpen
            ? "max-h-screen opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-5"
        }`}
      >
        <ul className="bg-[var(--color-mobile-navbar)] bg-opacity-20 py-8 gap-4 flex flex-col items-center px-13 space-y-8 text-2xl text-center rounded-b-2xl shadow-md min-h-screen">
          {navItems.map((item) => (
            <li key={item.id} className="w-full">
              <button
                onClick={() => handleClick(item.id)}
                className={`w-full flex items-center justify-center px-4 py-3 transition-all duration-300 ease-in-out hover:bg-gray-100 rounded-2xl hover:text-black hover:cursor-pointer ${
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
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;