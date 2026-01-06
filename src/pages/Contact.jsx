import React, { useState } from "react";
// Ajout de l'icône Phone
import {
  Mail,
  MapPin,
  Send,
  Linkedin,
  Github,
  CheckCircle,
  AlertCircle,
  Phone,
} from "lucide-react";
import { personalInfo } from "../data/data";
import PageTransition from "../components/PageTransition";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus(null), 3000);
    }, 1500);
  };

  return (
    <PageTransition>
      <section className="min-h-screen pt-24 pb-12 px-4 max-w-7xl mx-auto flex flex-col justify-center">
        <div className="text-center mb-16">
          <h2 className="text-blue-400 font-semibold tracking-wider uppercase mb-2">
            Me Contacter
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Parlons de votre projet
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Je suis actuellement disponible pour des missions en freelance ou
            des opportunités en CDI.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* COLONNE GAUCHE : Infos */}
          <div className="space-y-6">
            {/* Email */}
            <div className="bg-gray-800/50 backdrop-blur-md p-6 rounded-2xl border border-gray-700/50 flex items-center gap-4 hover:border-blue-500/30 transition-colors">
              <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-white font-medium">Email</h3>
                <a
                  href={personalInfo.socials.email}
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm break-all"
                >
                  {personalInfo.socials.email.replace("mailto:", "")}
                </a>
              </div>
            </div>

            {/* Téléphone (NOUVEAU) */}
            <div className="bg-gray-800/50 backdrop-blur-md p-6 rounded-2xl border border-gray-700/50 flex items-center gap-4 hover:border-blue-500/30 transition-colors">
              <div className="p-3 bg-green-500/10 rounded-lg text-green-400">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-white font-medium">Téléphone</h3>
                <a
                  href={personalInfo.socials.phone}
                  className="text-gray-400 hover:text-green-400 transition-colors text-sm"
                >
                  07 70 39 00 83
                </a>
              </div>
            </div>

            {/* Localisation */}
            <div className="bg-gray-800/50 backdrop-blur-md p-6 rounded-2xl border border-gray-700/50 flex items-center gap-4 hover:border-blue-500/30 transition-colors">
              <div className="p-3 bg-purple-500/10 rounded-lg text-purple-400">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-white font-medium">Localisation</h3>
                <p className="text-gray-400 text-sm">Bordeaux, France</p>
              </div>
            </div>

            {/* Réseaux */}
            <div className="pt-6 border-t border-gray-800 flex gap-4">
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="relative p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl text-white transition-all duration-300 ease-out group hover:scale-110 hover:-translate-y-2 hover:shadow-[0_10px_20px_-5px_rgba(255,255,255,0.2)] hover:bg-[#6e5494] hover:border-[#6e5494]"
              >
                <div className="transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                  <Github size={24} strokeWidth={1.5} />
                </div>
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="relative p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl text-white transition-all duration-300 ease-out group hover:scale-110 hover:-translate-y-2 hover:shadow-[0_10px_20px_-5px_rgba(255,255,255,0.2)] hover:bg-[#0077b5] hover:border-[#0077b5]"
              >
                <div className="transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110">
                  <Linkedin size={24} strokeWidth={1.5} />
                </div>
              </a>
            </div>
          </div>

          {/* COLONNE DROITE : Formulaire (Inchangé mais inclus pour copie facile) */}
          <form
            onSubmit={handleSubmit}
            className="bg-gray-800/30 backdrop-blur-md p-8 rounded-3xl border border-gray-700/50 shadow-xl"
          >
            {/* ... (Le reste du formulaire reste identique à ce qu'on a fait avant) */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Votre Nom
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Votre Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none"
                  placeholder="Bonjour..."
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={status === "sending" || status === "success"}
                className={`group relative w-full py-4 rounded-lg font-bold text-white transition-all duration-300 transform flex items-center justify-center overflow-hidden cursor-pointer hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] ${
                  status === "success" ? "bg-green-600" : "bg-[#0077b5]"
                }`}
              >
                {/* Overlay d'animation */}
                <span
                  className={`absolute inset-0 w-full h-full bg-[#6e5494] transition-transform duration-300 ease-out origin-right scale-x-0 group-hover:origin-left group-hover:scale-x-100 ${
                    status === "success" ? "hidden" : ""
                  }`}
                />

                {/* Contenu */}
                <span className="relative flex items-center justify-center gap-2 transition-transform duration-300 group-hover:scale-105">
                  {status === "sending" ? (
                    "Envoi..."
                  ) : status === "success" ? (
                    <>
                      <CheckCircle size={20} /> Envoyé !
                    </>
                  ) : (
                    <>
                      <Send size={18} /> Envoyer
                    </>
                  )}
                </span>
              </button>
            </div>
          </form>
        </div>
      </section>
    </PageTransition>
  );
};

export default Contact;
