import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

const StackList = ({ stack, id }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Seuil pour diviser en deux lignes
  const SPLIT_THRESHOLD = 8;
  const isMultiLine = stack.length > SPLIT_THRESHOLD;

  // Calcul de la répartition
  // Si multi-lignes, on essaie de charger un peu plus la première ligne pour la stabilité visuelle
  // Ex: 10 items -> splitIndex = 6 -> Ligne 1: 6, Ligne 2: 4
  const splitIndex = isMultiLine ? Math.ceil(stack.length * 0.6) : stack.length;

  const firstRow = stack.slice(0, splitIndex);
  const secondRow = isMultiLine ? stack.slice(splitIndex) : [];

  const renderIcons = (items, offset) => {
    return items.map((tech, localIndex) => {
      const globalIndex = offset + localIndex;
      const Icon = tech.icon;
      const isHovered = hoveredIndex === globalIndex;

      return (
        <div
          key={globalIndex}
          className="relative cursor-pointer px-3 py-2 z-10 flex items-center justify-center"
          onMouseEnter={() => setHoveredIndex(globalIndex)}
        >
          {/* --- 1. Le Fond Coloré (Qui glisse) --- */}
          {isHovered && (
            <motion.div
              layoutId={`highlight-${id}`}
              className="absolute inset-0 bg-blue-600 rounded-lg -z-10"
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 25,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
            />
          )}

          {/* --- 2. L'Icône --- */}
          <Icon
            size={24}
            className={`transition-colors duration-200 ${
              isHovered ? "text-white" : "text-gray-400"
            }`}
          />

          {/* --- 3. Le Tooltip --- */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 5, scale: 0.8 }}
                transition={{ duration: 0.2 }}
                className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs font-bold px-2 py-1 rounded border border-gray-700 whitespace-nowrap z-20 shadow-xl"
              >
                {tech.name}
                <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    });
  };

  return (
    <div
      className="flex flex-col items-center w-full gap-1"
      onMouseLeave={() => setHoveredIndex(null)}
    >
      <div className="flex flex-wrap justify-center items-center w-full">
        {renderIcons(firstRow, 0)}
      </div>
      {isMultiLine && (
        <div className="flex flex-wrap justify-center items-center w-full">
          {renderIcons(secondRow, splitIndex)}
        </div>
      )}
    </div>
  );
};

export default StackList;
