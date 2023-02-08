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
          <p>
            I am a MERN stack developer with a strong focus on React, Redux, and
            Tailwind CSS. I specialize in building responsive and user-friendly
            web applications that provide a seamless experience for the
            end-user. With my in-depth knowledge of the latest web development
            technologies and frameworks, I am able to create innovative
            solutions that meet the needs of my clients. Whether it's a simple
            website or a complex web application, I am committed to delivering
            high-quality work that exceeds expectations.
          </p>
          <p className="mt-10">
            In addition to my expertise in the MERN stack, I also have a strong
            background in UI design and animation. I am skilled in using the
            GreenSock Animation Platform (GSAP) library to create dynamic and
            engaging user interfaces. I have experience in creating smooth
            animations and transitions that enhance the overall user experience.
            I am also well-versed in using other design tools such as Adobe XD
            and Figma to create wireframes and mockups. My ability to combine my
            technical skills with my artistic eye allows me to create visually
            appealing and functional web applications that stand out in the
            market.
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
