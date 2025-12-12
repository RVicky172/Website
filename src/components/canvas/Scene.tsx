'use client';

import { ReactNode, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';

interface SceneProps {
  children: ReactNode;
  className?: string;
  dpr?: number;
}

export function Scene({ children, className = '', dpr = 1.5 }: SceneProps) {
  return (
    <Canvas
      className={className}
      dpr={dpr}
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ antialias: true, alpha: true, stencil: false, depth: true }}
    >
      <Suspense fallback={null}>
        {/* Ambient light for soft overall illumination */}
        <ambientLight intensity={0.5} color="#ffffff" />

        {/* Key light - blue accent from top right */}
        <pointLight
          position={[10, 10, 10]}
          intensity={2}
          distance={50}
          color="#3b82f6"
        />

        {/* Fill light - purple from bottom left */}
        <pointLight
          position={[-10, -5, 5]}
          intensity={1.5}
          distance={50}
          color="#a855f7"
        />

        {/* Rim light - cyan from behind */}
        <pointLight
          position={[0, 5, -10]}
          intensity={1}
          distance={40}
          color="#22d3ee"
        />

        {/* Front fill light */}
        <pointLight
          position={[0, 0, 8]}
          intensity={0.8}
          distance={30}
          color="#ffffff"
        />

        {children}
      </Suspense>
    </Canvas>
  );
}
