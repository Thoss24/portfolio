import { CiMenuBurger } from "react-icons/ci";
import { IconContext } from "react-icons";

const Heading: React.FC<{}> = (props) => {

  const scrollTo = (event: React.MouseEvent<HTMLLIElement>, id: string): void => {
    const scrollToElement = document.getElementById(id);
    
    if (scrollToElement) {
      window.scroll({
        top: scrollToElement.offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <>
    <ul className="text-white hidden sm:flex gap-6 p-6 content-center justify-center fixed bg-zinc-700 w-full">
      <li>About</li>
      <li onClick={(e) => scrollTo(e, 'skills')}>Skills</li>
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
