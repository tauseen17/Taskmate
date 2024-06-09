import { useEffect } from "react";
import { useState } from "react";
import Logo from "../assets/logo.png";
export const Header = () => {
  const storedTheme = localStorage.getItem("theme");
  const defaultTheme = "medium";
  const [theme, setTheme] = useState(
    storedTheme ? JSON.parse(storedTheme) : defaultTheme
  );

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
    document.documentElement.removeAttribute("class");
    document.documentElement.classList.add(theme);
  }, [theme]);
  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="Taskmate logo" />
      </div>
      <div className="themeSelector">
        <span
          onClick={() => setTheme("light")}
          className={theme === "light" ? "light activeTheme" : "light"}
        ></span>
        <span
          onClick={() => setTheme("medium")}
          className={theme === "medium" ? "medium activeTheme" : "medium"}
        ></span>
        <span
          onClick={() => setTheme("dark")}
          className={theme === "dark" ? "dark activeTheme" : "dark"}
        ></span>
        <span
          onClick={() => setTheme("gOne")}
          className={theme === "gOne" ? "gOne activeTheme" : "gOne"}
        ></span>
        <span
          onClick={() => setTheme("gTwo")}
          className={theme === "gTwo" ? "gTwo activeTheme" : "gTwo"}
        ></span>
        <span
          onClick={() => setTheme("gThree")}
          className={theme === "gThree" ? "gThree activeTheme" : "gThree"}
        ></span>
      </div>
    </header>
  );
};
