import React, { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import ProjectCard from "./ProjectCard";

const ProjectItem = ({
  project,
  index,
  activeIndex,
  totalCount,
  onDragStart,
  onDragEnd,
}) => {
  const groupRef = useRef();
  const { size } = useThree();
  const isMobile = size.width < 768;

  useFrame((state, delta) => {
    const xOffset = isMobile ? 18 : 25;

    // --- NOUVELLE LOGIQUE CIRCULAIRE ---

    // 1. Calcul de la différence brute
    let relativePosition = index - activeIndex;

    // 2. Ajustement pour la boucle (Wrap around)
    // Si la différence est trop grande (ex: on compare le premier et le dernier),
    // on inverse le signe pour dire qu'ils sont voisins de l'autre côté.
    if (relativePosition > totalCount / 2) {
      relativePosition -= totalCount;
    } else if (relativePosition < -totalCount / 2) {
      relativePosition += totalCount;
    }

    // 3. Définition des cibles selon la position relative corrigée
    let targetX = xOffset; // Par défaut à Droite (Futur)
    let targetZ = -5;
    let targetRotY = -0.3;

    if (relativePosition === 0) {
      // ACTIF
      targetX = 0;
      targetZ = 0;
      targetRotY = 0;
    } else if (relativePosition < 0) {
      // PASSÉ (Gauche)
      // Même si index est 9 et activeIndex est 0, relativePosition sera -1
      targetX = -xOffset;
      targetZ = -5;
      targetRotY = 0.3;
    } else {
      // FUTUR (Droite)
      // Même si index est 0 et activeIndex est 9, relativePosition sera +1
      targetX = xOffset;
      targetZ = -5;
      targetRotY = -0.3;
    }

    // Animation fluide
    groupRef.current.position.x = THREE.MathUtils.damp(
      groupRef.current.position.x,
      targetX,
      4,
      delta
    );
    groupRef.current.position.z = THREE.MathUtils.damp(
      groupRef.current.position.z,
      targetZ,
      4,
      delta
    );
    groupRef.current.rotation.y = THREE.MathUtils.damp(
      groupRef.current.rotation.y,
      targetRotY,
      4,
      delta
    );
  });

  const isActive = index === activeIndex;

  return (
    <group ref={groupRef}>
      <Html
        transform
        occlude="blending"
        zIndexRange={[100, 0]}
        scale={isMobile ? 0.75 : 1}
        style={{
          transition: "opacity 0.4s ease-out",
          opacity: isActive ? 1 : 0,
          pointerEvents: isActive ? "auto" : "none",
        }}
      >
        <div className="w-[90vw] md:w-125 rounded-xl overflow-hidden shadow-2xl shadow-black/80 bg-gray-900 border border-gray-700/50">
          <ProjectCard
            project={project}
            onTouchStart={onDragStart}
            onTouchEnd={onDragEnd}
            onMouseDown={onDragStart}
            onMouseUp={onDragEnd}
          />
        </div>
      </Html>
    </group>
  );
};

const Project3DViewer = ({ projects, activeIndex, onDragStart, onDragEnd }) => {
  return (
    <group position={[0, 0, 0]}>
      {projects.map((project, index) => (
        <ProjectItem
          key={project.id}
          project={project}
          index={index}
          activeIndex={activeIndex}
          totalCount={projects.length} // On passe le nombre total indispensable pour le calcul
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
        />
      ))}
    </group>
  );
};

export default Project3DViewer;
