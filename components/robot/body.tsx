"use client";

import { useRef } from 'react';
import { Mesh } from 'three';

export function RobotBody() {
  const bodyRef = useRef<Mesh>(null);

  return (
    <group>
      {/* Body */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3, 4, 2]} />
        <meshStandardMaterial
          color="#7C3AED"
          metalness={0.7}
          roughness={0.3}
          envMapIntensity={1}
        />
      </mesh>
      {/* Core Light */}
      <mesh position={[0, 0, 1.1]}>
        <circleGeometry args={[0.5, 32]} />
        <meshStandardMaterial
          color="#60A5FA"
          emissive="#60A5FA"
          emissiveIntensity={0.5}
        />
      </mesh>
    </group>
  );
}