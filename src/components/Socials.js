import { useRef } from "react";
import { useSocialReveal } from "../hook/gsap";

const data = [
  { id: 1, title: "Facebook", url: "https://www.facebook.com/rakibariful.927" },
  { id: 2, title: "Twitter", url: "https://www.twitter.com" },
  { id: 3, title: "GitHub", url: "https://github.com/ariful171042" },
  {
    id: 4,
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/md-ariful-islam-b0b41122b/",
  },
  { id: 5, title: "Leetcode", url: "https://leetcode.com/ariful171042/" },
];

const Socials = () => {
  const socialRef = useRef(null);

  useSocialReveal(socialRef, 2);
  return (
    <div
      className="socials flex gap-5 uppercase text-sm fixed left-10 top-[75%] -rotate-90 origin-left text-white/30 bg-black/30 p-5 backdrop-blur-xl z-15"
      ref={socialRef}
    >
      {data.map((social) => (
        <a
          href={social.url}
          target="_blank"
          rel="noreferrer"
          key={social.id}
          className="hover:text-cyan-400 duration-500"
        >
          {social.title}
        </a>
      ))}
    </div>
  );
};

export default Socials;
