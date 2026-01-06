import React from "react";

// eslint-disable-next-line no-unused-vars
const TechIcon = ({ Icon, name }) => {
  return (
    <div className="group relative flex flex-col items-center">
      {/* Tooltip (Invisible par défaut, visible au hover) */}
      <span className="absolute -top-8 scale-0 transition-all rounded bg-gray-900 p-2 text-xs text-white group-hover:scale-100 z-10 whitespace-nowrap border border-gray-700">
        {name}
      </span>

      {/* L'icône */}
      <div className="p-2 rounded-lg bg-gray-800/50 border border-gray-700/50 transition-all duration-300 group-hover:scale-125 group-hover:bg-gray-700 group-hover:border-blue-500/50 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] cursor-pointer">
        {/* On rend le composant Icon passé en prop */}
        <Icon
          size={24}
          className="text-gray-400 group-hover:text-white transition-colors"
        />
      </div>
    </div>
  );
};

export default TechIcon;
