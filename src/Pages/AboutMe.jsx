import { FiDownloadCloud } from "react-icons/fi";
import Title from "../Components/Title";
import PropTypes from "prop-types";

const AboutMe = ({ darkMode }) => {
  return (
    <div className="flex flex-col justify-center text-lg xl:text-3xl h-screen">
      <Title title={"< Origin Saga />"} />

      <div className="flex flex-col mt-20 md:mt-32">
        <p className="flex items-end gap-2">
          <span>I&apos;M</span>
          <span className="text-3xl md:text-5xl xl:text-8xl xl:-mb-1.5">
            Md. Shaid Hasan
          </span>
        </p>

        <p className="text-base opacity-70 mt-8 mb-16">
          React developer with a knack for solving problems brelegantly, ready
          to build exceptional digital experiences.
        </p>

        <div className="flex justify-center sm:justify-start">
          <a
            href="/Resume_of_Md._Shaid_Hasan_(Frontend_Developer).pdf"
            download="Resume_of_Md._Shaid_Hasan_(Frontend_Developer).pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className={
                darkMode
                  ? "flex justify-center items-center gap-4 btn text-base bg-transparent rounded-none hover:bg-transparent font-normal border-2 border-[#f9f9f98a] hover:border-[#f9f9f9] hover:text-[#f9f9f9] duration-300 px-10 py-2"
                  : "flex justify-center items-center gap-4 btn text-base bg-transparent rounded-none hover:bg-transparent font-normal border-2 border-[#34353a8a] hover:border-[#34353a] hover:text-[#34353a] duration-300 px-10 py-2"
              }
            >
              Download Resume <FiDownloadCloud />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

AboutMe.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

export default AboutMe;
