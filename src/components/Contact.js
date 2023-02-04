import SectionTitle from "./SectionTitle";

const Contact = () => {
  const sendMassage = (e) => {
    e.preventDefault();

    //emailjs integration

    //rest
    e.target.querySelector(`fullName`).value = "";
    e.target.querySelector(`email`).value = "";
    e.target.querySelector(`massage`).value = "";
  };
  return (
    <div className="contact  container mx-auto mt-40" id="contact">
      <SectionTitle title={"Contact"} />

      <form onSubmit={sendMassage} className="mt-40 grid grid-cols-2 gap-20">
        <div className="from-control overflow-hidden">
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
          />
        </div>
        <div className="from-control overflow-hidden">
          <textarea
            placeholder="Write your massage"
            name="massage"
            required
            rows="1"
            cols="30"
            className="massage bg-transparent border py-16 px-28 rounded-full border-white/20 outline-none focus:border-cyan-400 duration-500 w-full resize-none"
          />
        </div>
        <div className="from-control overflow-hidden">
          <input
            type="submit"
            value="Send Massage"
            name="email"
            required
            className=" border py-16 px-28 rounded-full border-white/20 outline-none hover:bg-cyan-400/20 hover:border-cyan-400/20 duration-500 w-full uppercase tracking-widest"
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
