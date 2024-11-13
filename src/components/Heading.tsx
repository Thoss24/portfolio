import { CiMenuBurger } from "react-icons/ci";
import { IconContext } from "react-icons";
import { motion } from "framer-motion";
import { useState } from "react";

const Heading: React.FC<{}> = (props) => {
  const scrollTo = (
    event: React.MouseEvent<HTMLDivElement>,
    id: string
  ): void => {
    const scrollToElement = document.getElementById(id);

    if (scrollToElement) {
      console.log(scrollToElement);
      window.scroll({
        top: scrollToElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  const [aboutHovered, setAboutHovered] = useState(false);
  const [projectsHovered, setProjectsHovered] = useState(false);
  const [contactHovered, setContactHovered] = useState(false);
  const [resumeHovered, setResumeHovered] = useState(false);

  return (
    <>
      <div className="text-white hidden sm:flex gap-6 p-6 content-center justify-center fixed bg-zinc-700 w-full">
        <motion.div
          onHoverStart={() => setAboutHovered(true)}
          onHoverEnd={() => setAboutHovered(false)}
        >
          <p onClick={(e) => scrollTo(e, "about")}>About</p>
          <div
            className={`transition-all ease-in-out duration-300 border-cyan-500 border-t-4 ${
              aboutHovered ? "w-full" : "w-0"
            } `}
          ></div>
        </motion.div>

        <motion.div
          onHoverStart={() => setProjectsHovered(true)}
          onHoverEnd={() => setProjectsHovered(false)}
        >
          <p onClick={(e) => scrollTo(e, "projects")}>Projects</p>
          <div
            className={`transition-all ease-in-out duration-300 border-cyan-500 border-t-4 ${
              projectsHovered ? "w-full" : "w-0"
            } `}
          ></div>
        </motion.div>

        <motion.div
          onHoverStart={() => setContactHovered(true)}
          onHoverEnd={() => setContactHovered(false)}
        >
          <p onClick={(e) => scrollTo(e, "contact")}>Contact</p>
          <div
            className={`transition-all ease-in-out duration-300 border-cyan-500 border-t-4 ${
              contactHovered ? "w-full" : "w-0"
            } `}
          ></div>
        </motion.div>

        <motion.div
          onHoverStart={() => setResumeHovered(true)}
          onHoverEnd={() => setResumeHovered(false)}
        >
          <p onClick={(e) => scrollTo(e, "contact")}>Resume</p>
          <div
            className={`transition-all ease-in-out duration-300 border-cyan-500 border-t-4 ${
              resumeHovered ? "w-full" : "w-0"
            } `}
          ></div>
        </motion.div>
      </div>
      <h2 className="flex sm:hidden gap-6 mb-6 p-6 content-center justify-end">
        <IconContext.Provider
          value={{
            color: "white",
            className: "global-class-name",
            size: "1.5em",
          }}
        >
          <div>
            <CiMenuBurger />
          </div>
        </IconContext.Provider>
      </h2>
    </>
  );
};

export default Heading;
