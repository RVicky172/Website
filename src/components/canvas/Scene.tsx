'use client';

import { ReactNode } from 'react';
import { Canvas } from '@react-three/fiber';

interface SceneProps {
  children: ReactNode;
  className?: string;
  dpr?: number;
}

export function Scene({ children, className = '', dpr = 1 }: SceneProps) {
  return (
    <Canvas
      className={className}
      dpr={dpr}
      camera={{ position: [0, 0, 3.5], fov: 50 }}
      gl={{ antialias: true, alpha: true, stencil: false, depth: true }}
    >
      {/* Ambient light for overall illumination */}
      <ambientLight intensity={0.8} color="#ffffff" />

      {/* Key light - blue tint */}
      <pointLight
        position={[12, 8, 12]}
        intensity={1.4}
        distance={120}
        color="#3b82f6"
      />

      {/* Fill light - purple tint */}
      <pointLight
        position={[-12, -8, 8]}
        intensity={1.0}
        distance={120}
        color="#8b5cf6"
      />

      {/* Back light - cyan glow */}
      <pointLight
        position={[0, 8, -15]}
        intensity={0.6}
        distance={120}
        color="#06b6d4"
      />

      {/* Side light accent */}
      <pointLight
        position={[15, 0, -8]}
        intensity={0.7}
        distance={100}
        color="#a855f7"
      />

      {children}
    </Canvas>
  );
}
