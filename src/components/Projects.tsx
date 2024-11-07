import Project from './Project';

const Projects: React.FC <{}> = () => {
    return (
        <Project title={'E-Commerce Site'} description={'I developed an e-commerce site using React and TypeScript, utilizing Redux Toolkit for state management, enabling handling of global state and asynchronous actions related to the products, and shopping cart functionality. For routing, I implemented React Router to manage navigation between different components, such as the product details page, wishlist page, and the homepage. To style the app I used a combination of vanilla CSS and the Framer Motion animation library to create dynamic animations.'}/>
    )
};

export default Projects;