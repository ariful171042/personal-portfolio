import { useRef } from "react";
import { HashLink } from "react-router-hash-link";
import { useFooterReveal } from "../hook/gsap";

const Footer = () => {
  const footeRef = useRef(null);
  useFooterReveal(footeRef);
  return (
    <div
      className="my-40 text-center text-white/50 overflow-hidden"
      ref={footeRef}
    >
      &copy;{new Date().getFullYear()}{" "}
      <HashLink
        smooth
        to="#home"
        className="link-item hover:text-white duration-500"
      >
        Md. Ariful Islam.
      </HashLink>{" "}
      Crafted by yours truly
    </div>
  );
};

export default Footer;
