import { AnimatePresence, motion } from "framer-motion";
import { Dispatch, SetStateAction } from "react";

function Modal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="w-64 fixed top-48 left-[calc(50%-6rem)] bg-green-500 p-2 rounded-lg"
          style={{
            transform: "translate-3d(-50%, 0,0)",
          }}
          initial={{ opacity: 0, y: "100vh" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: "100vh" }}>
          <h2 className="text-4xl">This is Title</h2>
          <p className="pt-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Repellendus quos non, reprehenderit dignissimos aliquam consequuntur
            vel labore minima numquam at accusamus, nesciunt beatae saepe
            dolorem nostrum autem, aperiam nam voluptatem?
          </p>
          <button
            className="mt-4 p-1 border-2 bg-white rounded-lg"
            onClick={() => setIsOpen(false)}>
            Close
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Modal;
