import { Link } from "react-router-dom";
import me from "../assets/shaidPortfolio.jpg";
import { FaGithub, FaMedium, FaLinkedinIn, FaDiscord } from "react-icons/fa6";
import { BiLogoTelegram } from "react-icons/bi";
import "./scroll.css";
import PropTypes from "prop-types";

const Sidebar = ({ darkMode }) => {
  const socialLinks = [
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

  const tags = [
    { tag: "DeveloperLife", emoji: "👨‍💻" },
    { tag: "Programming", emoji: "🖥️" },
    { tag: "TechEnthusiast", emoji: "🤖" },
    { tag: "SpaceScience", emoji: "🚀" },
    { tag: "Cosmology", emoji: "🔭" },
    { tag: "BookReader", emoji: "📖" },
    { tag: "Mathematics", emoji: "➗" },
    { tag: "Research", emoji: "🧪" },
  ];

  return (
    <div
      className={
        darkMode ? "border-[#404146] border-r-2" : "border-[#e5e3e3] border-r-2"
      }
    >
      <div className="flex flex-col justify-around overflow-y-scroll pr-8 xl:pr-20 h-[96vh]">
        <div>
          <h1 className="text-sm lg:text-base xl:text-xl font-medium">
            Md. Shaid Hasan
          </h1>

          <img src={me} alt="Shaid" className="my-6" />
        </div>

        {/* tags */}
        <div>
          {tags.map((tagObj, index) => (
            <div key={index} className="flex items-center gap-1 my-1">
              <p className="text-[10px] xl:text-sm hover:underline hover:underline-offset-4 opacity-60 cursor-pointer">
                #{tagObj.tag}
              </p>
              <span>{tagObj.emoji}</span>
            </div>
          ))}
        </div>

        {/* Social links */}
        <div className="flex justify-between items-center mt-6">
          {socialLinks.map((link) => (
            <Link
              key={link.id}
              to={link.hyperlink}
              className="text-sm lg:text-lg text-gray-500 hover:text-gray-700"
              target="_blank"
            >
              {link.icon}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

export default Sidebar;
