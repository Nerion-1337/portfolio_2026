import React, { useRef } from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import Canvas3D from "../components/Canvas3D";
import { personalInfo } from "../data/data";
import PageTransition from '../components/PageTransition';

const Home = () => {
  const titleRef = useRef(null);

  return (
    <PageTransition>
      <section className="relative h-screen w-full bg-gray-900 overflow-hidden flex items-center justify-center">
        
        {/* --- 1. PORTFOLIO (Tout en haut) --- */}
        <div className="absolute top-[15%] md:top-[20%] z-20 pointer-events-none w-full text-center">
            <h2 className="text-gray-400 text-sm md:text-xl font-light tracking-[0.8em] uppercase drop-shadow-md">
              Portfolio
            </h2>
        </div>

        {/* --- 2. FULLSTACK (Au milieu, Arrière-plan) --- */}
        {/* CORRECTION ICI : On retire max-w-7xl et on met w-full + text-center pour un centrage absolu */}
        <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
             <h1
                ref={titleRef}
                // J'ai mis w-full et text-center pour être sûr qu'il ne se décale jamais
                className="w-full text-center font-black text-[13vw] md:text-[11vw] leading-none transition-colors duration-100 ease-linear select-none opacity-50 whitespace-nowrap"
                style={{ color: "#ffffff" }}
              >
                FULLSTACK
              </h1>
        </div>

        {/* --- 3. DEVELOPER (Au milieu, Premier plan) --- */}
        {/* Centré pile par dessus Fullstack */}
        <div className="absolute z-20 pointer-events-none flex items-center justify-center w-full">
            <h3 className="text-white font-bold tracking-[0.3em] uppercase drop-shadow-xl text-[6vw] md:text-[4vw]">
              Developer
            </h3>
        </div>

        {/* --- 4. LA 3D (Entre les textes) --- */}
        <div className="absolute inset-0 z-10 opacity-80 cursor-move">
          <Canvas3D textRef={titleRef} />
        </div>

        {/* --- 5. BOUTONS (Tout en bas) --- */}
        <div className="absolute bottom-[10vh] md:bottom-[15vh] z-30 flex gap-4 md:gap-6 pointer-events-auto">
          {[
            { icon: Github, href: personalInfo.socials.github, color: "hover:bg-[#6e5494] hover:border-[#6e5494]" },
            { icon: Linkedin, href: personalInfo.socials.linkedin, color: "hover:bg-[#0077b5] hover:border-[#0077b5]" },
            { icon: Mail, href: personalInfo.socials.email, color: "hover:bg-[#ea4335] hover:border-[#ea4335]" },
            { icon: Phone, href: personalInfo.socials.phone, color: "hover:bg-[#34a853] hover:border-[#34a853]" },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                p-3 md:p-4 bg-gray-800/40 backdrop-blur-xl border border-white/10 rounded-2xl text-white 
                transition-all duration-300 ease-out group shadow-2xl
                hover:scale-110 hover:-translate-y-2 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]
                ${social.color}
              `}
            >
              <div className="transition-transform duration-300 group-hover:rotate-12">
                <social.icon size={24} className="md:w-7 md:h-7" strokeWidth={1.5} />
              </div>
            </a>
          ))}
        </div>

      </section>
    </PageTransition>
  );
};

export default Home;
