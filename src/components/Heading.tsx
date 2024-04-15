import { CiMenuBurger } from "react-icons/ci";
import { IconContext } from "react-icons";
import { useScroll } from "framer-motion";

const Heading: React.FC<{}> = (props) => {

  const { scrollYProgress} = useScroll();

  return (
    <>
    <ul className="text-white hidden sm:flex gap-6 mb-6 p-6 content-center justify-center">
      <li>About</li>
      <li><a href='#skills'>Skills x x</a></li>
      <li>Projects</li>
      <li>Contact</li>
      <li>Resume</li>
    </ul>
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
