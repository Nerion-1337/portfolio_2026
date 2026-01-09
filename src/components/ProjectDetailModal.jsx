import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import DOMPurify from "dompurify"; // Assurez-vous d'installer dompurify: npm install dompurify

// Helper pour extraire l'ID Youtube
const getYoutubeId = (url) => {
  if (!url || typeof url !== "string") return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
};

// Helper pour envoyer des commandes à l'iframe YouTube
const sendPlayerCommand = (iframeWindow, command, args = []) => {
  if (iframeWindow) {
    iframeWindow.postMessage(
      JSON.stringify({
        event: "command",
        func: command,
        args: args,
      }),
      "*"
    );
  }
};

// Composant Helper pour le Header (Bannière, Vidéo ou Carousel)
const ModalHeader = ({ headerData, onZoom }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Nouveaux états localisés pour l'expansion vidéo
  const [isExpanded, setIsExpanded] = useState(false);
  const iframeRef = React.useRef(null);

  useEffect(() => {
    // Si la modal se ferme ou change, on reset
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsExpanded(false);
  }, [headerData]);

  // UseEffect doit être appelé avant tout return conditionnel
  useEffect(() => {
    if (
      !isPaused &&
      headerData &&
      Array.isArray(headerData) &&
      headerData.length > 1
    ) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % headerData.length);
      }, 4000);
      return () => clearInterval(timer);
    }
  }, [isPaused, headerData]);

  // Cas: Pas de header
  if (!headerData) return null;

  // Cas: Array d'images (Carousel)
  if (Array.isArray(headerData)) {
    if (headerData.length === 0) return null;

    const nextSlide = () =>
      setCurrentIndex((prev) => (prev + 1) % headerData.length);
    const prevSlide = () =>
      setCurrentIndex(
        (prev) => (prev - 1 + headerData.length) % headerData.length
      );

    return (
      <div
        className="relative w-full h-64 md:h-80 bg-black overflow-hidden group cursor-zoom-in"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onClick={() => onZoom(headerData[currentIndex])}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={headerData[currentIndex]}
            alt={`Slide ${currentIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>

        {headerData.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevSlide();
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextSlide();
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full text-white hover:bg-black/70 transition-colors opacity-0 group-hover:opacity-100"
            >
              <ChevronRight size={24} />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {headerData.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-2 h-2 rounded-full ${
                    idx === currentIndex ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    );
  }

  // Cas: String (Vidéo ou Image unique)
  const isVideo =
    typeof headerData === "string" &&
    (headerData.endsWith(".mp4") || headerData.endsWith(".webm"));
  const youtubeId = getYoutubeId(headerData);

  // Gestion du clic sur la vidéo YouTube
  const handleVideoClick = (e) => {
    if (youtubeId) {
      e.stopPropagation();
      const newExpandedState = !isExpanded;
      setIsExpanded(newExpandedState);

      const iframe = iframeRef.current;
      if (iframe) {
        if (newExpandedState) {
          // Activer le son et monter le volume
          sendPlayerCommand(iframe.contentWindow, "unMute");
          sendPlayerCommand(iframe.contentWindow, "setVolume", [100]);
        } else {
          // Couper le son
          sendPlayerCommand(iframe.contentWindow, "mute");
        }
      }
    } else {
      onZoom(headerData);
    }
  };

  return (
    <div
      className={`w-full bg-black overflow-hidden group cursor-zoom-in transition-all duration-300 ${
        isExpanded ? "fixed inset-0 z-50 h-screen" : "relative h-64 md:h-80"
      }`}
      onClick={() => {
        // Si c'est expand, on veut pouvoir cliquer n'importe où pour fermer ?
        // Ou juste le bouton close. Ici on garde le comportement zoom si pas youtube
        if (!youtubeId) onZoom(headerData);
      }}
    >
      {youtubeId ? (
        <>
          <div
            className="w-full h-full relative"
            onClick={handleVideoClick} // Le clic sur le container active/désactive
          >
            <iframe
              ref={iframeRef}
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&mute=1&loop=1&playlist=${youtubeId}&controls=1&showinfo=0&modestbranding=1&enablejsapi=1`}
              className={`w-full h-full object-cover transition-all duration-500 ${
                isExpanded
                  ? "pointer-events-auto"
                  : "pointer-events-none scale-150"
              }`}
              allow="autoplay; encrypted-media"
              title="Header Video"
            />

            {/* Overlay transparent pour capturer le clic quand non-étendu (à cause du pointer-events-none sur l'iframe) */}
            {!isExpanded && (
              <div className="absolute inset-0 bg-transparent z-10" />
            )}

            {/* Bouton fermer spécifique au mode étendu */}
            {isExpanded && (
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Évite de re-déclencher le toggle du container
                  handleVideoClick(e);
                }}
                className="absolute top-8 right-8 z-60 p-4 bg-blue-400 hover:bg-blue-500 rounded-full text-white transition-colors shadow-lg shadow-blue-500/50 cursor-pointer group"
              >
                <motion.div
                  whileHover={{ scale: 1.4 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <X size={36} />
                </motion.div>
              </button>
            )}
          </div>
        </>
      ) : isVideo ? (
        <video
          src={headerData}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />
      ) : (
        <img
          src={headerData}
          alt="Header Projet"
          className="w-full h-full object-cover"
        />
      )}
      {/* Gradient overlay pour fondre avec le contenu si désiré */}
      {!isExpanded && (
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-gray-900 to-transparent pointer-events-none z-20"></div>
      )}
    </div>
  );
};

// Composant pour l'agrandissement d'image ou vidéo
const ImageZoomModal = ({ src, isOpen, onClose }) => {
  if (!isOpen) return null;

  const isVideo =
    typeof src === "string" && (src.endsWith(".mp4") || src.endsWith(".webm"));
  const youtubeId = getYoutubeId(src);

  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-150 bg-black/95 flex items-center justify-center p-4 cursor-zoom-out"
      onClick={onClose}
    >
      {youtubeId ? (
        <div className="w-full max-w-5xl aspect-video bg-black rounded-lg overflow-hidden shadow-2xl">
          <iframe
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
            className="w-full h-full"
            allow="autoplay; encrypted-media; fullscreen"
            allowFullScreen
            title="Zoom Video"
          />
        </div>
      ) : isVideo ? (
        <motion.video
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          src={src}
          className="max-w-full max-h-full object-contain"
          controls
          autoPlay
          onClick={(e) => e.stopPropagation()}
        />
      ) : (
        <motion.img
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          src={src}
          alt="Zoom"
          className="max-w-full max-h-full object-contain cursor-zoom-out"
          onClick={onClose}
        />
      )}
    </motion.div>,
    document.body
  );
};

// Refonte du rendu de contenu pour gérer le wrapping correct et HTML sécurisé
const ContentRenderer = ({ content, onZoom }) => {
  const elements = [];

  for (let i = 0; i < content.length; i++) {
    const item = content[i];

    if (item.type === "image") {
      // Est-ce que le PROCHAIN est du texte ?
      const nextItem = content[i + 1];
      if (nextItem && nextItem.type === "text") {
        // OUI : On utilise float pour wrapper
        const floatClass =
          item.position === "left"
            ? "float-left mr-6 mb-2"
            : "float-right ml-6 mb-2";

        // Nettoyage du HTML pour prévenir les injections
        const sanitizedContent = DOMPurify.sanitize(nextItem.content);

        elements.push(
          <div key={`group-${i}`} className="mb-0 overflow-hidden">
            <div
              className={`${floatClass} w-full md:w-5/12 lg:w-1/3 cursor-zoom-in`}
              onClick={() => onZoom(item.src)}
            >
              <img
                src={item.src}
                alt={item.caption || "Detail"}
                className="rounded-lg shadow-lg border border-gray-700 w-full h-auto object-cover hover:opacity-90 transition-opacity"
              />
              {item.caption && (
                <p className="text-center text-xs text-gray-500 mt-2 italic">
                  {item.caption}
                </p>
              )}
            </div>
            {/* Rendu HTML sécurisé */}
            <div
              className="text-gray-300 text-lg leading-relaxed text-justify mb-8"
              dangerouslySetInnerHTML={{ __html: sanitizedContent }}
            />
          </div>
        );
        i++; // On saute le prochain item texte car il est inclus ici
      } else {
        // NON : Image seule
        elements.push(
          <div key={i} className="mb-8 flex justify-center">
            <div
              className="w-full md:w-2/3 cursor-zoom-in"
              onClick={() => onZoom(item.src)}
            >
              <img
                src={item.src}
                alt={item.caption}
                className="rounded-xl shadow-lg border border-gray-700 w-full"
              />
            </div>
          </div>
        );
      }
    } else if (item.type === "text") {
      // Texte seul (sans image avant)
      // Nettoyage du HTML
      const sanitizedContent = DOMPurify.sanitize(item.content);

      elements.push(
        <div
          key={i}
          className="text-gray-300 text-lg leading-relaxed mb-8 text-justify"
          dangerouslySetInnerHTML={{ __html: sanitizedContent }}
        />
      );
    } else if (item.type === "title" || item.title) {
      // Titre de section mis en valeur (décalé + style distinct)
      // On sanitize aussi le titre par précaution
      const sanitizedTitle = DOMPurify.sanitize(item.title || item.content);

      elements.push(
        <h3
          key={i}
          className="text-2xl font-bold text-white mt-8 mb-6 pl-6 border-l-4 border-blue-500"
          dangerouslySetInnerHTML={{ __html: sanitizedTitle }}
        />
      );
    }
  }

  return <div className="p-6 md:p-10">{elements}</div>;
};

const ProjectDetailModal = ({ isOpen, onClose, detail }) => {
  const [zoomImg, setZoomImg] = useState(null);

  // Empêcher le scroll du body quand la modale est ouverte
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // On utilise createPortal pour rendre la modale au niveau du body
  return createPortal(
    <>
      <AnimatePresence>
        {isOpen && detail && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-0 sm:p-4">
            {/* Backdrop Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-5xl h-full sm:h-[90vh] bg-gray-900 border border-t-0 sm:border-t sm:border-gray-700 sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Bouton de fermeture flottant */}
              <div className="absolute top-4 right-4 z-20">
                <button
                  onClick={onClose}
                  className="p-2 bg-black/50 backdrop-blur rounded-full text-white cursor-pointer hover:bg-black/80 transition-colors group"
                >
                  <motion.div
                    whileHover={{ scale: 1.4 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <X size={28} />
                  </motion.div>
                </button>
              </div>

              {/* Scrollable Body - Hide Scrollbar */}
              <div className="overflow-y-auto w-full h-full scrollbar-none relative">
                <style>{`
                    .scrollbar-none::-webkit-scrollbar {
                        display: none;
                    }
                    .scrollbar-none {
                        -ms-overflow-style: none; /* IE and Edge */
                        scrollbar-width: none; /* Firefox */
                    }
                `}</style>

                {/* Header (Bannière / Carousel) */}
                <ModalHeader headerData={detail.header} onZoom={setZoomImg} />

                {/* Content Layout */}
                <ContentRenderer content={detail.contenu} onZoom={setZoomImg} />

                <div className="h-10"></div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {zoomImg && (
          <ImageZoomModal
            src={zoomImg}
            isOpen={true}
            onClose={() => setZoomImg(null)}
          />
        )}
      </AnimatePresence>
    </>,
    document.body
  );
};

export default ProjectDetailModal;
