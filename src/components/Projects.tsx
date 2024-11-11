import Project from './Project';

const Projects: React.FC <{}> = () => {
    return (
        <div>
        <Project
         title={'E-Commerce Site'}
        description={'I developed an e-commerce site using React and TypeScript, utilizing Redux Toolkit for state management, enabling handling of global state and asynchronous actions related to the products, and shopping cart functionality. For routing, I implemented React Router to manage navigation between different components, such as the product details page, wishlist page, and the homepage. To style the app I used a combination of vanilla CSS and the Framer Motion animation library to create dynamic animations.'}
        />
        <Project
         title={'Carbon Footprint Tracker'}
        description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi viverra congue neque ut pellentesque. Proin euismod quam at porttitor tempor. Pellentesque dolor justo, volutpat eget porta nec, ultrices quis justo. Nullam sed mauris sodales, suscipit ex a, auctor metus. Morbi nec ex quis libero blandit rutrum.'}
        />
        <Project
        title={'Event Manager'}
        description={'Mauris pharetra dui ut lacus sodales malesuada. Sed faucibus erat ante, facilisis pulvinar lacus blandit ut. Vestibulum ut vehicula turpis. Aliquam erat volutpat. Maecenas iaculis nisl congue lorem bibendum, vitae accumsan augue mollis. Aenean hendrerit lacus ornare ullamcorper elementum.'}
        />
        </div>
    )
};

export default Projects;