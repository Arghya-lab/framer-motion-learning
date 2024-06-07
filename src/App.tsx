import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useState } from "react";
import Modal from "./components/Modal";
import Accordion from "./components/Accordion";
import NavBar from "./components/NavBar";

function App() {
  const [isOpenRedBox, setIsOpenRedBox] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDraggableCardActive, setIsDraggableCardActive] = useState(true);

  const x = useMotionValue(0);
  const opacity = useTransform(x, [-200, 0, 200], [0, 1, 0]);

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
        {/* Task-IX  */}
        <motion.div
          className="h-48 w-48 p-4 text-center bg-orange-500 mt-8 flex justify-center items-center rounded-lg text-white text-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.2 }}
          // onHoverEnd={() => console.log("Hover end.")}
        >
          Hover card
        </motion.div>
        {/* Task-X  */}
        <motion.div
          className="h-48 w-48 p-4 text-center bg-yellow-400 mt-8 flex justify-center items-center rounded-lg text-white text-xl"
          drag
          dragConstraints={{
            top: -100,
            left: -100,
            right: 0,
            bottom: 0,
          }}>
          Draggable card (All side)
        </motion.div>
        {/* Task-XI & XII  */}
        <AnimatePresence>
          {isDraggableCardActive && (
            <motion.div
              exit={{
                height: 0,
                opacity: 0,
              }}
              transition={{
                opacity: {
                  duration: 0,
                },
              }}>
              <motion.div
                className="h-48 w-48 p-4 text-center bg-green-400 mt-8 flex justify-center items-center rounded-lg text-white text-xl"
                drag="x"
                dragConstraints={{
                  left: 0,
                  right: 0,
                }}
                onDragEnd={(_, info) => {
                  setIsDraggableCardActive(Math.abs(info.point.x) < 700);
                }}
                style={{
                  x,
                  opacity,
                }}>
                Draggable card (Horizontal)
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;
