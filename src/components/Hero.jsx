import React, { useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import { HERO_CONTENT } from "../constants/index.js";
import { motion } from "framer-motion";


// Texte 3D interactif avec effets
const InteractiveText3D = () => {
  const [hovered, setHovered] = useState(false);
  const textRef = useRef(); // Référence du texte 3D

  // Animation continue du texte 3D
  useFrame(() => {
    if (textRef.current) {
      textRef.current.rotation.y += 0.01; // Rotation continue sur l'axe Y
      textRef.current.position.x = Math.sin(textRef.current.rotation.y) * 2; // Déplacement sur l'axe X
    }
  });

  return (
    <mesh
      ref={textRef}
      onPointerOver={() => setHovered(true)} // Détecte le survol
      onPointerOut={() => setHovered(false)} // Détecte lorsque la souris quitte
    >
      <Text
        fontSize={1} // Taille du texte
        color={hovered ? "#b01a00" : "#6363ee"} // Change la couleur en fonction du survol
        anchorX="center" // Centrer horizontalement
        anchorY="middle" // Centrer verticalement
        rotation={[0, 0, 0]} // Rotation initiale
      >
        Aroun Gnanavelan
      </Text>
    </mesh>
  );
};

// Animation du container
const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-600 pb-16">
      <div className="flex flex-col lg:flex-row">
        {/* Colonne texte 3D */}
        <div className="w-full p-4 mb-8 lg:mb-0">
          <div className="flex justify-center">
            {/* Texte 3D interactif */}
            <Canvas style={{ height: "300px", width: "100%" }}>
              {/* Lumières */}
              <ambientLight intensity={0.5} />
              <directionalLight position={[10, 10, 5]} intensity={1} />

              {/* Texte 3D interactif */}
              <InteractiveText3D />
            

              {/* Contrôles de caméra pour interagir avec la souris */}
              <OrbitControls />
            </Canvas>
          </div>
        </div>

        {/* Colonne texte animé */}
        <div className="w-full flex flex-col items-center justify-center text-center mt-8 lg:mt-0 lg:w-1/2">
          <motion.span
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl lg:text-5xl font-bold tracking-tight text-transparent"
          >
            Full Stack Developer
          </motion.span>
          <motion.p
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="text-xl lg:text-2xl my-4 max-w-lg py-6 font-light tracking-tighter"
          >
            {HERO_CONTENT}
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
