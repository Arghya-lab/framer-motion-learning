import { useState } from "react";
import Menu from "./Menu";
import { motion } from "framer-motion";

const variants = {
  open: { x: 0 },
  close: { x: "-100%", transition: { delay: 0.33 } },
};

const ulVariants = {
  open: {
    scale: 1.05,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.5,
      staggerDirection: -1, // 1=>forward, -1=>backwards
      when: "afterChildren", // afterChildren, beforeChildren
    },
  },
  close: { scale: 1 },
};

const liVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  close: {
    y: -20,
    opacity: 0,
  },
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
          iconSize={48}
          onClick={() => setIsOpen((prev) => !prev)}
          className="cursor-pointer"
        />
        <h4 className="text-4xl">Framer Motion Learning</h4>
      </div>
      <motion.nav
        className="fixed z-10 top-0 -left-[9rem] p-4 pl-40 h-screen min-w-[500px] max-w-2xl bg-black"
        variants={variants}
        initial={"close"}
        animate={isOpen ? "open" : "close"}
        // transition={{ damping: 300 }}
      >
        <button
          className="p-1 border-2 border-white rounded-lg text-white mb-8"
          onClick={() => setIsOpen(false)}>
          Close
        </button>
        <motion.ul
          className="text-white text-3xl font-mono"
          variants={ulVariants}>
          {links.map((item) => (
            <motion.li key={item.title} variants={liVariants} className=" mb-2">
              <a href={item.link} className="hover:underline">
                {item.title}
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </motion.nav>
    </>
  );
}

export default NavBar;
