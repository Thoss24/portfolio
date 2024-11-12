import SectionHeader from "./SectionHeader";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact: React.FC <{}> = () => {
  return (
    <div id="contact">
      <SectionHeader title={"Contacts"} />
      <div className="flex flex-row">
        <a rel="noopener" href="https://github.com/Thoss24" target="_blank">
          <motion.div
            initial={{ scale: 0.8 }}
            whileHover={{ scale: [0.8, 0.9, 1], color: "#FFFFFF" }}
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
            initial={{ scale: 0.8 }}
            whileHover={{ scale: [0.8, 0.9, 1], color: "#0E76A8" }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            <FaLinkedin size={30} />
          </motion.div>
        </a>
      </div>
    </div>
  )
}

export default Contact;