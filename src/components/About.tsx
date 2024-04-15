import Line from "./Line";

const About: React.FC<{}> = () => {
  return (
    <div className="text-white">
      <p>
        Hello, <strong className="text-cyan-500">I'm</strong>
      </p>
      <h1 className="text-3xl">Thomas Fogarty</h1>
      <h2 className="text-xl">Web Developer</h2><br></br>
      <div className="flex flex-row">
      <h3 className="leading-6 text-sm">
        I am a skilled web developer with expertise in JavaScript, TypeScript,
        React, PHP, MySQL, and Tailwind CSS. With a Master's degree in Computer
        Science, I bring a strong foundation in computer science principles and
        problem-solving skills to my work. 
        
        I have extensive experience in
        developing fullstack web applications using modern front-end technologies like
        React, TypeScript, Tailwind CSS & PHP, ensuring robust and interactive user interfaces and well designed efficient and scalable data models.
      </h3>
      <img src="../images/profile_img.jpeg" alt="Profile" />
      </div>
      <Line />
    </div>
  );
};

export default About;
