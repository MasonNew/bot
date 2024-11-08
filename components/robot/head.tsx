"use client";

import { useRef } from 'react';
import { Mesh } from 'three';

export function RobotHead({ mouseX, mouseY }) {
  const headRef = useRef<Mesh>(null);

  return (
    <group>
      {/* Head */}
      <mesh ref={headRef} position={[0, 2.5, 0]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial
          color="#8B5CF6"
          metalness={0.7}
          roughness={0.3}
          envMapIntensity={1}
        />
      </mesh>
      {/* Eyes */}
      <mesh position={[-0.5, 2.7, 1]}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial color="#00ff00" emissive="#00ff00" emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[0.5, 2.7, 1]}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial color="#00ff00" emissive="#00ff00" emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
}