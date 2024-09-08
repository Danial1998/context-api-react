import React,{useContext} from "react";
import ThemeContext from "./ThemeContext";

function ThemeToggler() {
  const {theme, toggleTheme} = useContext(ThemeContext);

  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <h1>{theme === "light" ? "Light Theme" : "Dark Theme"}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default ThemeToggler;
