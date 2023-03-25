import { useRef } from "react";
import { useProjectLeftRightReveal } from "../hook/gsap";
import { useHoverEffect } from "../hook/useHoverEffect";
import SectionTitle from "./SectionTitle";

const data = {
  img1: "https://res.cloudinary.com/dcvvwskjo/image/upload/v1675862605/Portfolio/105491595_184808956345313_4289435482843153036_n_fvd4x6.jpg",
  img2: "https://res.cloudinary.com/dokdacs1p/image/upload/v1675500946/2_pjggdd.jpg",
};

const About = () => {
  const aboutImageRef = useRef(null);
  const aboutRightRef = useRef(null);

  const aboutRefs = [aboutImageRef, aboutRightRef];

  useProjectLeftRightReveal(aboutRefs);

  useHoverEffect(aboutImageRef, data.img1, data.img2);
  return (
    <div className="about container mx-auto mt-40" id="about">
      <SectionTitle title={"About"} />

      <div className="about-wrapper mt-40 grid grid-cols-2 gap-20 overflow-hidden">
        <div className="about-left" ref={aboutImageRef}></div>
        <div className="about-right" ref={aboutRightRef}>
          <p className="leading-[3.2rem]">
            Hi, I'm Md. Ariful Islam, a frontend developer with expertise in
            HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, React.js, Redux.js,
            Redux Toolkit, Axios, Gsap, and Firebase. I have a passion for
            building engaging and responsive user interfaces that leverage the
            latest technologies and frameworks to deliver exceptional user
            experiences. I excel at collaborating with cross-functional teams to
            deliver high-quality solutions that meet user needs and exceed
            business goals. Whether you need a new feature, a full application,
            or simply want to improve an existing product, I am confident in my
            ability to deliver results that exceed your expectations. Let's
            connect and discuss how I can help bring your vision to life.
          </p>

          <a
            href="https://docs.google.com/document/d/1enlkgz0GScNPPAi5lnlo5PtHkP6Bxuq4UsmYSqtyQ6Q/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className=" inline-block mt-10 uppercase py-8 px-14 border  border-white/20 rounded-full hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-500"
          >
            View my Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
