import React from "react";
import { Github, ExternalLink } from "lucide-react";
import StackList from "./StackList";

const ProjectCard = ({
  project,
  onTouchStart,
  onTouchEnd,
  onMouseDown,
  onMouseUp,
}) => {
  // Image par défaut si aucune n'est fournie (placeholder gris foncé)
  const imageSrc =
    project.image ||
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop";

  return (
    <div
      className="group relative flex flex-col h-full bg-gray-900 rounded-xl overflow-hidden border border-gray-800 shadow-2xl transform-gpu subpixel-antialiased pointer-events-auto cursor-grab active:cursor-grabbing"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
    >
      {/* --- Image Cover --- */}
      <div className="relative h-48 overflow-hidden bg-gray-900 border-b border-gray-800">
        <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-transparent transition-colors duration-500 z-10" />

        {/* On affiche toujours l'image, soit la vraie, soit le placeholder */}
        <img
          src={imageSrc}
          alt={project.title}
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
          // Petit fix : si l'image ne charge pas (lien cassé), on remet une image vide ou couleur
          onError={(e) => {
            e.target.style.display = "none";
            e.target.parentNode.style.backgroundColor = "#1f2937";
          }}
        />

        {/* --- Liens Flottants --- */}
        <div className="absolute top-3 right-3 flex gap-2 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-white hover:text-black text-white transition-colors shadow-lg border border-gray-600 hover:border-white"
              title="Voir le code source"
            >
              <Github size={20} />
            </a>
          )}

          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-blue-600 rounded-full hover:bg-blue-400 text-white transition-colors shadow-lg shadow-blue-500/30"
              title="Voir le site en direct"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>

      {/* ... Le reste ne change pas ... */}
      <div className="p-6 flex flex-col grow relative">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <div className="text-gray-400 text-sm mb-6 leading-relaxed grow">
          {project.description}
        </div>
        <div className="border-t border-gray-700/50 mb-4"></div>
        <div className="mt-auto pt-2">
          <StackList stack={project.stack} id={project.id} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
