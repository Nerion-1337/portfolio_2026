import React from "react";
import { Github, ExternalLink, Info } from "lucide-react";
import DOMPurify from "dompurify";
import StackList from "./StackList";
import { projectDetails } from "../data/data";

const ProjectCard = ({
  project,
  onTouchStart,
  onTouchEnd,
  onMouseDown,
  onMouseUp,
  onOpenDetail,
}) => {
  // Image par défaut si aucune n'est fournie (placeholder gris foncé)
  const imageSrc =
    project.image ||
    "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop";

  // État pour afficher les liens au clic (utile pour mobile)
  const [showLinks, setShowLinks] = React.useState(false);

  // Vérifier si ce projet a des détails supplémentaires
  const hasDetail = projectDetails.some((d) => d.title === project.title);

  const handleCardClick = () => {
    // On bascule l'affichage des liens au clic
    setShowLinks((prev) => !prev);
  };

  const handleOpenDetail = (e) => {
    e.stopPropagation();
    if (onOpenDetail) onOpenDetail(project);
  };

  return (
    <div
      className="group relative flex flex-col h-full bg-gray-900 rounded-xl overflow-hidden border border-gray-800 shadow-2xl transform-gpu subpixel-antialiased pointer-events-auto cursor-grab active:cursor-grabbing"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onClick={handleCardClick}
    >
      {/* --- Image Cover --- */}
      <div className="relative h-48 overflow-hidden bg-gray-900 border-b border-gray-800">
        <div
          className={`absolute inset-0 bg-gray-900/20 group-hover:bg-transparent transition-colors duration-500 z-10 ${
            showLinks ? "bg-transparent" : ""
          }`}
        />

        {/* On affiche toujours l'image, soit la vraie, soit le placeholder */}
        <img
          src={imageSrc}
          alt={project.title}
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
          onError={(e) => {
            e.target.style.display = "none";
            e.target.parentNode.style.backgroundColor = "#1f2937";
          }}
        />

        {/* --- Liens Flottants --- */}
        <div
          className={`absolute top-3 right-3 flex gap-2 z-20 transition-all duration-300 ${
            showLinks
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"
          }`}
        >
          {hasDetail && (
            <button
              onClick={handleOpenDetail}
              onTouchEnd={handleOpenDetail}
              onMouseDown={(e) => e.stopPropagation()}
              className="p-3 bg-purple-600 rounded-full hover:bg-purple-500 text-white transition-colors shadow-lg shadow-purple-500/30 pointer-events-auto"
              title="Voir plus de détails"
            >
              <Info size={20} />
            </button>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-800 rounded-full hover:bg-white hover:text-black text-white transition-colors shadow-lg border border-gray-600 hover:border-white pointer-events-auto"
              title="Voir le code source"
              onClick={(e) => e.stopPropagation()}
              onTouchEnd={(e) => e.stopPropagation()}
              onMouseDown={(e) => e.stopPropagation()}
            >
              <Github size={20} />
            </a>
          )}

          {project.links.demo && (
            <a
              href={project.links.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-blue-600 rounded-full hover:bg-blue-400 text-white transition-colors shadow-lg shadow-blue-500/30 pointer-events-auto"
              title="Voir le site en direct"
              onClick={(e) => e.stopPropagation()}
              onTouchEnd={(e) => e.stopPropagation()}
              onMouseDown={(e) => e.stopPropagation()}
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
        <div
          className="text-gray-400 text-sm mb-6 leading-relaxed grow"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(project.description),
          }}
        />
        <div className="border-t border-gray-700/50 mb-4"></div>
        <div className="mt-auto pt-1">
          <StackList stack={project.stack} id={project.id} />
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
