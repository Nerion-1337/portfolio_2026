import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

const StackList = ({ stack, id }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Si on a plus de 9 items (donc 10 ou +), on applique la logique de distribution spécifique desktop
  // Exemple demande : 10 items -> 6/4 | 11 -> 7/4 | 12 -> 7/5
  const SPLIT_THRESHOLD = 10;
  const isMultiLine = stack.length >= SPLIT_THRESHOLD;

  // Calcul de la rupture : Math.ceil(Total / 2) + 1
  // Ex: 10/2 = 5 + 1 = 6 (Break après le 6ème item)
  // Ex: 11/2 = 5.5 -> 6 + 1 = 7 (Break après le 7ème)
  // Ex: 12/2 = 6 + 1 = 7 (Break après le 7ème)
  const splitIndex = isMultiLine ? Math.ceil(stack.length / 2) + 1 : -1;

  return (
    <div
      className="flex flex-wrap justify-center items-center w-full gap-y-1"
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {stack.map((tech, index) => {
        const Icon = tech.icon;
        const isHovered = hoveredIndex === index;

        return (
          <React.Fragment key={index}>
            <div
              className="relative cursor-pointer px-3 py-2 z-10 flex items-center justify-center"
              onMouseEnter={() => setHoveredIndex(index)}
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

            {/* Break forcé UNIQUEMENT sur Desktop (md:block) à partir du seuil */}
            {isMultiLine && index === splitIndex - 1 && (
              <div className="hidden md:block w-full basis-full h-0 border-none m-0 p-0" />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default StackList;
