import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }} // Départ : transparent et un peu plus bas
      animate={{ opacity: 1, y: 0 }}  // Arrivée : visible et à sa place
      exit={{ opacity: 0, y: -20 }}   // Sortie : transparent et vers le haut
      transition={{ duration: 0.3, ease: "easeInOut" }} // Durée de l'animation
      className="w-full h-full"
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;