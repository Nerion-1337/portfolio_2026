import React, { useState, useEffect, useRef, useCallback } from "react";
import { Canvas } from "@react-three/fiber";
import { projects as allProjects, projectDetails } from "../data/data";
import PageTransition from "../components/PageTransition";
import Project3DViewer from "../components/Project3DViewer";
import ProjectDetailModal from "../components/ProjectDetailModal";
import { TbHandFinger } from "react-icons/tb";
import { useSwipe } from "../hooks/useSwipe";

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Gestion Modale Détails
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [currentDetail, setCurrentDetail] = useState(null);
  const [detailTitle, setDetailTitle] = useState("");

  const isAnimating = useRef(false);

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

  if (displayedProjects.length > 0 && activeIndex >= displayedProjects.length) {
    setActiveIndex(displayedProjects.length - 1);
  }

  // --- 2. LOGIQUE DE NAVIGATION CIRCULAIRE (LOOP) ---

  const handleNext = useCallback(() => {
    // (Index Actuel + 1) modulo Longueur Totale
    setActiveIndex((prev) => (prev + 1) % displayedProjects.length);
  }, [displayedProjects.length]);

  const handlePrev = useCallback(() => {
    // (Index Actuel - 1 + Longueur) modulo Longueur
    setActiveIndex(
      (prev) => (prev - 1 + displayedProjects.length) % displayedProjects.length
    );
  }, [displayedProjects.length]);

  const handleGoTo = (index) => {
    if (!isAnimating.current && index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  // --- GESTION SWIPE (Via Hook) ---
  const {
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    onMouseDown,
    onMouseMove,
    onMouseUp,
    onMouseLeave,
  } = useSwipe({
    onSwipeLeft: handleNext,
    onSwipeRight: handlePrev,
    threshold: 50,
  });

  // --- GESTION OUVERTURE DETAILS ---
  const handleOpenDetail = (project) => {
    const detail = projectDetails.find((d) => d.title === project.title);
    if (detail) {
      setCurrentDetail(detail);
      setDetailTitle(project.title);
      setIsDetailOpen(true);
    }
  };
  const handleCloseDetail = () => {
    setIsDetailOpen(false);
    setTimeout(() => setCurrentDetail(null), 300); // Wait for animation
  };

  // --- GESTION SCROLL SOURIS ---
  useEffect(() => {
    const onWheel = (e) => {
      // Si la modale est ouverte, on ne change pas de projet au scroll
      if (isDetailOpen) return;

      if (isAnimating.current) return;
      if (Math.abs(e.deltaY) < 30) return;

      isAnimating.current = true;

      if (e.deltaY > 0) handleNext();
      else handlePrev();

      setTimeout(() => {
        isAnimating.current = false;
      }, 400);
    };

    window.addEventListener("wheel", onWheel);
    return () => window.removeEventListener("wheel", onWheel);
  }, [handleNext, handlePrev, isDetailOpen]);

  return (
    <PageTransition>
      <div className="relative h-screen w-full bg-transparent overflow-hidden">
        {/* SCÈNE 3D */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <Canvas camera={{ position: [0, 0, 24], fov: 35 }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} />
            <spotLight position={[0, 10, 0]} intensity={0.5} />

            <Project3DViewer
              projects={displayedProjects}
              activeIndex={activeIndex}
              onDragStart={(e) => {
                e.stopPropagation();
                if (e.touches) onTouchStart(e);
                else onMouseDown(e);
              }}
              onDragMove={(e) => {
                e.stopPropagation();
                if (e.touches) onTouchMove(e);
                else onMouseMove(e);
              }}
              onDragEnd={(e) => {
                e.stopPropagation();
                if (e.changedTouches) onTouchEnd(e);
                else onMouseUp(e);
              }}
              onDragLeave={(e) => {
                e.stopPropagation();
                onMouseLeave(e);
              }}
              onOpenDetail={handleOpenDetail}
            />
          </Canvas>
        </div>

        <ProjectDetailModal
          isOpen={isDetailOpen}
          onClose={handleCloseDetail}
          detail={currentDetail}
          projectTitle={detailTitle}
        />

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
            {/* Indication Scroll Desktop */}
            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-60 animate-float">
              <div className="w-7 h-11 border-2 border-gray-500 rounded-full flex justify-center pt-2 box-border">
                <div className="w-1 h-2 bg-blue-400 rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* UI MOBILE */}
        <div className="absolute bottom-8 w-full flex flex-col items-center justify-center md:hidden z-30 pointer-events-none">
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

          {/* Indication Swipe Mobile - Main animée */}
          <div className="mt-4 opacity-70">
            <div className="relative w-8 h-8 animate-swipe">
              <TbHandFinger className="w-8 h-8 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Projects;
