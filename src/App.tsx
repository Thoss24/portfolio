import About from "./components/About";
import Skills from "./components/Skills";
import Heading from "./components/Heading";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {

  return (
    <div className="bg-zinc-700 pl-14 pr-14 pb-10">
      <Heading />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Resume />
    </div>
  );
}

export default App;
