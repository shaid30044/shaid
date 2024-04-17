import Title from "../Components/Title";
import p1 from "../assets/projects/project1.png";
import p2 from "../assets/projects/project1.png";
import p3 from "../assets/projects/project2.png";
import p4 from "../assets/projects/project2.png";
import PropTypes from "prop-types";

const Projects = ({ darkMode }) => {
  const projects = [
    {
      title: "Dream Forge",
      image: p1,
      description:
        "An online platform where people can add and buy real estate properties.",
      clientLink: "https://github.com/shaid30044/Dream-Forge-Client",
      serverLink: "https://github.com/shaid30044/Dream-Forge-Server",
      demoLink: "https://dream-forge.web.app",
    },
    {
      title: "Bistro Boss",
      image: p2,
      description:
        "Robust online food platform with authentication, Stripe integration, and seamless orders.",
      clientLink: "https://github.com/shaid30044/bistro-boss-client",
      serverLink: "https://github.com/shaid30044/bistro-boss-server",
      demoLink: "https://bistro-boss-ab2ae.web.app",
    },
    {
      title: "Food Unity",
      image: p3,
      description:
        "Connects surplus food donors with those in need, reducing waste and hunger.",
      clientLink: "https://github.com/shaid30044/Food-Unity-Client",
      serverLink: "https://github.com/shaid30044/Food-Unity-Server",
      demoLink: "https://assignment-11-6cede.web.app",
    },
    {
      title: "XPO 2023",
      image: p4,
      description:
        "Explore Tech and Gaming Events: modern design, easy navigation, comprehensive details.",
      clientLink: "https://github.com/shaid30044/assignment-9",
      demoLink: "https://assignment-9-bb560.web.app",
    },
  ];

  return (
    <div className="flex flex-col justify-center pt-[68px] lg:h-screen">
      <Title title={"< Creations Gallery />"} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mt-12">
        {projects.map((project, index) => (
          <div key={index} className="relative">
            <div className="overflow-hidden bg-cover bg-no-repeat aspect-4/3 md:aspect-video lg:aspect-4/3 xl:aspect-video">
              <img
                src={project.image}
                alt={project.title}
                className="transition duration-4000 ease transform hover:-translate-y-[77%] md:hover:-translate-y-[83%] cursor-pointer w-full"
              />
            </div>

            <div className="absolute bottom-0 opacity-0 hover:opacity-100 duration-500 w-full">
              <div
                className={
                  darkMode
                    ? "flex flex-col justify-center items-center text-center bg-black/60 px-4 py-3"
                    : "flex flex-col justify-center items-center text-center bg-white/90 px-4 py-3"
                }
              >
                <h3 className="md:text-lg lg:text-base xl:text-lg">
                  {project.title}
                </h3>

                <p className="text-[9px] md:text-sm lg:text-xs xl:text-sm mt-1 md:mt-2 lg:mt-1 mb-4 md:mb-6 lg:mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between text-xs md:text-sm lg:text-xs xl:text-sm font-medium w-full">
                  <a
                    href={project.clientLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 duration-700"
                  >
                    Client
                  </a>

                  {project.serverLink ? (
                    <a
                      href={project.serverLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-2 duration-700"
                    >
                      Server
                    </a>
                  ) : (
                    ""
                  )}

                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 duration-700"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Projects.propTypes = {
  darkMode: PropTypes.bool.isRequired,
};

export default Projects;
