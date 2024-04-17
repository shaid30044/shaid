import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import DevNavbar from "./DevNavbar";
import AnimatedCursor from "react-animated-cursor";

const DevHome = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    const initEngine = async () => {
      await initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      });
      setInit(true);
    };

    initEngine();
  }, []);

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#17223B",
        },
      },
      fpsLimit: 200,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 140,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#f9f9f9",
        },
        links: {
          color: "#f9f9f9",
          distance: 140,
          enable: true,
          opacity: 0.5,
          width: 0.5,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 4,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 100,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 0.5, max: 4 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return init ? (
    <div className="relative font-sourceCode">
      <Particles id="tsparticles" options={options} />
      <AnimatedCursor
        innerSize={8}
        outerSize={8}
        color="61, 181, 206"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
          {
            target: ".custom",
            options: {
              innerSize: 12,
              outerSize: 12,
              color: "0, 0, 0",
              outerAlpha: 0.3,
              innerScale: 0.7,
              outerScale: 5,
            },
          },
        ]}
      />

      <div className="absolute selection:bg-[#f9f9f9] selection:text-[#34353a]">
        <DevNavbar />
      </div>
    </div>
  ) : (
    <></>
  );
};

export default DevHome;
