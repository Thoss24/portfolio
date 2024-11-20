import Project from "./Project";
import SectionHeader from "./SectionHeader";

const Projects: React.FC<{}> = () => {
  return (
    <div id="projects">
      <SectionHeader title={"Projects"} />
      <Project
        title={"E-Commerce Site"}
        url={"http://ecommerce.thomasfogarty.co.uk/"}
        description={"I built an e-commerce site using TypeScript, React, Redux Toolkit, React Router, Firebase, REST API and Framer Motion to create a dynamic single-page application to manage a shopping cart. React and Redux Toolkit were employed to build a responsive UI and efficiently manage application state, ensuring smooth interactions when adding or removing items from the cart. React Router also enabled seamless navigation between different views, including the product listings, cart, wishlist, and homepage. Firebase served as the backend, allowing for real-time data handling and user authentication. I utilized a REST API to fetch product data, which ensured that users always had access to the latest inventory. To enhance user engagement, I integrated Framer Motion to add animations and transitions throughout the application, including on the homepage, where I implemented an image gallery that showcased featured images. "}
        projectImg={"/images/e-commerce.PNG"}
      />
      <Project
        title={"Carbon Footprint Tracker"}
        url={"http://carbonfootprinttracker.thomasfogarty.co.uk/"}
        description={
          "I developed a carbon footprint tracking app using Laravel Livewire and MySQL, designed to help users manage and monitor their carbon footprint consumption. The app allows users to set reduction goals, compare their consumption data over time, and share insights with other users by adding friends and creating posts and comments. Building this application taught me valuable skills in full-stack development, particularly in leveraging Laravel’s robust framework for backend functionality and Livewire’s dynamic components for seamless user interactions. Working with MySQL enhanced my database management skills, particularly in structuring data for efficient retrieval and analysis."
        }
        projectImg={"/images/carbon-footprint.PNG"}
      />
      {/* <Project
        title={"Event Manager"}
        url={"http://eventmanager.thomasfogarty.co.uk/"}
        description={
          "Mauris pharetra dui ut lacus sodales malesuada. Sed faucibus erat ante, facilisis pulvinar lacus blandit ut. Vestibulum ut vehicula turpis. Aliquam erat volutpat. Maecenas iaculis nisl congue lorem bibendum, vitae accumsan augue mollis. Aenean hendrerit lacus ornare ullamcorper elementum."
        }
      /> */}
      </div>
  );
};

export default Projects;
