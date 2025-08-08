import { useState, useEffect } from "react";
import Router from "./routes/Router";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <>
      <button
        onClick={() => setDarkMode((prev) => !prev)}
        className="fixed top-4 right-4 bg-[var(--color-secondary)] text-white px-4 py-2 rounded z-9999"
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <Router />
    </>
  );
};

export default App;