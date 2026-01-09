import { useRef } from "react";

/**
 * Hook personnalisé pour gérer les gestes de swipe (Touch & Mouse).
 *
 * @param {Object} options
 * @param {Function} [options.onSwipeLeft] - Callback pour swipe vers la gauche
 * @param {Function} [options.onSwipeRight] - Callback pour swipe vers la droite
 * @param {Function} [options.onSwipeUp] - Callback pour swipe vers le haut
 * @param {Function} [options.onSwipeDown] - Callback pour swipe vers le bas
 * @param {number} [options.threshold=50] - Distance min pour déclencher le swipe
 * @param {boolean} [options.preventDefault] - Empêcher le scroll par défaut (défaut: false)
 * @returns {Object} handlers - Les props à passer au container (onTouchStart, etc.)
 */
export const useSwipe = ({
  onSwipeLeft,
  onSwipeRight,
  onSwipeUp,
  onSwipeDown,
  threshold = 50,
  preventDefault = false,
}) => {
  const touchStartX = useRef(null);
  const touchStartY = useRef(null);
  const touchEndX = useRef(null);
  const touchEndY = useRef(null);

  // Pour la souris
  const isMouseDown = useRef(false);

  const minSwipeDistance = threshold;

  const onTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchStartY.current = e.targetTouches[0].clientY;
    touchEndX.current = null;
    touchEndY.current = null;
    isMouseDown.current = true; // Uniformiser état "actif"
  };

  const onTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
    touchEndY.current = e.targetTouches[0].clientY;

    if (preventDefault) {
      // Empêche le scroll seulement si on swipe horizontalement par exemple ?
      // Ici on bloque tout si demandé
      // e.preventDefault();
    }
  };

  const onTouchEnd = (e) => {
    if (
      !touchStartX.current ||
      !touchStartY.current ||
      !touchEndX.current ||
      !touchEndY.current
    )
      return;

    handleSwipe(e);
    reset();
  };

  // --- Mouse Handlers (pour simuler le swipe sur Desktop) ---
  const onMouseDown = (e) => {
    touchStartX.current = e.clientX;
    touchStartY.current = e.clientY;
    isMouseDown.current = true;
  };

  const onMouseMove = (e) => {
    if (!isMouseDown.current) return;
    touchEndX.current = e.clientX;
    touchEndY.current = e.clientY;

    // Si on voulait empêcher la sélection de texte durant le drag...
    if (preventDefault) e.preventDefault();
  };

  const onMouseUp = (e) => {
    if (!isMouseDown.current) return;
    // Si on a bougé
    if (touchEndX.current && touchEndY.current) {
      handleSwipe(e);
    }
    reset();
  };

  const onMouseLeave = () => {
    reset();
  };

  const reset = () => {
    touchStartX.current = null;
    touchStartY.current = null;
    touchEndX.current = null;
    touchEndY.current = null;
    isMouseDown.current = false;
  };

  const handleSwipe = (e) => {
    if (touchStartX.current === null || touchEndX.current === null) return;

    const distanceX = touchStartX.current - touchEndX.current;
    const distanceY = touchStartY.current - touchEndY.current;
    const isHorizontal = Math.abs(distanceX) > Math.abs(distanceY);

    // Détection Swipe Horizontal
    if (isHorizontal && Math.abs(distanceX) > minSwipeDistance) {
      // Pour éviter que le Layout détecte le swipe si le composant enfant l'a déjà fait
      if (e && e.stopPropagation) e.stopPropagation();

      if (distanceX > 0) {
        // Swipe Left (Vers la gauche <- ) | Doigt va de Droite à Gauche
        if (onSwipeLeft) onSwipeLeft();
      } else {
        // Swipe Right (Vers la droite -> ) | Doigt va de Gauche à Droite
        if (onSwipeRight) onSwipeRight();
      }
    }

    // Détection Swipe Vertical
    if (!isHorizontal && Math.abs(distanceY) > minSwipeDistance) {
      if (distanceY > 0) {
        // Swipe Up
        if (onSwipeUp) onSwipeUp();
      } else {
        // Swipe Down
        if (onSwipeDown) onSwipeDown();
      }
    }
  };

  return {
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    onMouseDown,
    onMouseMove,
    onMouseUp,
    onMouseLeave,
  };
};
