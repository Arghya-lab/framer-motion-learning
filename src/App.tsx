import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [isOpenRedBox, setIsOpenRedBox] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="p-24">
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
      <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </div>
  );
}

export default App;
