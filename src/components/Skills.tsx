import SectionHeader from "./SectionHeader";

const Skills: React.FC<{}> = (props) => {
  return (
    <div className="mt-4" id="skills">
      <p className="mb-2">
        Technologies I love to <strong className="text-cyan-500">use!</strong>
      </p>
      <div className="flex flex-row gap-2 justify-start">
        <div className="bg-gray-800 text-white rounded-lg p-2 shadow-lg content-center">
          <p className="text-center">HTML</p>
        </div>

        <div className="bg-gray-800 text-white rounded-lg p-2 shadow-lg content-center">
          <p className="text-center">CSS</p>
        </div>

        <div className="bg-gray-800 text-white rounded-lg p-2 shadow-lg content-center">
          <p className="text-center">Tailwind CSS</p>
        </div>

        <div className="bg-gray-800 text-white rounded-lg p-2 shadow-lg content-center">
          <p className="text-center">JavaScript</p>
        </div>

        <div className="bg-gray-800 text-white rounded-lg p-2 shadow-lg content-center">
          <p className="text-center">PHP</p>
        </div>

        <div className="bg-gray-800 text-white rounded-lg p-2 shadow-lg content-center">
          <p className="text-center">React</p>
        </div>

        <div className="bg-gray-800 text-white rounded-lg p-2 shadow-lg content-center">
          <p className="text-center">JQuery</p>
        </div>

        <div className="bg-gray-800 text-white rounded-lg p-2 shadow-lg content-center">
          <p className="text-center">Git</p>
        </div>

        <div className="bg-gray-800 text-white rounded-lg p-2 shadow-lg content-center">
          <p className="text-center">Laravel</p>
        </div>

        <div className="bg-gray-800 text-white rounded-lg p-2 shadow-lg content-center">
          <p className="text-center">Livewire</p>
        </div>

        <div className="bg-gray-800 text-white rounded-lg p-2 shadow-lg content-center">
          <p className="text-center">MySQL</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
