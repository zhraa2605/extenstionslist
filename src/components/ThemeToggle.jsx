import React, { useState, useEffect } from "react";
import darkmodeIcons from "../assets/images/icon-moon.svg";
import lightmodeIcon from "../assets/images/icon-sun.svg";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.classList.add(savedTheme);
    } else {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme:dark"
      ).matches;
      const defaultTheme = prefersDark ? "dark" : "light";
      setTheme(defaultTheme);
      toggleHtmlClass(defaultTheme);
    }
  }, []);

  const toggleHtmlClass = (theme) => {
    const root = window.document.documentElement; // <html>
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    toggleHtmlClass(newTheme);
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div>
      <button onClick={toggleTheme}>
        {theme === "light" ? (
          <img src={darkmodeIcons} alt="Dark mode icon" />
        ) : (
          <img src={lightmodeIcon} alt="Light mode icon" />
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;
