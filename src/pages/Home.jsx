import React from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { personalInfo } from "../data/data";
import PageTransition from "../components/PageTransition";
// useCanvasContext retiré car géré dans Layout

const Home = () => {
  return (
    <PageTransition>
      <section className="relative h-screen w-full bg-transparent overflow-hidden flex items-center justify-center">
        {/* --- 1. PORTFOLIO (Tout en haut) --- */}
        {/* top-[25%] sur mobile pour rapprocher du centre, md:top-[20%] sur desktop */}
        <div className="absolute top-[25%] md:top-[20%] z-20 pointer-events-none w-full text-center">
          <h2 className="text-gray-400 text-sm md:text-xl font-light tracking-[0.8em] uppercase drop-shadow-md">
            Portfolio
          </h2>
        </div>

        {/* --- 2. FULLSTACK (Retiré ici, géré dans Layout) --- */}

        {/* --- 3. DEVELOPER (Au milieu, Premier plan) --- */}
        {/* Centré pile par dessus Fullstack */}
        <div className="absolute z-20 pointer-events-none flex items-center justify-center w-full">
          <h3 className="text-white font-bold tracking-[0.3em] uppercase drop-shadow-xl text-[6vw] md:text-[4vw]">
            Developer
          </h3>
        </div>

        {/* --- 4. LA 3D (Gérée au niveau Layout) --- */}
        {/* Le Canvas3D est désormais dans Layout.jsx avec z-10 */}

        {/* --- 5. BOUTONS (Tout en bas) --- */}
        {/* bottom-[20vh] sur mobile pour remonter vers le centre, md:bottom-[15vh] inchangé */}
        <div className="absolute bottom-[20vh] md:bottom-[15vh] z-30 flex gap-4 md:gap-6 pointer-events-auto">
          {[
            {
              icon: Github,
              href: personalInfo.socials.github,
              color: "hover:bg-[#6e5494] hover:border-[#6e5494]",
            },
            {
              icon: Linkedin,
              href: personalInfo.socials.linkedin,
              color: "hover:bg-[#0077b5] hover:border-[#0077b5]",
            },
            {
              icon: Mail,
              href: personalInfo.socials.email,
              color: "hover:bg-[#ea4335] hover:border-[#ea4335]",
            },
            {
              icon: Phone,
              href: personalInfo.socials.phone,
              color: "hover:bg-[#34a853] hover:border-[#34a853]",
            },
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
                <social.icon
                  size={24}
                  className="md:w-7 md:h-7"
                  strokeWidth={1.5}
                />
              </div>
            </a>
          ))}
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;
