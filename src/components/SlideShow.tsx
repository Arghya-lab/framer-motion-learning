import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function SlideShow() {
  const backgroundsColors = [
    "bg-yellow-500",
    "bg-pink-500",
    "bg-violet-500",
    "bg-orange-500",
    "bg-lime-500",
    "bg-rose-500",
  ];

  const [[page, direction], setPage] = useState<[number, 1 | -1]>([0, 1]);

  function paginate(direction: 1 | -1) {
    setPage(
      page === 0 && direction === -1
        ? [backgroundsColors.length - 1, direction]
        : [(page + direction) % backgroundsColors.length, direction]
    );
  }

  const variants = {
    initial: (direction: 1 | -1) => ({ opacity: 0, x: -1000 * direction }),
    default: { opacity: 1, x: 0 },
    exit: (direction: 1 | -1) => ({ opacity: 0, x: 1000 * direction }),
  };

  return (
    <div className="mb-8 relative h-96">
      <AnimatePresence custom={direction}>
        <motion.div
          key={page}
          className={`${backgroundsColors[page]} h-96 w-full absolute`}
          variants={variants}
          custom={direction}
          initial="initial"
          animate="default"
          exit="exit"
          drag="x"
          onDragEnd={(_, { offset }) => {
            if (offset.x > 400) {
              paginate(1);
            } else if (offset.x < 400) {
              paginate(-1);
            }
          }}
          dragConstraints={{
            left: 0,
            right: 0,
          }}
        />
      </AnimatePresence>
      <div className="absolute z-20 flex h-full w-full items-center justify-between p-4">
        <button
          className="py-2 px-4 text-lg font-bold text-white rounded-full bg-white border-white border-2 bg-opacity-15 backdrop-blur-md"
          onClick={() => paginate(-1)}>
          {"<"}
        </button>
        <button
          className="py-2 px-4 text-lg font-bold text-white rounded-full bg-white border-white border-2 bg-opacity-15 backdrop-blur-md"
          onClick={() => paginate(1)}>
          {">"}
        </button>
      </div>
    </div>
  );
}

export default SlideShow;
