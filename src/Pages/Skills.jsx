import html from "../assets/skills/html.png";
import css from "../assets/skills/css.png";
import tailwind from "../assets/skills/tailwindcss.png";
import js from "../assets/skills/javascript.png";
import react from "../assets/skills/reactjs.png";
import node from "../assets/skills/node.png";
import express from "../assets/skills/expressjs.png";
import mongodb from "../assets/skills/mongodb.png";
import firebase from "../assets/skills/firebase.png";
import figma from "../assets/skills/figma.png";
import github from "../assets/skills/github.png";
import c from "../assets/skills/C.png";
import cpp from "../assets/skills/Cpp.png";
import arch from "../assets/skills/Arch.png";
import Title from "../Components/Title";

const Skills = () => {
  const skills = [
    { name: "HTML", image: html },
    { name: "CSS", image: css },
    { name: "Tailwind CSS", image: tailwind },
    { name: "JavaScript", image: js },
    { name: "React.js", image: react },
    { name: "Node.js", image: node },
    { name: "Express.js", image: express },
    { name: "MongoDB", image: mongodb },
    { name: "Firebase", image: firebase },
    { name: "Figma", image: figma },
    { name: "C", image: c },
    { name: "C++", image: cpp },
    { name: "GitHub", image: github },
    { name: "Arch Linux", image: arch },
  ];

  return (
    <div className="flex flex-col justify-center pt-[68px] h-screen">
      <Title title={"< Skills Matrix />"} />

      <div className="grid grid-cols-3 md:flex md:flex-wrap justify-center items-center gap-x-4 gap-y-8 lg:gap-12 xl:gap-20 mt-20 xl:mt-24">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center justify-center w-16 md:w-20 h-8 xl:h-10 m-3 md:m-4"
          >
            <img
              src={skill.image}
              alt={skill.name}
              className="w-7 lg:w-8 xl:w-10 mb-16"
            />

            <p className="absolute bottom-0 text-[10px] md:text-[11px] xl:text-xs">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
