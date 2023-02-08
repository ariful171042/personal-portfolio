import { useRef } from "react";
import { HashLink } from "react-router-hash-link";
import { useLinkReveal } from "../hook/gsap";

const Navber = ({ footerNav }) => {
  const link1Ref = useRef(null);
  const link2Ref = useRef(null);
  const link3Ref = useRef(null);
  const link4Ref = useRef(null);
  const link5Ref = useRef(null);
  const link6Ref = useRef(null);
  const link7Ref = useRef(null);

  const links = [
    link1Ref,
    link2Ref,
    link3Ref,
    link4Ref,
    link5Ref,
    link6Ref,
    link7Ref,
  ];

  useLinkReveal(links);
  return (
    <nav
      className={`navber flex justify-between container mx-auto ${
        footerNav ? "mt-40" : "mt-20"
      } uppercase`}
    >
      <div className="logo">
        <HashLink smooth to={"#home"} className="link-item" ref={link1Ref}>
          {footerNav ? "Go to top" : "Md. Ariful Islam"}
        </HashLink>
      </div>
      <ul className="links flex flex-col gap-3">
        <li>
          <HashLink smooth to={"#home"} className="link-item" ref={link2Ref}>
            Home
          </HashLink>
        </li>
        <li>
          <HashLink
            smooth
            to={"#projects"}
            className="link-item"
            ref={link3Ref}
          >
            Projects
          </HashLink>
        </li>
        <li>
          <HashLink smooth to={"#Skills"} className="link-item" ref={link4Ref}>
            Skills
          </HashLink>
        </li>
        <li>
          <HashLink smooth to={"#about"} className="link-item" ref={link5Ref}>
            About
          </HashLink>
        </li>
        <li>
          <HashLink smooth to={"#contact"} className="link-item" ref={link6Ref}>
            Contact
          </HashLink>
        </li>
        <li>
          <HashLink
            smooth
            to={
              "https://docs.google.com/document/d/1enlkgz0GScNPPAi5lnlo5PtHkP6Bxuq4UsmYSqtyQ6Q/edit?usp=sharing"
            }
            className="link-item"
            ref={link7Ref}
          >
            Resume
          </HashLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navber;
