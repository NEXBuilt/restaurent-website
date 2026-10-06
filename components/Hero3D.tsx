"use client";
import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Scene() {
  const ring = useRef<THREE.Mesh>(null);
  const dust = useRef<THREE.Points>(null);
  const pts = useMemo(() => new Float32Array(Array.from({ length: 240 }, () => (Math.random() - 0.5) * 7)), []);
  useFrame(({ clock, pointer }) => {
    const t = clock.elapsedTime;
    if (ring.current) { ring.current.rotation.x = 1.1 + pointer.y * 0.25; ring.current.rotation.y = t * 0.15 + pointer.x * 0.3; ring.current.position.y = Math.sin(t * 0.8) * 0.15; }
    if (dust.current) dust.current.rotation.y = t * 0.05;
  });
  return (
    <>
      <ambientLight intensity={0.7} />
      <directionalLight position={[3, 4, 5]} intensity={2} color="#ffe2a8" />
      <mesh ref={ring} position={[1.8, 0, 0]}>
        <torusGeometry args={[1.3, 0.05, 16, 100]} />
        <meshStandardMaterial color="#B8964A" metalness={0.9} roughness={0.25} />
      </mesh>
      <points ref={dust}>
        <bufferGeometry><bufferAttribute attach="attributes-position" array={pts} count={80} itemSize={3} /></bufferGeometry>
        <pointsMaterial color="#d9b968" size={0.04} sizeAttenuation transparent opacity={0.8} />
      </points>
    </>
  );
}
export default function Hero3D() {
  return <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 5], fov: 45 }} gl={{ antialias: false, powerPreference: "low-power" }} aria-hidden><Scene /></Canvas>;
}
