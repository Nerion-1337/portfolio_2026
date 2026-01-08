import React, { useRef } from "react";
import PageTransition from "../components/PageTransition";
import { personalInfo, timeline } from "../data/data";
import { User, Briefcase, GraduationCap } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion, useScroll } from "framer-motion";

const TimelineItem = ({ item }) => {
  const ref = useRef(null);

  return (
    <div ref={ref} className="relative pl-8 md:pl-12 group">
      {/* Le point sur la ligne */}
      <motion.div
        initial={{ backgroundColor: "#111827", borderColor: "#3b82f6" }}
        whileInView={{ backgroundColor: "#3b82f6" }}
        // Top large pour garder actif quand c'est au dessus, Bottom -45% pour trigger un peu plus bas que le milieu (55%)
        viewport={{ margin: "5000px 0px -45% 0px" }}
        transition={{ duration: 0.3 }}
        className="absolute -left-2.25 top-8 w-5 h-5 rounded-full border-2 z-10 shadow-[0_0_10px_rgba(59,130,246,0.3)]"
      />{" "}
      {/* Le contenu - Bloc séparé pour le backdrop-blur */}
      <motion.div
        initial={{
          backgroundColor: "rgba(255, 255, 255, 0)",
          backdropFilter: "blur(0px)",
        }}
        whileInView={{
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(12px)",
        }}
        whileHover={{
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(12px)",
        }}
        whileTap={{
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(12px)",
        }}
        viewport={{ margin: "5000px 0px -45% 0px" }}
        transition={{ duration: 0.3 }}
        className="rounded-2xl p-6 -my-4 cursor-pointer"
      >
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-4 gap-2">
          <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-blue-400 transition-colors">
            {item.title}
          </h3>
          <span className="text-base md:text-lg font-mono text-blue-400 bg-blue-400/10 px-3 py-1.5 rounded border border-blue-400/20 w-fit shrink-0">
            {item.year}
          </span>
        </div>

        <p className="text-gray-400 mt-2 text-lg md:text-xl leading-relaxed max-w-3xl">
          {item.description}
        </p>
      </motion.div>
    </div>
  );
};

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // On avance le point de trigger à 55% de la hauteur de viewport
    offset: ["start 55%", "end 55%"],
  });

  // Smooth progress removed per request to maximize control or because user didn't ask for smoothing which could cause delay.
  // Actually, I'm just binding scrollYProgress directly to scaleY

  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-[50vh] px-4 max-w-4xl mx-auto">
        {/* SECTION 1 : INTRODUCTION & BIO */}
        <div className="bg-gray-800/40 backdrop-blur-md rounded-3xl p-8 border border-gray-700/50 shadow-xl mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-blue-500/10 rounded-xl flex items-center justify-center">
              <img
                src="/images/ts-logo-blue.png"
                alt="Logo TS"
                className="w-8 h-8 object-contain"
              />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              À propos de moi
            </h1>
          </div>

          <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
            {personalInfo.bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* SECTION 2 : MON PARCOURS (TIMELINE) */}
        <div ref={containerRef} className="space-y-8 relative">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3 mb-8 px-2">
            <Briefcase className="text-blue-400" /> Mon Parcours
          </h2>

          <div className="relative ml-3 md:ml-6 space-y-24 pb-4">
            {/* Ligne Grise (Fond) */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-800" />

            {/* Ligne Bleue (Remplissage) */}
            <motion.div
              style={{ scaleY: scrollYProgress, originY: 0 }}
              className="absolute left-0 top-0 bottom-0 w-0.5 bg-blue-500"
            />

            {timeline.map((item, index) => (
              <TimelineItem key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default About;
