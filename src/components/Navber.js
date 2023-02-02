import { HashLink } from "react-router-hash-link";

const Navber = () => {
  return (
    <nav className="navber flex justify-between container mx-auto mt-20 uppercase">
      <div className="logo">
        <HashLink smooth to={"#home"} className="link-item">
          Md. Ariful Islam
        </HashLink>
      </div>
      <ul className="links flex flex-col gap-3">
        <li>
          <HashLink smooth to={"home"} className="link-item">
            Home
          </HashLink>
        </li>
        <li>
          <HashLink smooth to={"projects"} className="link-item">
            Projects
          </HashLink>
        </li>
        <li>
          <HashLink smooth to={"skills"} className="link-item">
            Skills
          </HashLink>
        </li>
        <li>
          <HashLink smooth to={"about"} className="link-item">
            About
          </HashLink>
        </li>
        <li>
          <HashLink smooth to={"Contact"} className="link-item">
            Contact
          </HashLink>
        </li>
        <li>
          <HashLink smooth to={"resume"} className="link-item">
            Resume
          </HashLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navber;