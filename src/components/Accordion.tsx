import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

/* Task-V */
const variants = {
  open: { height: "auto", opacity: 1 },
  close: { height: 0, opacity: 0 },
};

function Accordion() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-92 mb-4">
      <div role="button" onClick={() => setIsOpen((prev) => !prev)}>
        <h2 className="text-4xl mb-2">Dreamwalking Ballad</h2>
        <h6 className="text-xl">BY FEDERICO GARCÍA LORCA</h6>
        <hr />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.article
            className="pt-4 overflow-hidden bg-yellow-50 p-2"
            variants={variants}
            initial="close"
            animate="open"
            exit="close">
            <p>for Gloria Giner and Fernando de los Ríos</p>
            <br />
            <p>Green I want you green</p>
            <p>green wind green branches</p>
            <p>Boat on the sea and</p>
            <p>horse on the mountain</p>
            <p>Shadow on her waist</p>
            <p>she dreams at her railing</p>
            <p>green flesh green hair</p>
            <p>eyes of cold silver</p>
            <p>Green I want you green</p>
            <p>Under the gypsy moon</p>
            <p>things are seeing her</p>
            <p>but she can’t see them</p>
          </motion.article>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Accordion;
