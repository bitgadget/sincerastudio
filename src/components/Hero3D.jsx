import React, { useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const NEON = "#eaff00";
const SPEED = 0.12;
const PIXELS = 36; // quanti pixel (cubi)
const RADIUS = 2.2; // quanto sono dispersi all'inizio

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function Path2D({ progress, points }) {
  // Linea neon su piano 2D
  const curve = new THREE.CatmullRomCurve3(points.slice(0, Math.max(2, Math.floor(points.length * progress))));
  return (
    <mesh position={[-0.7, 0, 0]}>
      <tubeGeometry args={[curve, 64, 0.025, 8, false]} />
      <meshStandardMaterial color={NEON} emissive={NEON} emissiveIntensity={1.5} metalness={0.4} roughness={0.1} />
    </mesh>
  );
}

function Path3D({ progress, points }) {
  // Estrusione verticale della stessa linea
  const extrudeSettings = {
    steps: 32,
    depth: 0.6 * progress,
    bevelEnabled: false,
  };
  const shape = new THREE.Shape(points.map(p => new THREE.Vector2(p.x, p.y)));
  return (
    <mesh position={[0.7, 0, -0.3 * progress]}>
      <extrudeGeometry args={[shape, extrudeSettings]} />
      <meshStandardMaterial color="#222" emissive={NEON} emissiveIntensity={1.2} metalness={0.3} roughness={0.18} />
    </mesh>
  );
}

function PrintHeads({ progress, points }) {
  // Testina 2D e ugello 3D che seguono la linea
  const idx = Math.floor(points.length * progress);
  const point2D = points[idx] || points[points.length - 1];
  const point3D = point2D ? [point2D.x + 0.7, point2D.y, 0.6 * progress - 0.3 * progress] : [0.7, 0, 0];
  return (
    <>
      {/* Testina 2D */}
      {point2D && (
        <mesh position={[point2D.x - 0.7, point2D.y, 0.04]}>
          <sphereGeometry args={[0.04, 16, 16]} />
          <meshStandardMaterial color="#fff" emissive={NEON} emissiveIntensity={2} />
        </mesh>
      )}
      {/* Ugello 3D */}
      {point2D && (
        <mesh position={point3D}>
          <cylinderGeometry args={[0.035, 0.035, 0.09, 16]} />
          <meshStandardMaterial color="#888" metalness={0.7} roughness={0.3} />
        </mesh>
      )}
    </>
  );
}

function Animated2D3D() {
  const [progress, setProgress] = useState(0.01);
  // Definisci una forma semplice (es. S)
  const points = [];
  for (let t = 0; t <= 1; t += 0.025) {
    const angle = Math.PI * 2 * t;
    const x = Math.cos(angle) * 0.28 + Math.sin(angle * 2) * 0.12;
    const y = Math.sin(angle) * 0.28;
    points.push(new THREE.Vector3(x, y, 0));
  }

  useFrame((state, delta) => {
    setProgress((prev) => (prev < 1 ? prev + delta * SPEED : 0.01));
  });

  return (
    <group>
      {/* Piano 2D */}
      <mesh position={[-0.7, 0, -0.06]}>
        <planeGeometry args={[0.7, 0.7]} />
        <meshStandardMaterial color="#181818" roughness={0.8} metalness={0.1} />
      </mesh>
      {/* Piano 3D */}
      <mesh position={[0.7, 0, -0.36]}>
        <planeGeometry args={[0.7, 0.7]} />
        <meshStandardMaterial color="#181818" roughness={0.8} metalness={0.1} />
      </mesh>
      {/* Linea 2D */}
      <Path2D progress={progress} points={points} />
      {/* Estrusione 3D */}
      <Path3D progress={progress} points={points} />
      {/* Testine */}
      <PrintHeads progress={progress} points={points} />
    </group>
  );
}

function AssemblingBlocks() {
  const [progress, setProgress] = useState(0);
  const groupRef = useRef();

  useFrame((state, delta) => {
    setProgress((prev) => (prev < 1 ? prev + delta * 0.25 : 1));
    // Rotazione leggera per effetto tech
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.18;
    }
  });

  // Interpolazione per i movimenti dei blocchi
  const lerp = (a, b, t) => a + (b - a) * t;

  // Blocchi che si muovono verso il centro
  const block1Pos = [lerp(-1.2, 0, progress), 0.32, 0];
  const block2Pos = [lerp(1.2, 0, progress), -0.32, 0];
  const block3Pos = [0, lerp(1, 0, progress), 0];

  return (
    <group ref={groupRef}>
      {/* Blocchi */}
      <mesh position={block1Pos}>
        <boxGeometry args={[0.7, 0.22, 0.22]} />
        <meshStandardMaterial color="#222" emissive={NEON} emissiveIntensity={1.2} metalness={0.4} roughness={0.18} />
      </mesh>
      <mesh position={block2Pos}>
        <boxGeometry args={[0.7, 0.22, 0.22]} />
        <meshStandardMaterial color="#222" emissive={NEON} emissiveIntensity={1.2} metalness={0.4} roughness={0.18} />
      </mesh>
      <mesh position={block3Pos}>
        <boxGeometry args={[0.22, 0.7, 0.22]} />
        <meshStandardMaterial color="#222" emissive={NEON} emissiveIntensity={1.2} metalness={0.4} roughness={0.18} />
      </mesh>
    </group>
  );
}

function PixelCloud() {
  const [progress, setProgress] = useState(0);
  const groupRef = useRef();

  // Genera posizioni random iniziali per ogni pixel
  const startPositions = useMemo(
    () =>
      Array.from({ length: PIXELS }, () => [
        (Math.random() - 0.5) * RADIUS,
        (Math.random() - 0.5) * RADIUS * 0.5,
        (Math.random() - 0.5) * RADIUS,
      ]),
    []
  );

  // Posizioni finali: una griglia centrale
  const gridSize = Math.ceil(Math.sqrt(PIXELS));
  const pixelSpacing = 0.22;
  const endPositions = useMemo(
    () =>
      Array.from({ length: PIXELS }, (_, i) => [
        ((i % gridSize) - gridSize / 2 + 0.5) * pixelSpacing,
        ((Math.floor(i / gridSize)) - gridSize / 2 + 0.5) * pixelSpacing,
        0,
      ]),
    [gridSize]
  );

  useFrame((state, delta) => {
    setProgress((prev) => (prev < 1 ? prev + delta * 0.18 : 1));
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.18;
    }
  });

  return (
    <group ref={groupRef}>
      {startPositions.map((start, i) => {
        const end = endPositions[i];
        const t = Math.pow(progress, 1.7); // easing per effetto più naturale
        const pos = [
          lerp(start[0], end[0], t),
          lerp(start[1], end[1], t),
          lerp(start[2], end[2], t),
        ];
        return (
          <mesh key={i} position={pos}>
            <boxGeometry args={[0.14, 0.14, 0.14]} />
            <meshStandardMaterial
              color="#222"
              emissive={NEON}
              emissiveIntensity={1.5}
              metalness={0.4}
              roughness={0.18}
            />
          </mesh>
        );
      })}
    </group>
  );
}

export default function Hero3D() {
  return (
    <Canvas camera={{ position: [0, 0, 3.5], fov: 50 }} style={{ width: "100%", height: 320 }}>
      <ambientLight intensity={0.18} />
      <directionalLight position={[3, 2, 5]} intensity={0.5} />
      <PixelCloud />
    </Canvas>
  );
}
