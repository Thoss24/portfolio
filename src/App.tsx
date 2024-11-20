import About from "./components/About";
import Heading from "./components/Heading";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    document.title = "My Portfolio";
  }, [])

  return (
    <div className="bg-zinc-700 pl-14 pr-14 pb-10 flex flex-col">
      <Heading />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
