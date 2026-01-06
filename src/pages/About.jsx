import React from 'react';
import PageTransition from '../components/PageTransition';
import { personalInfo, timeline } from '../data/data';
import { User, Briefcase, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-12 px-4 max-w-4xl mx-auto">
        
        {/* SECTION 1 : INTRODUCTION & BIO */}
        <div className="bg-gray-800/40 backdrop-blur-md rounded-3xl p-8 border border-gray-700/50 shadow-xl mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-blue-500/10 rounded-xl text-blue-400">
              <User size={32} />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">À propos de moi</h1>
          </div>
          
          <div className="space-y-4 text-gray-300 leading-relaxed text-lg">
            {personalInfo.bio.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        {/* SECTION 2 : MON PARCOURS (TIMELINE) */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3 mb-8 px-2">
            <Briefcase className="text-blue-400" /> Mon Parcours
          </h2>

          <div className="relative border-l-2 border-gray-800 ml-3 md:ml-6 space-y-12 pb-4">
            {timeline.map((item, index) => (
              <div key={index} className="relative pl-8 md:pl-12 group">
                
                {/* Le point sur la ligne */}
                <div className="absolute -left-2.25 top-0 w-5 h-5 rounded-full bg-gray-900 border-2 border-blue-500 group-hover:bg-blue-500 group-hover:scale-125 transition-all duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                
                {/* Le contenu */}
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-sm font-mono text-blue-400 bg-blue-400/10 px-2 py-1 rounded border border-blue-400/20 mt-2 sm:mt-0 w-fit">
                    {item.year}
                  </span>
                </div>
                
                <p className="text-gray-400 mt-2 max-w-2xl">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </PageTransition>
  );
};

export default About;