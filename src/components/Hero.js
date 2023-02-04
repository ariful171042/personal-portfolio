import { useRef } from "react";
import { useHoverEffect } from "../hook/useHoverEffect";

const data = {
  img1: "https://res.cloudinary.com/dokdacs1p/image/upload/v1675401576/FB_IMG_1675401471150_ldx2xq.jpg",
  img2: "https://res.cloudinary.com/dokdacs1p/image/upload/v1675401576/FB_IMG_1675401481244_hfyjg2.jpg",
};

const Hero = () => {
  const heroImageRef = useRef(null);

  useHoverEffect(heroImageRef, data.img1, data.img2);

  return (
    <div
      className="hero container mx-auto mt-20 flex justify-center items-center overflow-hidden"
      id="#home"
    >
      <div className="hero-img" ref={heroImageRef}></div>
      <div className="shutter shutter-left overflow-hidden">
        <h1 className="heroHeadLine-1">ReactJS</h1>
      </div>
      <div className="shutter shutter-right overflow-hidden">
        <h1 className="heroHeadLine-2">Developer</h1>
      </div>
      <div className="circle-left"></div>
      <div className="circle-right"></div>
    </div>
  );
};

export default Hero;
