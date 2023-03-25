import { useRef } from "react";
import { useContactReveal } from "../hook/gsap";
import emailJs from "@emailjs/browser";
import SectionTitle from "./SectionTitle";

const Contact = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const massageRef = useRef(null);
  const submitRef = useRef(null);
  const formRef = useRef(null);

  const contactRefs = [nameRef, emailRef, massageRef, submitRef];

  useContactReveal(contactRefs);

  const sendEmail = (e) => {
    e.preventDefault();

    //emailjs integration
    emailJs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        formRef.current,
        process.env.REACT_APP_PUBLIC_ID
      )
      .then(
        () => {
          console.log("message send");
        },
        () => {
          console.log("Message not send");
        }
      );

    //rest
    e.target.querySelector(`.fullName`).value = "";
    e.target.querySelector(`.email`).value = "";
    e.target.querySelector(`.message`).value = "";
  };
  return (
    <div className="contact  container mx-auto mt-40" id="contact">
      <SectionTitle title={"Contact"} />

      <form
        onSubmit={sendEmail}
        className="mt-40 grid grid-cols-2 gap-20"
        ref={formRef}
      >
        <div className="from-control overflow-hidden" ref={nameRef}>
          <input
            type="text"
            placeholder="Write your name"
            name="fullname"
            required
            className=" fullName  bg-transparent border py-16 px-28 rounded-full border-white/20 outline-none focus:border-cyan-400 duration-500 w-full"
          />
        </div>
        <div className="from-control overflow-hidden">
          <input
            type="email"
            placeholder="Write your email"
            name="email"
            required
            className="email bg-transparent border py-16 px-28 rounded-full border-white/20 outline-none focus:border-cyan-400 duration-500 w-full"
            ref={emailRef}
          />
        </div>
        <div className="from-control overflow-hidden">
          <textarea
            placeholder="Write your massage"
            name="message"
            required
            rows="1"
            cols="30"
            className="message bg-transparent border py-16 px-28 rounded-full border-white/20 outline-none focus:border-cyan-400 duration-500 w-full resize-none"
            ref={massageRef}
          />
        </div>
        <div className="from-control overflow-hidden">
          <input
            type="submit"
            value="Send Massage"
            name="email"
            required
            className=" border py-16 px-28 rounded-full border-white/20 outline-none hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-500 w-full uppercase tracking-widest"
            ref={submitRef}
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
