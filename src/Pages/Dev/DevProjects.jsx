import { VscSymbolColor } from "react-icons/vsc";
import { BiServer } from "react-icons/bi";
import { TbWorldWww } from "react-icons/tb";
import p1 from "../../assets/projects/project1.png";
import p2 from "../../assets/projects/project2.png";
import p3 from "../../assets/projects/project2.png";
import p4 from "../../assets/projects/project1.png";
import { Link } from "react-router-dom";

const DevProjects = () => {
  const projects = [
    {
      title: "Dream Forge",
      image: p1,
      clientLink: "https://github.com/shaid30044/Dream-Forge-Client",
      serverLink: "https://github.com/shaid30044/Dream-Forge-Server",
      demoLink: "https://dream-forge.web.app",
    },
    {
      title: "Bistro Boss",
      image: p2,
      clientLink: "https://github.com/shaid30044/bistro-boss-client",
      serverLink: "https://github.com/shaid30044/bistro-boss-server",
      demoLink: "https://bistro-boss-ab2ae.web.app",
    },
    {
      title: "Food Unity",
      image: p3,
      clientLink: "https://github.com/shaid30044/Food-Unity-Client",
      serverLink: "https://github.com/shaid30044/Food-Unity-Server",
      demoLink: "https://assignment-11-6cede.web.app",
    },
    {
      title: "XPO 2023",
      image: p4,
      clientLink: "https://github.com/shaid30044/assignment-9",
      demoLink: "https://assignment-9-bb560.web.app",
    },
  ];

  return (
    <div className="flex justify-center items-center text-[#f9f9f9] px-4 sm:pl-24 lg:pl-32 xl:pl-40 md:pr-[4%] lg:pr-[6%] w-screen md:h-screen my-32 md:my-0">
      <div className="grid md:grid-cols-2 justify-center items-center gap-6">
        {projects.map((project, idx) => (
          <div key={idx}>
            <div className="overflow-hidden bg-cover bg-no-repeat aspect-video">
              <img
                src={project.image}
                alt={project.title}
                className="transition duration-4000 ease transform hover:-translate-y-[77%] md:hover:-translate-y-[83%] w-full"
              />
            </div>

            <div className="flex justify-between items-center text-sm lg:text-lg px-1 pt-1">
              <h1>{project.title}</h1>

              <div className="flex justify-between items-center gap-6">
                <span>
                  <Link to={project.clientLink}>
                    <VscSymbolColor />
                  </Link>
                </span>

                <span className={!project.serverLink && "invisible"}>
                  <Link to={project.serverLink}>
                    <BiServer />
                  </Link>
                </span>

                <span>
                  <Link to={project.demoLink}>
                    <TbWorldWww />
                  </Link>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DevProjects;
