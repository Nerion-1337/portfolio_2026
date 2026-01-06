import React from 'react';
import { Github, ExternalLink, Folder } from 'lucide-react';
import StackList from './StackList';

const ProjectCard = ({ project }) => {
  return (
    <div className="group relative bg-gray-800/40 backdrop-blur-md border border-gray-700/50 rounded-xl overflow-hidden hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col h-full">
      
      {/* --- Section Image --- */}
      <div className="h-48 w-full bg-gray-900 relative overflow-hidden">
        {project.image ? (
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" 
            />
        ) : (
            <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-gray-800 to-black">
                <Folder size={48} className="text-gray-600" />
            </div>
        )}
        
        {/* --- OVERLAY (Les boutons sont ici) --- */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-[2px]">
            
            {/* Bouton GitHub (si le lien existe) */}
            {project.links.github && (
              <a 
                href={project.links.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 rounded-full hover:bg-white hover:text-black text-white transition-all transform hover:scale-110 shadow-lg border border-gray-600 hover:border-white"
                title="Voir le code source"
              >
                <Github size={20} />
              </a>
            )}

            {/* Bouton Demo (si le lien existe) */}
            {project.links.demo && (
              <a 
                href={project.links.demo} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-blue-600 rounded-full hover:bg-blue-400 text-white transition-all transform hover:scale-110 shadow-lg shadow-blue-500/30"
                title="Voir le site en direct"
              >
                <ExternalLink size={20} />
              </a>
            )}

        </div>
      </div>

      {/* --- Section Contenu --- */}
      <div className="p-6 flex flex-col grow relative"> 
        {/* Ajout d'un padding-top pour éviter que les tooltips stack ne soient coupés par le haut */}
        
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        
        <div className="text-gray-400 text-sm mb-6 leading-relaxed grow">
          {project.description}
        </div>

        <div className="border-t border-gray-700/50 mb-4"></div>

        {/* --- Liste des Technos Animée --- */}
        <div className="mt-auto pt-2">
             <StackList stack={project.stack} id={project.id} />
        </div>

      </div>
    </div>
  );
};

export default ProjectCard;
