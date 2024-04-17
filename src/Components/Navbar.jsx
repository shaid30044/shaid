import AboutMe from "../Pages/AboutMe";
import Skills from "../Pages/Skills";
import Projects from "../Pages/Projects";
import Education from "../Pages/Education";
import ContactMe from "../Pages/ContactMe";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";
import { BsCodeSlash } from "react-icons/bs";
import { useEffect, useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import PropTypes from "prop-types";
import { RiMenu4Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "skills", "projects", "education", "contact"];
      const scrollPosition = window.scrollY;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (
          element &&
          scrollPosition >= element.offsetTop &&
          scrollPosition < element.offsetTop + element.offsetHeight
        ) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSectionClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <nav className="relative">
      <div
        className={
          darkMode
            ? "fixed flex justify-between items-center text-sm lg:text-base bg-[#34353a] py-2 md:py-4 lg:py-6 w-full z-50"
            : "fixed flex justify-between items-center text-sm lg:text-base bg-[#f9f9f9] py-2 md:py-4 lg:py-6 w-full z-50"
        }
      >
        <div className="sm:hidden">
          <button
            onClick={toggleDrawer}
            className="text-xl drawer-button ml-4 mt-1"
          >
            <RiMenu4Fill />
          </button>

          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction="top"
            duration={400}
            size={328}
          >
            <div
              className={
                darkMode ? "bg-[#34353a] -ml-2" : "bg-[#34353a1a] -ml-2"
              }
            >
              <ul className="flex flex-col justify-center items-center gap-10 text-base w-screen py-6">
                <li>
                  <button
                    className={
                      activeSection === "about" ? "opacity-100" : "opacity-40"
                    }
                    onClick={() => handleSectionClick("about")}
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    className={
                      activeSection === "skills" ? "opacity-100" : "opacity-40"
                    }
                    onClick={() => handleSectionClick("skills")}
                  >
                    Skills
                  </button>
                </li>
                <li>
                  <button
                    className={
                      activeSection === "projects"
                        ? "opacity-100"
                        : "opacity-40"
                    }
                    onClick={() => handleSectionClick("projects")}
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button
                    className={
                      activeSection === "education"
                        ? "opacity-100"
                        : "opacity-40"
                    }
                    onClick={() => handleSectionClick("education")}
                  >
                    Education
                  </button>
                </li>
                <li>
                  <button
                    className={
                      activeSection === "contact" ? "opacity-100" : "opacity-40"
                    }
                    onClick={() => handleSectionClick("contact")}
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
          </Drawer>
        </div>

        <ul className="hidden sm:flex items-center gap-6 xl:gap-10">
          <li>
            <button
              className={
                activeSection === "about" ? "opacity-100" : "opacity-40"
              }
              onClick={() => handleSectionClick("about")}
            >
              About
            </button>
          </li>
          <li>
            <button
              className={
                activeSection === "skills" ? "opacity-100" : "opacity-40"
              }
              onClick={() => handleSectionClick("skills")}
            >
              Skills
            </button>
          </li>
          <li>
            <button
              className={
                activeSection === "projects" ? "opacity-100" : "opacity-40"
              }
              onClick={() => handleSectionClick("projects")}
            >
              Projects
            </button>
          </li>
          <li>
            <button
              className={
                activeSection === "education" ? "opacity-100" : "opacity-40"
              }
              onClick={() => handleSectionClick("education")}
            >
              Education
            </button>
          </li>
          <li>
            <button
              className={
                activeSection === "contact" ? "opacity-100" : "opacity-40"
              }
              onClick={() => handleSectionClick("contact")}
            >
              Contact
            </button>
          </li>
        </ul>

        <div className="fixed right-6 md:right-10 xl:right-20 top-3 sm:top-8 grid grid-cols-2 justify-center items-center gap-8 md:gap-6 xl:gap-8">
          <button onClick={toggleDarkMode} className="toggle-button">
            <span className="icon">
              {darkMode ? (
                <HiOutlineSun className="text-lg xl:text-xl" />
              ) : (
                <HiOutlineMoon className="xl:text-lg" />
              )}
            </span>
          </button>

          <button>
            <span className="icon xl:text-lg">
              <Link to="/dev">
                <BsCodeSlash />
              </Link>
            </span>
          </button>
        </div>
      </div>

      <div id="about">
        <AboutMe darkMode={darkMode} />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="projects">
        <Projects darkMode={darkMode} />
      </div>

      <div id="education">
        <Education darkMode={darkMode} />
      </div>

      <div id="contact">
        <ContactMe darkMode={darkMode} />
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};

export default Navbar;
