import React, { useState, useEffect } from "react";

const DarkModeToggler = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const userPreference = localStorage.getItem("theme");
    if (userPreference === "dark") {
      console.log("called");
      document.body.classList.add("dark");
      setDark(true);
    }
  }, [dark]);

  const toggleDarkMode = () => {
    setDark((prev) => {
      if (!prev) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
      return !prev;
    });
    document.body.classList.toggle("dark");
  };

  return (
    <div>
      <input
        type="checkbox"
        name="darkModeToggler"
        id="darkModeToggler"
        className="darkModeTogglerHidden"
        onChange={toggleDarkMode}
        checked={dark}
      />
      <label htmlFor="darkModeToggler" className="darkModeToggler"></label>
      <button onClick={toggleDarkMode}>
        Switch to {dark ? "Light mode" : "Dark mode"}
      </button>
    </div>
  );
};

export default DarkModeToggler;
