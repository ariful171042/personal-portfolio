import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useImageReveal = (el, delay = 0) => {
  useEffect(() => {
    gsap.fromTo(
      el.current,
      {
        y: "-100vh",
      },
      {
        y: 0,
        duration: 2,
        delay,
        ease: "power4.out",
      }
    );
  }, [el]);
};

/*-----------HeadlineReveal--------*/
export const useHeadlineReveal = (items, delay = 0) => {
  useEffect(() => {
    const el = items.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        y: 500,
      },
      {
        y: 0,
        duration: 1,
        delay,
        ease: "power4.out",
        stagger: 0.2,
      }
    );
  }, [items, delay]);
};

/*-----------Nebver Reveal--------*/
export const useLinkReveal = (items, delay = 0) => {
  useEffect(() => {
    const el = items.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 2,
        delay,
        ease: "power4.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: el,
        },
      }
    );
  }, [items, delay]);
};

/*-----------Bio Reveal--------*/

export const useBioReveal = (el, delay = 0) => {
  useEffect(() => {
    gsap.fromTo(
      el.current,
      {
        y: 500,
      },
      {
        y: 0,
        duration: 1.5,
        delay,
        ease: "power4.out",
      }
    );
  }, [el, delay]);
};

/*-----------Social Reveal--------*/

export const useSocialReveal = (el, delay = 0) => {
  useEffect(() => {
    gsap.fromTo(
      el.current,
      {
        x: -500,
      },
      {
        x: 0,
        duration: 1.5,
        delay,
        ease: "power4.out",
      }
    );
  }, [el, delay]);
};

/*-----------Section Reveal--------*/
export const useSectionTitleReveal = (el, delay = 0) => {
  useEffect(() => {
    gsap.fromTo(
      el.current,
      {
        y: 200,
      },
      {
        y: 0,
        duration: 1.5,
        delay,
        ease: "power4.out",
        scrollTrigger: {
          trigger: el.current,
        },
      }
    );
  }, [el, delay]);
};

/*-----------Project Reveal--------*/

export const useProjectLeftRightReveal = (items, delay = 0) => {
  useEffect(() => {
    const el = items.map((item) => item.current);

    gsap.fromTo(
      el,
      {
        y: 500,
      },
      {
        y: 0,
        duration: 2,
        delay,
        ease: "power4.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: el,
        },
      }
    );
  }, [items, delay]);
};

/*-----------Skill Reveal--------*/

export const useSkillLineReveal = (items) => {
  useEffect(() => {
    items.forEach((el) =>
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          onEnter() {
            el.classList.add("reveal");
          },
        },
      })
    );
  }, [items]);
};

export const useSkillTextReveal = (el) => {
  useEffect(() => {
    gsap.fromTo(
      el,
      {
        y: 200,
      },
      {
        y: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: el,
        },
      }
    );
  }, [el]);
};

/*-----------Input Reveal--------*/

export const useContactReveal = (inputs, delay = 0) => {
  useEffect(() => {
    const el = inputs.map((input) => input.current);

    gsap.fromTo(
      el,
      {
        y: 100,
      },
      {
        y: 0,
        duration: 0.3,
        delay,
        ease: "power4.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: el,
        },
      }
    );
  }, [inputs, delay]);
};

/*-----------Footer Reveal--------*/

export const useFooterReveal = (el) => {
  useEffect(() => {
    gsap.fromTo(
      el.current,
      {
        y: -100,
      },
      {
        y: 0,
        duration: 1,
        ease: "power4.out",
        stagger: 0.3,
        scrollTrigger: {
          trigger: el.current,
        },
      }
    );
  }, [el]);
};
