import { BsTerminal } from "react-icons/bs";
import { IoIosGitBranch } from "react-icons/io";
import { IoSchoolOutline } from "react-icons/io5";
import { RiMessage2Line } from "react-icons/ri";
import { TfiWorld } from "react-icons/tfi";
import { FaGithub, FaMedium, FaLinkedinIn, FaDiscord } from "react-icons/fa6";
import { BiLogoTelegram } from "react-icons/bi";
import { useEffect, useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { RiMenu4Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import DevProfile from "./DevProfile";
import DevProjects from "./DevProjects";
import DevEducation from "./DevEducation";
import DevContact from "./DevContact";

const DevNavbar = () => {
  const [activeSection, setActiveSection] = useState("");

  const devSocialLinks = [
    {
      id: 1,
      icon: <FaGithub />,
      hyperlink: "https://github.com/shaid30044",
    },
    {
      id: 2,
      icon: <FaMedium />,
      hyperlink: "https://medium.com/@kaona30044",
    },
    {
      id: 3,
      icon: <FaDiscord />,
      hyperlink: "https://discordapp.com/users/shaid30044",
    },
    {
      id: 4,
      icon: <BiLogoTelegram />,
      hyperlink: "https://t.me/shaid30044",
    },
    {
      id: 5,
      icon: <FaLinkedinIn />,
      hyperlink: "https://www.linkedin.com/in/md-shaid-hasan-9172252a4",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "devAbout",
        "devProjects",
        "devEducation",
        "devContact",
      ];
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

  const handleClick = () => {
    window.location.reload();
  };

  return (
    <nav className="relative">
      <div className="fixed flex justify-between items-center bg-[#17223B] shadow-black/30 shadow-lg">
        <div className="sm:hidden relative">
          <button
            onClick={toggleDrawer}
            className="fixed left-4 bottom-4 text-xl text-[#f9f9f9] bg-[#3db5ceaa] rounded-full drawer-button p-3"
          >
            <RiMenu4Fill />
          </button>

          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction="left"
            duration={400}
            size={60}
          >
            <div className="bg-[#17223B]">
              <ul className="grid grid-cols-1 justify-between items-center gap-8 text-xl overflow-y-scroll py-2 h-screen">
                <div className="flex justify-center">
                  <button>
                    <span className="icon text-lg">
                      <Link to="/">
                        <TfiWorld />
                      </Link>
                    </span>
                  </button>
                </div>

                <div className="flex flex-col justify-center items-center gap-6">
                  <li>
                    <button
                      className={
                        activeSection === "devAbout"
                          ? "text-[#3db5ce]"
                          : "text-[#f9f9f94a]"
                      }
                      onClick={() => handleSectionClick("devAbout")}
                    >
                      <BsTerminal />
                    </button>
                  </li>
                  <li>
                    <button
                      className={
                        activeSection === "devProjects"
                          ? "text-[#3db5ce]"
                          : "text-[#f9f9f94a]"
                      }
                      onClick={() => handleSectionClick("devProjects")}
                    >
                      <IoIosGitBranch />
                    </button>
                  </li>
                  <li>
                    <button
                      className={
                        activeSection === "devEducation"
                          ? "text-[#3db5ce]"
                          : "text-[#f9f9f94a]"
                      }
                      onClick={() => handleSectionClick("devEducation")}
                    >
                      <IoSchoolOutline />
                    </button>
                  </li>
                  <li>
                    <button
                      className={
                        activeSection === "devContact"
                          ? "text-[#3db5ce]"
                          : "text-[#f9f9f94a]"
                      }
                      onClick={() => handleSectionClick("devContact")}
                    >
                      <RiMessage2Line />
                    </button>
                  </li>
                </div>

                <div className="flex flex-col justify-center items-center gap-8">
                  {devSocialLinks.map((link) => (
                    <Link
                      key={link.id}
                      to={link.hyperlink}
                      className="text-base text-gray-500 hover:text-gray-700"
                      target="_blank"
                    >
                      {link.icon}
                    </Link>
                  ))}
                </div>
              </ul>
            </div>
          </Drawer>
        </div>

        <ul className="hidden sm:grid grid-cols-1 justify-between items-center gap-10 text-2xl overflow-y-scroll px-5 py-6 h-screen">
          <div className="flex justify-center">
            <button onClick={handleClick}>
              <span className="icon text-lg">
                <Link to="/">
                  <TfiWorld />
                </Link>
              </span>
            </button>
          </div>

          <div className="flex flex-col justify-center items-center gap-6 xl:gap-10">
            <li>
              <button
                className={
                  activeSection === "devAbout"
                    ? "text-[#3db5ce]"
                    : "text-[#f9f9f94a]"
                }
                onClick={() => handleSectionClick("devAbout")}
              >
                <BsTerminal />
              </button>
            </li>
            <li>
              <button
                className={
                  activeSection === "devProjects"
                    ? "text-[#3db5ce]"
                    : "text-[#f9f9f94a]"
                }
                onClick={() => handleSectionClick("devProjects")}
              >
                <IoIosGitBranch />
              </button>
            </li>
            <li>
              <button
                className={
                  activeSection === "devEducation"
                    ? "text-[#3db5ce]"
                    : "text-[#f9f9f94a]"
                }
                onClick={() => handleSectionClick("devEducation")}
              >
                <IoSchoolOutline />
              </button>
            </li>
            <li>
              <button
                className={
                  activeSection === "devContact"
                    ? "text-[#3db5ce]"
                    : "text-[#f9f9f94a]"
                }
                onClick={() => handleSectionClick("devContact")}
              >
                <RiMessage2Line />
              </button>
            </li>
          </div>

          <div className="flex flex-col justify-center items-center gap-8">
            {devSocialLinks.map((link) => (
              <Link
                key={link.id}
                to={link.hyperlink}
                className="text-lg text-[#f9f9f96a] hover:text-[#3db5ce] duration-300"
                target="_blank"
              >
                {link.icon}
              </Link>
            ))}
          </div>
        </ul>
      </div>

      <div id="devAbout">
        <DevProfile />
      </div>

      <div id="devProjects">
        <DevProjects />
      </div>

      <div id="devEducation">
        <DevEducation />
      </div>

      <div id="devContact">
        <DevContact />
      </div>
    </nav>
  );
};

export default DevNavbar;
