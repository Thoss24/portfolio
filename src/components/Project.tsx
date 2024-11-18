const Project: React.FC<{ title: string; description: string, url:string }> = (props) => {
  return (
    
      <div className="mb-6 rounded">
        <h2 className="text-xl font-semibold text-gray-400 mb-1">
          <a href={props.url}>{props.title} app</a>
        </h2>
        <div>
          <p className="text-gray-200 leading-relaxed">{props.description}</p>
        </div>
      </div>
    
  );
};

export default Project;
