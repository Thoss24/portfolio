import SectionHeader from "./SectionHeader";

const Skills: React.FC<{}> = (props) => {
  return (
    <div className="mt-4" id="skills">
    <p className="mb-4 text-lg">
      Technologies I love to <strong className="text-cyan-500">use!</strong>
    </p>
    <div className="flex flex-wrap gap-4 justify-center">
      {[
        "HTML",
        "CSS",
        "Tailwind CSS",
        "JavaScript",
        "PHP",
        "React",
        "JQuery",
        "Git",
        "Laravel",
        "Livewire",
        "MySQL"
      ].map((skill) => (
        <div key={skill} className="bg-gray-800 text-white rounded-lg p-4 shadow-lg flex items-center justify-center w-24 sm:w-32">
          <p className="text-center text-sm sm:text-base">{skill}</p>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Skills;
