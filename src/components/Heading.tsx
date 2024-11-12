import { CiMenuBurger } from "react-icons/ci";
import { IconContext } from "react-icons";

const Heading: React.FC<{}> = (props) => {

  const scrollTo = (event: React.MouseEvent<HTMLLIElement>, id: string): void => {
    const scrollToElement = document.getElementById(id);
    
    if (scrollToElement) {
      console.log(scrollToElement)
      window.scroll({
        top: scrollToElement.offsetTop - 80,
        behavior: 'smooth'
      })
    }
  }

  return (
    <>
    <ul className="text-white hidden sm:flex gap-6 p-6 content-center justify-center fixed bg-zinc-700 w-full">
      <li onClick={(e) => scrollTo(e, 'about')}>About</li>
      <li onClick={(e) => scrollTo(e, 'skills')}>Skills</li>
      <li onClick={(e) => scrollTo(e, 'projects')}>Projects</li>
      <li onClick={(e) => scrollTo(e, 'contact')}>Contact</li>
      <li onClick={(e) => scrollTo(e, 'resume')}>Resume</li>
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
