'use client';

import { useRef, useState, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh, Group } from 'three';
import * as THREE from 'three';

interface HeroModelProps {
  scale?: number;
}

// Floating particles around the main shape
function FloatingParticles({ count = 50 }: { count?: number }) {
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 2 + Math.random() * 2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      arr[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = radius * Math.cos(phi);
    }
    return arr;
  }, [count]);

  const colors = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const colorChoice = Math.random();
      if (colorChoice < 0.33) {
        arr[i * 3] = 0.231; arr[i * 3 + 1] = 0.510; arr[i * 3 + 2] = 0.965;
      } else if (colorChoice < 0.66) {
        arr[i * 3] = 0.659; arr[i * 3 + 1] = 0.333; arr[i * 3 + 2] = 0.969;
      } else {
        arr[i * 3] = 0.133; arr[i * 3 + 1] = 0.827; arr[i * 3 + 2] = 0.918;
      }
    }
    return arr;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.05;
      pointsRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.03) * 0.1;
    }
  });

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    return geo;
  }, [positions, colors]);

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        size={0.08}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Glowing orb core
function GlowingCore({ hovered }: { hovered: boolean }) {
  const meshRef = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const time = clock.getElapsedTime();
      const pulse = 1 + Math.sin(time * 2) * (hovered ? 0.15 : 0.08);
      meshRef.current.scale.set(pulse, pulse, pulse);
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[0.6, 64, 64]} />
      <meshStandardMaterial
        color={hovered ? '#a855f7' : '#3b82f6'}
        emissive={hovered ? '#7c3aed' : '#1e40af'}
        emissiveIntensity={hovered ? 2 : 1.2}
        metalness={0.3}
        roughness={0.2}
      />
    </mesh>
  );
}

// Orbital ring
function OrbitalRing({
  radius,
  rotation,
  color,
  speed = 1,
  opacity = 0.6
}: {
  radius: number;
  rotation: [number, number, number];
  color: string;
  speed?: number;
  opacity?: number;
}) {
  const meshRef = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.z = clock.getElapsedTime() * speed;
    }
  });

  return (
    <mesh ref={meshRef} rotation={rotation}>
      <torusGeometry args={[radius, 0.02, 16, 100]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        transparent
        opacity={opacity}
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  );
}

// Orbiting node
function OrbitingNode({
  orbitRadius,
  speed,
  size,
  color,
  offset = 0
}: {
  orbitRadius: number;
  speed: number;
  size: number;
  color: string;
  offset?: number;
}) {
  const meshRef = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (meshRef.current) {
      const time = clock.getElapsedTime() * speed + offset;
      const x = Math.cos(time) * orbitRadius;
      const z = Math.sin(time) * orbitRadius;
      const y = Math.sin(time * 0.5) * 0.3;

      meshRef.current.position.set(x, y, z);

      // Pulsing effect
      const pulse = 1 + Math.sin(time * 3) * 0.2;
      meshRef.current.scale.set(pulse, pulse, pulse);
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[size, 16, 16]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={1.5}
        metalness={0.5}
        roughness={0.3}
      />
    </mesh>
  );
}

export function HeroModel({ scale = 1 }: HeroModelProps) {
  const groupRef = useRef<Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame(({ clock }) => {
    if (groupRef.current) {
      // Gentle floating motion
      groupRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.5) * 0.2;
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <group
      ref={groupRef}
      scale={scale}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      {/* Central glowing core */}
      <GlowingCore hovered={hovered} />

      {/* Inner glow sphere */}
      <mesh>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial
          color="#3b82f6"
          transparent
          opacity={0.1}
          emissive="#3b82f6"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Orbital rings */}
      <OrbitalRing
        radius={1.2}
        rotation={[Math.PI / 2, 0, 0]}
        color="#3b82f6"
        speed={0.3}
        opacity={0.7}
      />
      <OrbitalRing
        radius={1.5}
        rotation={[Math.PI / 3, Math.PI / 4, 0]}
        color="#a855f7"
        speed={-0.2}
        opacity={0.5}
      />
      <OrbitalRing
        radius={1.8}
        rotation={[-Math.PI / 4, Math.PI / 3, 0]}
        color="#22d3ee"
        speed={0.15}
        opacity={0.4}
      />

      {/* Orbiting nodes */}
      <OrbitingNode orbitRadius={1.2} speed={0.8} size={0.08} color="#3b82f6" offset={0} />
      <OrbitingNode orbitRadius={1.5} speed={0.6} size={0.06} color="#a855f7" offset={Math.PI * 0.7} />
      <OrbitingNode orbitRadius={1.8} speed={0.4} size={0.05} color="#22d3ee" offset={Math.PI * 1.4} />

      {/* Floating particles */}
      <FloatingParticles count={40} />
    </group>
  );
}
