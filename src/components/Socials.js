const data = [
  { id: 1, title: "Facebook", url: "https://www.google.com" },
  { id: 2, title: "Twitter", url: "https://www.google.com" },
  { id: 3, title: "GitHub", url: "https://www.google.com" },
  { id: 4, title: "LinkedIn", url: "https://www.google.com" },
  { id: 5, title: "Leetcode", url: "https://www.google.com" },
];

const Socials = () => {
  return (
    <div className="socials flex gap-5 uppercase text-sm fixed left-10 top-[75%] -rotate-90 origin-left text-white/30 bg-black/30 p-5 backdrop-blur-xl z-15">
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
