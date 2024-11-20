import Line from "./Line";
import Skills from "./Skills";

const About: React.FC<{}> = () => {
  return (
<div className="text-white dvh flex flex-col sm:flex-row pt-0 sm:pt-20 mb-10" id="about">
  <div className="flex justify-center items-center my-8 sm:my-0 sm:mr-12 flex-shrink-0">
    <img
      src="/images/me.png"
      alt="Profile"
      className="w-64 h-64 sm:w-96 sm:h-96 rounded-xl border-4 border-cyan-500 shadow-lg transition-transform object-cover"
    />
  </div>
  <div className="flex flex-col justify-center flex-grow px-4 sm:px-0">
    <p className="text-lg">
      Hello, <strong className="text-cyan-500">I'm</strong>
    </p>
    <h1 className="text-3xl sm:text-4xl font-bold mt-2">Thomas Fogarty</h1>
    <h2 className="text-xl sm:text-2xl text-gray-300">Web Developer</h2>
    <div className="mt-4">
      <h3 className="leading-6 text-sm sm:text-base">
        I am a skilled web developer with expertise in JavaScript, TypeScript,
        React, PHP, MySQL, and Tailwind CSS. With a Master's degree in
        Computer Science, I bring a strong foundation in computer science
        principles and problem-solving skills to my work. I have experience in
        developing fullstack web applications using modern front-end
        technologies like React, TypeScript, Tailwind CSS & PHP, ensuring
        robust and interactive user interfaces and well-designed efficient and
        scalable data models. In addition to this, through my experience
        working in IT, I have been given a number of great opportunities to
        contribute code to actively used websites with a large user base. This
        includes processing XML, iCals, and JSON feeds with PHP to update and
        insert data into a relational database, fixing various bugs related to
        backend functionality, contributing to developing a new CRM with
        Laravel, and using Git to work alongside other developers.
      </h3>
    </div>
    <Skills />
  </div>
  <Line />
</div>
  );
};

export default About;
