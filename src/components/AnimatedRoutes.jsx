import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Importe tes pages
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";
import About from "../pages/About";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    // mode="wait" signifie : "Attends que l'ancienne page soit partie avant d'afficher la nouvelle"
    <AnimatePresence mode="wait">
      {/* La clé (key) est essentielle : elle dit à React "Hé, l'URL a changé, relance l'animation !" */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projets" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
