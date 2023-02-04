import { HashLink } from "react-router-hash-link";

const Navber = ({ footerNav }) => {
  return (
    <nav
      className={`navber flex justify-between container mx-auto ${
        footerNav ? "mt-40" : "mt-20"
      } uppercase`}
    >
      <div className="logo">
        <HashLink smooth to={"#home"} className="link-item">
          {footerNav ? "Go to top" : "Md. Ariful Islam"}
        </HashLink>
      </div>
      <ul className="links flex flex-col gap-3">
        <li>
          <HashLink smooth to={"#home"} className="link-item">
            Home
          </HashLink>
        </li>
        <li>
          <HashLink smooth to={"#projects"} className="link-item">
            Projects
          </HashLink>
        </li>
        <li>
          <HashLink smooth to={"#Skills"} className="link-item">
            Skills
          </HashLink>
        </li>
        <li>
          <HashLink smooth to={"#about"} className="link-item">
            About
          </HashLink>
        </li>
        <li>
          <HashLink smooth to={"#contact"} className="link-item">
            Contact
          </HashLink>
        </li>
        <li>
          <HashLink smooth to={"#resume"} className="link-item">
            Resume
          </HashLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navber;
