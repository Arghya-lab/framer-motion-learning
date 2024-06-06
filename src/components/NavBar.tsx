import { useState } from "react";
import Menu from "./Menu";
import { motion } from "framer-motion";

const variants = {
  open: { x: 0 },
  close: { x: "-100%" },
};

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const links: { link: string; title: string }[] = [
    { link: "#", title: "One" },
    { link: "#", title: "Two" },
    { link: "#", title: "Three" },
    { link: "#", title: "Four" },
    { link: "#", title: "Five" },
  ];

  return (
    <>
      <div className="flex gap-4 text-cyan-50 bg-black p-2">
        <Menu
          size={48}
          onClick={() => setIsOpen((prev) => !prev)}
          className="cursor-pointer"
        />
        <h4 className="text-4xl">Framer Motion Learning</h4>
      </div>
      <motion.nav
        className="fixed top-0 -left-[9rem] p-4 pl-40 h-screen min-w-[500px] max-w-2xl bg-black"
        variants={variants}
        initial={"close"}
        animate={isOpen ? "open" : "close"}>
        <button
          className="p-1 border-2 border-white rounded-lg text-white mb-8"
          onClick={() => setIsOpen(false)}>
          Close
        </button>
        <ul className="text-white text-3xl font-mono">
          {links.map((item) => (
            <li>
              <a href={item.link} className="hover:underline">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </motion.nav>
    </>
  );
}

export default NavBar;
