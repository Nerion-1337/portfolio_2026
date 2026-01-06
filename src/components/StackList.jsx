import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

const StackList = ({ stack, id }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div 
      className="flex flex-wrap gap-3" 
      onMouseLeave={() => setHoveredIndex(null)} // On quitte la zone globale -> reset
    >
      {stack.map((tech, index) => {
        const Icon = tech.icon;
        const isHovered = hoveredIndex === index;

        return (
          <div
            key={index}
            className="relative cursor-pointer px-3 py-2 z-10 flex items-center justify-center"
            onMouseEnter={() => setHoveredIndex(index)} // On entre sur un item -> update
          >
            {/* --- 1. Le Fond Coloré (Qui glisse) --- */}
            {isHovered && (
              <motion.div
                layoutId={`highlight-${id}`} // La clé magique pour le glissement
                className="absolute inset-0 bg-blue-600 rounded-lg -z-10"
                
                // Réglage physique pour éviter l'effet "téléportation"
                transition={{ 
                  type: "spring", 
                  stiffness: 250, // Plus bas = plus mou
                  damping: 25     // Plus bas = plus élastique
                }}
                
                // Animation d'apparition douce
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
              />
            )}

            {/* --- 2. L'Icône --- */}
            <Icon 
              size={24} 
              className={`transition-colors duration-200 ${isHovered ? 'text-white' : 'text-gray-400'}`} 
            />

            {/* --- 3. Le Tooltip (Nom au-dessus) --- */}
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
                  {/* Petite flèche vers le bas */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default StackList;