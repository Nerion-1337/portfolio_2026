import React, { useState, useEffect, useRef, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import { projects as allProjects } from "../data/data";
import PageTransition from "../components/PageTransition";
import Project3DViewer from "../components/Project3DViewer";

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const isAnimating = useRef(false);

  // Refs pour Drag & Swipe
  const dragStartY = useRef(0);
  const isDragging = useRef(false);

  // --- 1. GESTION MOBILE & FILTRAGE ---
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const displayedProjects = isMobile ? allProjects.slice(0, 10) : allProjects;

  // Sécurité index lors du resize (Pattern: Adjusting state during rendering)
  // https://react.dev/learn/you-might-not-need-an-effect#adjusting-some-state-when-a-prop-changes
  if (displayedProjects.length > 0 && activeIndex >= displayedProjects.length) {
    setActiveIndex(displayedProjects.length - 1);
  }

  // --- 2. LOGIQUE DE NAVIGATION CIRCULAIRE (LOOP) ---

  const handleNext = useCallback(() => {
    // (Index Actuel + 1) modulo Longueur Totale
    // Si on est à la fin (9), (9+1)%10 = 0 -> Retour au début
    setActiveIndex((prev) => (prev + 1) % displayedProjects.length);
  }, [displayedProjects.length]);

  const handlePrev = useCallback(() => {
    // (Index Actuel - 1 + Longueur) modulo Longueur
    // Si on est au début (0), (0-1+10)%10 = 9 -> Allé à la fin
    setActiveIndex(
      (prev) => (prev - 1 + displayedProjects.length) % displayedProjects.length
    );
  }, [displayedProjects.length]);

  const handleGoTo = (index) => {
    if (!isAnimating.current && index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  // --- GESTION SCROLL SOURIS ---
  useEffect(() => {
    const onWheel = (e) => {
      if (isAnimating.current) return;
      if (Math.abs(e.deltaY) < 30) return;

      isAnimating.current = true;

      if (e.deltaY > 0) handleNext();
      else handlePrev();

      setTimeout(() => {
        isAnimating.current = false;
      }, 800);
    };

    window.addEventListener("wheel", onWheel);
    return () => window.removeEventListener("wheel", onWheel);
  }, [handleNext, handlePrev]);

  // --- GESTION DRAG & SWIPE ---
  const onStart = (clientY) => {
    dragStartY.current = clientY;
    isDragging.current = true;
  };

  const onEnd = (clientY) => {
    if (!isDragging.current || isAnimating.current) return;

    const minSwipeDistance = 50;
    const distance = dragStartY.current - clientY;

    if (Math.abs(distance) > minSwipeDistance) {
      isAnimating.current = true;
      if (distance > 0) handleNext();
      else handlePrev();

      setTimeout(() => {
        isAnimating.current = false;
      }, 800);
    }
    isDragging.current = false;
  };

  const onTouchStart = (e) => onStart(e.targetTouches[0].clientY);
  const onTouchEnd = (e) => onEnd(e.changedTouches[0].clientY);
  const onMouseDown = (e) => onStart(e.clientY);
  const onMouseUp = (e) => onEnd(e.clientY);

  return (
    <PageTransition>
      <div
        className="relative h-screen w-full bg-gray-900 overflow-hidden cursor-grab active:cursor-grabbing"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseLeave={() => (isDragging.current = false)}
      >
        {/* SCÈNE 3D */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <Canvas camera={{ position: [0, 0, 24], fov: 35 }}>
            <color attach="background" args={["#111827"]} />
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <spotLight position={[0, 10, 0]} intensity={0.5} />

            <Project3DViewer
              projects={displayedProjects}
              activeIndex={activeIndex}
            />
          </Canvas>
        </div>

        {/* UI LISTE (Desktop) */}
        <div className="hidden md:flex absolute inset-0 z-20 pointer-events-none flex-col justify-center">
          <div className="w-full h-full max-w-7xl mx-auto px-6 relative">
            <div className="absolute right-6 top-0 h-full w-auto flex flex-col justify-center pointer-events-auto">
              <div className="text-gray-600 font-mono text-xs mb-4 text-right">
                {String(activeIndex + 1).padStart(2, "0")} —{" "}
                {String(displayedProjects.length).padStart(2, "0")}
              </div>
              <div className="flex flex-col items-end space-y-1">
                {displayedProjects.map((project, index) => (
                  <button
                    key={project.id}
                    onClick={() => handleGoTo(index)}
                    className={`
                                    text-right text-lg font-medium transition-colors duration-300 block
                                    ${
                                      index === activeIndex
                                        ? "text-blue-400 scale-105 origin-right"
                                        : "text-gray-600 hover:text-gray-400"
                                    }
                                `}
                  >
                    {project.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* UI MOBILE */}
        <div className="absolute bottom-8 w-full flex flex-col items-center justify-center md:hidden z-30 pointer-events-none">
          <div className="text-blue-400 font-bold text-xl mb-4 text-center px-4">
            {displayedProjects[activeIndex]?.title}
          </div>

          <div className="flex gap-3 pointer-events-auto p-2">
            {displayedProjects.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  handleGoTo(index);
                }}
                className={`
                            w-3 h-3 rounded-full transition-all duration-300
                            ${
                              index === activeIndex
                                ? "bg-blue-500 scale-125 shadow-lg shadow-blue-500/50"
                                : "bg-gray-700 hover:bg-gray-500"
                            }
                        `}
                aria-label={`Aller au projet ${index + 1}`}
              />
            ))}
          </div>

          <div className="text-gray-700 text-[10px] mt-3 uppercase tracking-widest">
            Swipe ou Clique
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Projects;
