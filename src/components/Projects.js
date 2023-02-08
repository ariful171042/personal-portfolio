import Project from "./Project";
import SectionTitle from "./SectionTitle";

const data = [
  {
    id: 1,
    title: "clear tech - Online Ecommerce Store",
    img1: "https://res.cloudinary.com/dcvvwskjo/image/upload/v1675861524/Portfolio/projects1_tr0o19.jpg",
    img2: "https://res.cloudinary.com/dcvvwskjo/image/upload/v1675862161/Portfolio/projectPhoto_wyui68.jpg",
    description:
      "Clear Tech is a front-end ecommerce platform where you can browse and purchase a variety of products. The platform is built using React and utilizes Redux for state management and Axios for data fetching. The design is implemented with Tailwind CSS.",
    tools: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "React.js",
      "firebase",
      "Tailwind CSS",
    ],
    liveLink: "https://clear-tech.netlify.app",
    frontEndLink: "https://github.com/ariful171042/clear-tech",
    backEndLink: "https://www.google.com",
  },
  {
    id: 2,
    title: "Foodverse: A Recipe Finder Web Application",
    img1: "https://res.cloudinary.com/dcvvwskjo/image/upload/v1675865691/Portfolio/Screenshot_13_zx2p0c.png",
    img2: "https://res.cloudinary.com/dcvvwskjo/image/upload/v1675866043/Portfolio/Screenshot_15_dhhnsr.png",
    description:
      "Foodverse is a recipe web application, where an user can search different kinds of recipe and find the necessary ingredients for the specific recipe item. Also a recipe item can be saved into the local storage of the browser. It's easy to find different recipes for both vegetarians and meat eaters, as well as for people who want to lose weight.",
    tools: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "React.js",
      "firebase",
      "Tailwind CSS",
    ],
    liveLink: "https://www.google.com",
    frontEndLink: "https://www.google.com",
  },
];

const Projects = () => {
  return (
    <div className="projects container mx-auto mt-40 " id="projects">
      <SectionTitle title={"Projects"} />
      <div className="projects-wrapper mt-40 flex flex-col gap-40">
        {data.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
