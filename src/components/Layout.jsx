import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { personalInfo } from "../data/data";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from 'lucide-react';

const NavLink = ({ to, children, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link 
      to={to} 
      onClick={onClick}
      className="relative group px-1 py-2 block w-full md:w-auto text-center md:text-left"
    >
      <span className={`relative z-10 transition-colors duration-300 ${isActive ? "text-blue-400 font-bold" : "text-gray-300 group-hover:text-white"}`}>
        {children}
      </span>
      <span className={`absolute bottom-0 left-0 h-0.5 bg-blue-400 transition-all duration-300 ease-out hidden md:block ${isActive ? "w-full" : "w-0 group-hover:w-full"}`} />
      <span className="absolute inset-0 bg-blue-400/0 group-hover:bg-blue-400/5 rounded-lg transition-colors duration-300 z-0" />
    </Link>
  );
};

const Layout = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation(); // On récupère l'URL actuelle

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);

  const isFixedFooter = location.pathname === '/' || location.pathname === '/contact';

  return (
    // On remet min-h-screen pour permettre le scroll sur les pages longues
    <div className="min-h-screen bg-gray-900 text-white font-sans flex flex-col">
      
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed w-full z-50 bg-transparent backdrop-blur-sm"
      >
        <div className="p-6 flex justify-between items-center max-w-7xl mx-auto">
          <Link to="/" onClick={closeMenu}>
            <motion.h1 whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="text-xl font-bold tracking-tighter cursor-pointer relative z-50">
              {personalInfo.name}<span className="text-blue-400">.</span>
            </motion.h1>
          </Link>

          <div className="hidden md:flex space-x-8 items-center">
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/about">A propos</NavLink>
            <NavLink to="/projets">Projets</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>

          <button onClick={toggleMenu} className="md:hidden text-gray-300 hover:text-white z-50 focus:outline-none">
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} className="md:hidden overflow-hidden bg-gray-900/95 backdrop-blur-xl border-b border-gray-800">
              <div className="flex flex-col items-center py-8 space-y-6">
                <NavLink to="/" onClick={closeMenu}>Accueil</NavLink>
                <NavLink to="/about" onClick={closeMenu}>A propos</NavLink>
                <NavLink to="/projets" onClick={closeMenu}>Projets</NavLink>
                <NavLink to="/contact" onClick={closeMenu}>Contact</NavLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Contenu principal */}
      <main className="grow w-full flex flex-col">
        {children}
      </main>

      {/* FOOTER INTELLIGENT */}
      <footer 
        className={`
          w-full p-4 text-center text-gray-600 text-xs z-40 bg-transparent pointer-events-none
          ${isFixedFooter ? 'fixed bottom-0' : 'relative mt-auto py-8'} 
        `}
      >
        {/* pointer-events-auto permet de sélectionner le texte du footer même si le container est "none" */}
        <p className="pointer-events-auto">© 2026 Thibaut Senechal — Développé avec React & Tailwind</p>
      </footer>

    </div>
  );
};

export default Layout;
