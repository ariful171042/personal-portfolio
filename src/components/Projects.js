import Project from "./Project";
import SectionTitle from "./SectionTitle";

const data = [
  {
    id: 1,
    title: "clear tech - Online Ecommerce Store",
    img1: "https://res.cloudinary.com/dcvvwskjo/image/upload/v1679723373/Portfolio/clear-tech_pfzu3x.jpg",
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
  },

  {
    id: 2,
    title: "Proxima:Real-time project update system",
    img1: "https://res.cloudinary.com/dcvvwskjo/image/upload/v1679724493/Portfolio/proxima_jz5zto.jpg",
    img2: "https://res.cloudinary.com/dcvvwskjo/image/upload/v1679724533/Portfolio/login-page_ntfhal.jpg",
    description:
      "Proxima project is a real-time project update system that provides real-time information on project status, milestones, and deadlines. It allows project teams to collaborate more effectively and deliver high-quality projects on time and within budget.",
    tools: [
      "MongoDB",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "React.js",
      "Tailwind CSS",
    ],
    liveLink: "https://legendary-piroshki-5c59a4.netlify.app",
    frontEndLink: "https://github.com/ariful171042/proxima-clients",
    backEndLink: "https://github.com/ariful171042/proxima-server",
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
