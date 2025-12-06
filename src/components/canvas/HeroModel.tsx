'use client';

import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh, Group } from 'three';

interface HeroModelProps {
  scale?: number;
}

export function HeroModel({ scale = 1 }: HeroModelProps) {
  const meshRef = useRef<Mesh>(null);
  const groupRef = useRef<Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += hovered ? 0.006 : 0.0015;
      meshRef.current.rotation.y += hovered ? 0.010 : 0.0025;
      meshRef.current.rotation.z += hovered ? 0.004 : 0.001;

      // Pulsing animation
      if (hovered) {
        const time = Date.now() * 0.0015;
        const pulse = 1 + Math.sin(time) * 0.12;
        meshRef.current.scale.set(pulse, pulse, pulse);
      } else {
        const time = Date.now() * 0.0008;
        const pulse = 1 + Math.sin(time) * 0.05;
        meshRef.current.scale.set(pulse, pulse, pulse);
      }
    }

    if (groupRef.current) {
      groupRef.current.rotation.z += 0.0003;
    }
  });

  return (
    <group ref={groupRef} scale={scale}>
      {/* Main icosahedron */}
      <mesh
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <icosahedronGeometry args={[1, 2]} />
        <meshPhongMaterial
          color={hovered ? '#8b5cf6' : '#3b82f6'}
          emissive={hovered ? '#7c3aed' : '#1e40af'}
          wireframe={false}
          shininess={120}
          flatShading={true}
        />
      </mesh>

      {/* Outer rotating ring */}
      <mesh rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[1.5, 0.1, 12, 48]} />
        <meshPhongMaterial
          color="#a855f7"
          emissive="#7c3aed"
          shininess={80}
          opacity={0.6}
          transparent
        />
      </mesh>

      {/* Secondary rotating ring */}
      <mesh rotation={[0, Math.PI / 3, 0]}>
        <torusGeometry args={[1.8, 0.08, 12, 48]} />
        <meshPhongMaterial
          color="#3b82f6"
          emissive="#1e40af"
          shininess={80}
          opacity={0.4}
          transparent
        />
      </mesh>

      {/* Orbiting particles */}
      {[0, 1, 2].map((i) => (
        <mesh key={i} position={[Math.cos((i * Math.PI * 2) / 3) * 2.5, 0, Math.sin((i * Math.PI * 2) / 3) * 2.5]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshPhongMaterial
            color={i === 0 ? '#3b82f6' : i === 1 ? '#8b5cf6' : '#06b6d4'}
            emissive={i === 0 ? '#1e40af' : i === 1 ? '#7c3aed' : '#0891b2'}
            shininess={100}
          />
        </mesh>
      ))}
    </group>
  );
}
