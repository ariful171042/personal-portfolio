import { useRef } from "react";
import { useHoverEffect } from "../hook/useHoverEffect";
import { useImageReveal, useHeadlineReveal } from "../hook/gsap";

const data = {
  img1: "https://res.cloudinary.com/dokdacs1p/image/upload/v1675401576/FB_IMG_1675401471150_ldx2xq.jpg",
  img2: "https://res.cloudinary.com/dokdacs1p/image/upload/v1675401576/FB_IMG_1675401481244_hfyjg2.jpg",
};

const Hero = () => {
  const heroImageRef = useRef(null);
  const heroHeadlineOneRef = useRef(null);
  const heroHeadlineTwoRef = useRef(null);

  const headlines = [heroHeadlineOneRef, heroHeadlineTwoRef];

  useHoverEffect(heroImageRef, data.img1, data.img2);
  useImageReveal(heroImageRef, 0.5);
  useHeadlineReveal(headlines, 1.5);

  return (
    <div
      className="hero container mx-auto mt-20 flex justify-center items-center overflow-hidden"
      id="#home"
    >
      <div className="hero-img" ref={heroImageRef}></div>
      <div className="shutter shutter-left overflow-hidden">
        <h1 className="heroHeadLine-1" ref={heroHeadlineOneRef}>
          ReactJS
        </h1>
      </div>
      <div className="shutter shutter-right overflow-hidden">
        <h1 className="heroHeadLine-2" ref={heroHeadlineTwoRef}>
          Developer
        </h1>
      </div>
      <div className="circle-left"></div>
      <div className="circle-right"></div>
    </div>
  );
};

export default Hero;
