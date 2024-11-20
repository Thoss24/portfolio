const Project: React.FC<{ title: string; description: string, url:string, projectImg:string }> = (props) => {
  return (
    
    <div className="flex flex-col sm:flex-row items-center justify-between p-6  text-white rounded-lg ">
  <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
  <img
  src={props.projectImg}
  alt="Project Preview"
  className="w-full max-w-lg h-auto rounded-lg shadow-md object-cover transition-transform transform hover:scale-105"
/>
  </div>
  <div className="flex-grow">
    <h2 className="text-2xl font-bold mb-2">{props.title}</h2>
    <p className="text-lg mb-4">
      {props.description}
    </p>
    <a
      href={props.url}
      className="inline-block bg-cyan-500 text-white py-2 px-4 rounded-lg shadow hover:bg-cyan-600 transition"
    >
      View Project
    </a>
  </div>
</div>
    
  );
};

export default Project;
