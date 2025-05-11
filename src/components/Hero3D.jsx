import React, { useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const COLOR = "#b6c800"; // Giallo fluo più scuro
const NEON = "#c7d900";  // Neon fluo più saturo e meno chiaro
const LAYERS = 24;
const HEIGHT = 1.2;

function LayeredCube() {
  const [visibleLayers, setVisibleLayers] = useState(1);
  const [elapsed, setElapsed] = useState(0);

  useFrame((state) => {
    setVisibleLayers((prev) => (prev < LAYERS ? prev + 0.01 : 1));
    setElapsed(state.clock.elapsedTime);
  });

  const layerHeight = HEIGHT / LAYERS;
  const layersToShow = Math.floor(visibleLayers);

  return (
    <group>
      {[...Array(layersToShow)].map((_, i) => {
        const phase = i * 0.35;
        // Lampeggio meno intenso e più scuro
        const emissiveIntensity =
          0.4 + Math.abs(Math.sin(elapsed * 1.5 + phase)) * 0.7;
        return (
          <mesh
            key={i}
            position={[
              0,
              -HEIGHT / 2 + layerHeight / 2 + i * layerHeight * 1.5,
              0,
            ]}
          >
            <boxGeometry args={[1, layerHeight * 0.95, 1]} />
            <meshStandardMaterial
              color={COLOR}
              emissive={NEON}
              emissiveIntensity={emissiveIntensity}
              metalness={0.4}
              roughness={0.15}
            />
          </mesh>
        );
      })}
    </group>
  );
}

import React, { useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const COLOR = "#b6c800"; // Giallo fluo più scuro
const NEON = "#c7d900";  // Neon fluo più saturo e meno chiaro
const LAYERS = 24;
const HEIGHT = 1.2;

function LayeredCube() {
  const [visibleLayers, setVisibleLayers] = useState(1);
  const [elapsed, setElapsed] = useState(0);

  useFrame((state) => {
    setVisibleLayers((prev) => (prev < LAYERS ? prev + 0.01 : 1));
    setElapsed(state.clock.elapsedTime);
  });

  const layerHeight = HEIGHT / LAYERS;
  const layersToShow = Math.floor(visibleLayers);

  return (
    <group>
      {[...Array(layersToShow)].map((_, i) => {
        const phase = i * 0.35;
        // Lampeggio meno intenso e più scuro
        const emissiveIntensity =
          0.4 + Math.abs(Math.sin(elapsed * 1.5 + phase)) * 0.7;
        return (
          <mesh
            key={i}
            position={[
              0,
              -HEIGHT / 2 + layerHeight / 2 + i * layerHeight * 1.5,
              0,
            ]}
          >
            <boxGeometry args={[1, layerHeight * 0.95, 1]} />
            <meshStandardMaterial
              color={COLOR}
              emissive={NEON}
              emissiveIntensity={emissiveIntensity}
              metalness={0.4}
              roughness={0.15}
            />
          </mesh>
        );
      })}
    </group>
  );
}

export default function Hero3D() {
  return (
    <Canvas camera={{ position: [0, 0.6, 3], fov: 50 }} style={{ width: "100%", height: 340 }}>
      <ambientLight intensity={0.12} /> {/* ancora meno luce per risaltare il neon */}
      <directionalLight position={[3, 2, 5]} intensity={0.5} />
      <LayeredCube />
      <OrbitControls enabled={false} />
    </Canvas>
  );
}
