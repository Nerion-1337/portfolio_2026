import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Icosahedron, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const ShinyRotatingObject = ({ textRef }) => {
  const meshRef = useRef(null);
  
  // Récupération des dimensions de l'écran
  const { viewport } = useThree();

  useFrame((state, delta) => {
    if (!meshRef.current) return;

    // Animation de rotation
    meshRef.current.rotation.y += delta * 0.5;
    meshRef.current.rotation.x += delta * 0.3;
    meshRef.current.rotation.z += delta * 0.1;

    // Changement de couleur du texte
    if (textRef && textRef.current) {
      const factor = (Math.sin(state.clock.elapsedTime) + 1) / 2;
      const colorCyan = new THREE.Color("#06b6d4");
      const colorViolet = new THREE.Color("#8b5cf6");
      const finalColor = colorCyan.clone().lerp(colorViolet, factor);
      textRef.current.style.color = `#${finalColor.getHexString()}`;
    }
  });

  // --- NOUVEAU CALCUL DE TAILLE ---
  const isMobile = viewport.width < 7;
  
  // Sur Mobile : On veut que le DIAMÈTRE fasse ~70% de la largeur (donc rayon/scale = 0.35)
  // Sur Desktop : On veut que le DIAMÈTRE fasse ~35% de la largeur (donc rayon/scale = 0.18)
  // On ajoute Math.min sur desktop pour éviter que ça devienne géant sur les écrans ultra-wide (limite à échelle 3.5)
  
  let responsiveScale;

  if (isMobile) {
    responsiveScale = viewport.width * 0.35;
  } else {
    responsiveScale = Math.min(viewport.width * 0.18, 3.5); 
  }

  return (
    <Icosahedron args={[1, 0]} ref={meshRef} scale={responsiveScale}>
      <MeshDistortMaterial
        color="#ffffff"
        emissive="#111"
        roughness={0.2}
        metalness={0.8}
        distort={0.3}
        speed={2}
      />
    </Icosahedron>
  );
};

const Canvas3D = ({ textRef }) => {
  return (
    <Canvas className="h-full w-full" camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.2} />
      <spotLight position={[-10, 5, 10]} angle={0.5} penumbra={1} intensity={200} color="#06b6d4" />
      <spotLight position={[10, -5, 10]} angle={0.5} penumbra={1} intensity={200} color="#8b5cf6" />
      <pointLight position={[-2, 2, 2]} intensity={50} color="white" />
      <ShinyRotatingObject textRef={textRef} />
    </Canvas>
  );
};

export default Canvas3D;