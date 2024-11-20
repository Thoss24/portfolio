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

 
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const dropdownModal = (
    <div className="relative inline-block text-left">
    <div>
      <button
        onClick={toggleModal}
        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-cyan-500 text-white hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        X
      </button>
    </div>

    {isOpen && (
      <div className="absolute right-0 z-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" onClick={(e) => scrollTo(e, "about")}>
            About
          </div>
          <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" onClick={(e) => scrollTo(e, "projects")}>
            Projects
          </div>
          <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" onClick={(e) => scrollTo(e, "contact")}>
            Contact
          </div>
          <div className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">
            <p><a href="/CV.3.0.docx">Resume</a></p>
          </div>
        </div>
      </div>
    )}
  </div>
  );

  return (
    <>
      <div className="text-white hidden sm:flex gap-6 p-6 content-center justify-center fixed bg-zinc-700 w-full z-10 mb-8">
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
          <p><a href="/CV.3.0.docx">Resume</a></p>
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
          <div onClick={toggleModal}>
            {!isOpen && <CiMenuBurger />}
          </div>
          {isOpen && dropdownModal}
        </IconContext.Provider>
      </h2>
    </>
  );
};

export default Heading;
