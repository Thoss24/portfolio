import SectionHeader from "./SectionHeader";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";

const Contact: React.FC<{}> = () => {

  const [emailHovered, setEmailHovered] = useState(false);

  return (
    <div id="contact">
      <SectionHeader title={"Contacts"} />
      <div className="flex flex-row gap-4 justify-center">
        <a rel="noopener" href="https://github.com/Thoss24" target="_blank">
          <motion.div
            initial={{ scale: 0.8, color: "#FFFFFF" }}
            whileHover={{ scale: [0.8, 0.9, 1], color: "#000000" }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            <FaGithub size={30} />
          </motion.div>
        </a>
        <a
          rel="noopener"
          href="https://www.linkedin.com/in/tom-fogarty-7bb722235/"
          target="_blank"
        >
          <motion.div
            initial={{ scale: 0.8, color: "#FFFFFF" }}
            whileHover={{ scale: [0.8, 0.9, 1], color: "#0E76A8" }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            <FaLinkedin size={30} />
          </motion.div>
        </a>
        <motion.div onHoverStart={() => setEmailHovered(true)} onHoverEnd={() => setEmailHovered(false)}>
          <a className="text-xl font-bold text-white" href="mailto:t.fogarty24@outlook.com" >Email</a>
          <div className={` transition-all ease-in-out duration-300 border-cyan-500 border-t-4 ${emailHovered ? 'w-full' : 'w-0'} `}></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
