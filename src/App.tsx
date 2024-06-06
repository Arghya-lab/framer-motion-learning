import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Modal from "./components/Modal";
import Accordion from "./components/Accordion";
import NavBar from "./components/NavBar";

function App() {
  const [isOpenRedBox, setIsOpenRedBox] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      {/* Task-VI & VII & VIII */}
      <NavBar />
      <div className="px-24 py-8">
        <div className="flex gap-2">
          <button
            className="p-1 border-2 border-red-600 rounded-lg mb-4"
            onClick={() => setIsOpenRedBox((prev) => !prev)}>
            Toggle Red Box
          </button>
          <button
            className="p-1 border-2 border-green-600 rounded-lg mb-4"
            onClick={() => setIsModalOpen((prev) => !prev)}>
            Toggle Modal
          </button>
        </div>
        {/* Task-I */}
        <AnimatePresence>
          {isOpenRedBox && (
            <motion.div
              className="h-48 w-48 bg-red-500"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              // transition={{ duration: 1 }}
            />
          )}
        </AnimatePresence>
        {/* Task-II */}
        <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
        {/* Task-III & V */}
        <Accordion />
        {/* Task-IV */}
        <motion.div
          className="h-16 w-full bg-purple-200"
          animate={{ opacity: [0, 1, 0, 1] }}
          transition={{ duration: 4, times: [0, 0.25, 0.75, 1] }}
        />
      </div>
    </>
  );
}

export default App;
