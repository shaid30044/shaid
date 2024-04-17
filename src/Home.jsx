import { useState, useEffect } from "react";
import "./home.css";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";

const Home = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return JSON.parse(savedMode) || false;
  });

  const [sunIcon, setSunIcon] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    setSunIcon(!sunIcon);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <main className="relative font-montserrat flex items-start gap-6 px-2 md:px-8 xl:px-20">
        <div className="fixed w-1/5 hidden md:block py-2 md:py-4">
          <Sidebar darkMode={darkMode} />
        </div>

        <div className="md:ml-[25%]">
          <div>
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
