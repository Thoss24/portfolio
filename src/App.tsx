import About from "./components/About";
import Heading from "./components/Heading";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {

  return (
    <div className="bg-zinc-700 pl-14 pr-14 pb-10">
      <Heading />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
