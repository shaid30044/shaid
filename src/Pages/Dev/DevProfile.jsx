import { FiDownloadCloud } from "react-icons/fi";
import { TypeAnimation } from "react-type-animation";

const DevProfile = () => {
  const bio = [
    { author: "Md. Shaid Hasan" },
    { description: "React Developer" },
    { homepage: "github.com/shaid30044" },
  ];

  const engines = [
    {
      engines: [
        "react",
        "javascript",
        "html",
        "css",
        "nodejs",
        "expressjs",
        "mongodb",
        "c",
        "cpp",
      ],
    },
  ];

  const dependencies = [
    { react: "^18.1.0" },
    { node: "^20.10.0" },
    { express: "^4.18.3" },
    { mongodb: "^7.0" },
    { chrome: "^123.0.6312.107" },
  ];

  const devDependencies = [
    { coffee: "^1.0.0" },
    { internet: "20mbps" },
    { editor: "vscode" },
    { versionControl: "github" },
    { designTool: "figma" },
  ];

  return (
    <div className="md:grid grid-cols-2 items-center text-[#f9f9f9] px-4 sm:px-0 sm:pl-24 lg:pl-32 xl:pl-40 w-screen">
      <div className="flex items-center h-screen">
        <div>
          <h1 className="text-3xl lg:text-4xl xl:text-6xl font-light">
            <span>Hi, </span>
            <span>I&apos;M Shaid.</span>
          </h1>

          <p className="text-xl font-thin sm:font-normal my-16">
            React Developer
          </p>

          <div className="text-sm md:text-base lg:text-lg font-light text-[#7FFFD4] mb-20">
            <TypeAnimation
              sequence={[
                "An enthusiastic Web Developer",
                1000,
                "Designs Cool Websites",
                1000,
                "And Develops Web Apps",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>

          <div className="flex justify-center sm:justify-start">
            <a
              href="/Resume_of_Md._Shaid_Hasan_(Frontend_Developer).pdf"
              download="Resume_of_Md._Shaid_Hasan_(Frontend_Developer).pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex justify-center items-center gap-4 btn text-base bg-transparent rounded-none hover:bg-transparent font-normal border-2 text-[#f9f9f9] border-[#f9f9f9] hover:border-[#3db5ce] hover:text-[#3db5ce] duration-300 px-10 py-2">
                Download Resume <FiDownloadCloud />
              </button>
            </a>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center overflow-x-hidden overflow-y-scroll md:pr-20 lg:pr-40">
        <div className="text-xs xl:text-sm font-semibold text-[#f9f9f9ea] space-y-1">
          <p>{"{"}</p>

          {bio.map((item, index) => (
            <div key={index}>
              {Object.entries(item).map(([key, value]) => (
                <p key={key} className="pl-4">
                  <span className="text-[#7FFFD4]">&quot;{key}&quot;</span>
                  <span className="font-normal">
                    :{"\u00A0"}
                    {"\u00A0"}
                    {"\u00A0"}
                  </span>
                  <span className="text-[#3db5ce]">&quot;{value}&quot;</span>,
                </p>
              ))}
            </div>
          ))}

          {engines.map((engine, index) => (
            <div key={index}>
              <p className="ml-4">
                <span className="text-[#7FFFD4]">&quot;engines&quot;</span>: [
              </p>
              {engine.engines.map((name, i) => (
                <p key={i} className="pl-8">
                  <span className="text-[#3db5ce]">&quot;{name}&quot;</span>,
                </p>
              ))}
              <p className="ml-4">],</p>
            </div>
          ))}

          <p className="ml-4">
            <span className="text-[#7FFFD4]">&quot;dependencies&quot;</span>:{" "}
            {"{"}
          </p>
          {dependencies.map((dependency, index) => (
            <div key={index} className="ml-4">
              {Object.entries(dependency).map(([key, value]) => (
                <p key={key} className="pl-4">
                  <span className="text-[#7FFFD4]">&quot;{key}&quot;</span>
                  <span className="font-normal">
                    :{"\u00A0"}
                    {"\u00A0"}
                    {"\u00A0"}
                  </span>
                  <span className="text-[#3db5ce]">&quot;{value}&quot;</span>,
                </p>
              ))}
            </div>
          ))}
          <p className="ml-4">{"}"},</p>

          <p className="ml-4">
            <span className="text-[#7FFFD4]">&quot;devDependencies&quot;</span>:{" "}
            {"{"}
          </p>
          {devDependencies.map((dependency, index) => (
            <div key={index} className="ml-4">
              {Object.entries(dependency).map(([key, value]) => (
                <p key={key} className="pl-4">
                  <span className="text-[#7FFFD4]">&quot;{key}&quot;</span>
                  <span className="font-normal">
                    :{"\u00A0"}
                    {"\u00A0"}
                    {"\u00A0"}
                  </span>
                  <span className="text-[#3db5ce]">&quot;{value}&quot;</span>,
                </p>
              ))}
            </div>
          ))}
          <p className="ml-4">{"}"},</p>

          <p>{"}"}</p>
        </div>
      </div>
    </div>
  );
};

export default DevProfile;
