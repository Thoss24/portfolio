const Project: React.FC<{ title: string; description: string }> = (props) => {
    return (
      <div className="mb-6 p-4 rounded">
        <h2 className="text-2xl font-bold text-cyan-500 mb-2">{props.title}</h2>
        <div>
          <p className="text-gray-200 leading-relaxed">{props.description}</p>
        </div>
      </div>
    );
  };
  
  export default Project;