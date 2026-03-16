import React, { useState, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

const Tooltip = ({ text, children, position = "top" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const containerRef = useRef(null);
  const isTop = position === "top";

  const updateCoords = () => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setCoords({
        left: rect.left + rect.width / 2,
        top: isTop ? rect.top : rect.bottom,
      });
    }
  };

  const handleMouseEnter = () => {
    updateCoords();
    setIsVisible(true);
  };

  return (
    <>
      <div
        ref={containerRef}
        className="relative flex items-center justify-center"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={() => setIsVisible(false)}
        onFocus={handleMouseEnter}
        onBlur={() => setIsVisible(false)}
      >
        {children}
      </div>
      {createPortal(
        <AnimatePresence>
          {isVisible && (
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
                y: isTop ? 10 : -10,
                x: "-50%",
              }}
              animate={{ opacity: 1, scale: 1, y: 0, x: "-50%" }}
              exit={{
                opacity: 0,
                scale: 0.9,
                y: isTop ? 10 : -10,
                x: "-50%",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              style={{
                position: "fixed",
                left: coords.left,
                top: coords.top,
              }}
              className={`
                z-[9999] px-3 py-2 bg-gray-900/95 text-gray-100 text-xs font-semibold 
                rounded-lg whitespace-nowrap border border-gray-700/50 shadow-xl shadow-black/50 backdrop-blur-md pointer-events-none 
                ${isTop ? "-translate-y-full mb-2" : "mt-2"}
              `}
            >
              {text}

              {/* Arrow */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 w-0 h-0 border-[6px] border-transparent ${
                  isTop
                    ? "top-full -mt-[1px] border-t-gray-900/95"
                    : "bottom-full -mb-[1px] border-b-gray-900/95"
                }`}
              />
            </motion.div>
          )}
        </AnimatePresence>,
        document.body,
      )}
    </>
  );
};

export default Tooltip;
