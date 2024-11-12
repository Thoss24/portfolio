import Line from "./Line";

const About: React.FC<{}> = () => {
  return (
    
    <div className="text-white h-dvh flex flex-col pt-0 sm:pt-20" id="about">
      <p>
        Hello, <strong className="text-cyan-500">I'm</strong>
      </p>
      <h1 className="text-3xl">Thomas Fogarty</h1>
      <h2 className="text-xl">Web Developer</h2><br></br>
      <img src="../images/profile_img.jpeg" alt="Profile" />
      <div className="flex flex-row">
      <h3 className="leading-6 text-sm">
        I am a skilled web developer with expertise in JavaScript, TypeScript,
        React, PHP, MySQL, and Tailwind CSS. With a Master's degree in Computer
        Science, I bring a strong foundation in computer science principles and
        problem-solving skills to my work. 
        
        I have experience in
        developing fullstack web applications using modern front-end technologies like
        React, TypeScript, Tailwind CSS & PHP, ensuring robust and interactive user interfaces and well designed efficient and scalable data models.

        In addition to this, through my experience working in IT I have been given a number of great opportunities to contribute code to actively used websites with a large user base. 
        This includes processing XML, iCals and JSON feeds with PHP to update and insert data into a relational database, fixing various bugs related to backend functionality, contributing to developing a new CRM with Laravel and using Git to work alongside other developers.
      </h3>
      </div>
      <Line />
    </div>
  );
};

export default About;
