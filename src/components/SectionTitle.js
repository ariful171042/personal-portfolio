import { useRef } from "react";
import { useSectionTitleReveal } from "../hooks/gsap";

const SectionTitle = ({ title }) => {
  const sectionRef = useRef(null);

  useSectionTitleReveal(sectionRef);
  return (
    <div>
      <div className="overflow-hidden">
        <h2 className="section-title" ref={sectionRef}>
          {title}
        </h2>
      </div>
    </div>
  );
};

export default SectionTitle;
