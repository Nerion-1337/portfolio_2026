import React from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/data";
import PageTransition from "../components/PageTransition";

const Projects = () => {
  return (
    <PageTransition>
      <div className="min-h-screen pt-20 pb-10 px-4 max-w-7xl mx-auto">
        {/* En-tête de la page */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Mes Projets Récents
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Voici une sélection de mes travaux personnels et professionnels.
            Chaque projet est une opportunité d'apprendre une nouvelle
            technologie.
          </p>
        </div>

        {/* La Grille de Projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </PageTransition>
  );
};

export default Projects;
