import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { DiJqueryLogo } from "react-icons/di";
import { FaGitSquare } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { IconContext } from "react-icons";
import { FaLaravel } from "react-icons/fa";
import { SiLivewire } from "react-icons/si";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const Skills: React.FC<{}> = (props) => {

  return (
    <div id="skills">
    <SectionHeader title={"Skills"} />
    <motion.section
    transition={{delay: 0.1}}
    initial={false}
    whileInView={{scale: [0.7, 1]}}>
      <div className="flex flex-row justify-around w-full mb-2">
      <IconContext.Provider
        value={{
          color: "#e34c26",
          className: "global-class-name",
          size: "6em",
        }}
      >
        <div>
          <FaHtml5 />
        </div>
      </IconContext.Provider>
      <IconContext.Provider
        value={{
          color: "#2695f1",
          className: "global-class-name",
          size: "6em",
        }}
      >
        <div>
          <FaCss3 />
        </div>
      </IconContext.Provider>
      <IconContext.Provider
        value={{
          color: "#3490dc",
          className: "global-class-name",
          size: "6em",
        }}
      >
        <div>
        <SiTailwindcss />
        </div>
      </IconContext.Provider>
      <IconContext.Provider
        value={{
          color: "#f0db4f",
          className: "global-class-name",
          size: "6em",
        }}
      >
        <div>
          <IoLogoJavascript />
        </div>
      </IconContext.Provider>
      </div>
      <div className="flex flex-row justify-around w-full">
      <IconContext.Provider
        value={{
          color: "#8993be",
          className: "global-class-name",
          size: "6em",
        }}
      >
        <div>
          <FaPhp />
        </div>
      </IconContext.Provider>
      <IconContext.Provider
        value={{
          color: "#61dbfb",
          className: "global-class-name",
          size: "6em",
        }}
      >
        <div>
          <FaReact />
        </div>
      </IconContext.Provider>
      <IconContext.Provider
        value={{
          color: "#0769ad",
          className: "global-class-name",
          size: "6em",
        }}
      >
        <div>
          <DiJqueryLogo />
        </div>
      </IconContext.Provider>
      <IconContext.Provider
        value={{
          color: "#f1502f",
          className: "global-class-name",
          size: "6em",
        }}
      >
        <div>
          <FaGitSquare />
        </div>
      </IconContext.Provider>
      <IconContext.Provider
        value={{
          color: "#F05340",
          className: "global-class-name",
          size: "6em",
        }}
      >
        <div>
          <FaLaravel />
        </div>
      </IconContext.Provider>
      <IconContext.Provider
        value={{
          color: "#F43F5E",
          className: "global-class-name",
          size: "6em",
        }}
      >
        <div>
          <SiLivewire />
        </div>
      </IconContext.Provider>
      </div>
    </motion.section>
    </div>
  );
};

export default Skills;
