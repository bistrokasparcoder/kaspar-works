import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

function useAccent() {
  return useMemo(() => {
    const style = getComputedStyle(document.documentElement);
    return style.getPropertyValue('--accent').trim() || '#c8ff00';
  }, []);
}

/* ── Tiny humanoid figure (abstract, geometric) ── */
function MiniAgent({ position, scale = 0.12, speed = 1, color }: { position: [number, number, number]; scale?: number; speed?: number; color: string }) {
  const ref = useRef<THREE.Group>(null);
  const startPos = useRef(position);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime() * speed;
    // Walking bob
    ref.current.position.y = startPos.current[1] + Math.abs(Math.sin(t * 3)) * 0.03;
    // Subtle sway
    ref.current.rotation.z = Math.sin(t * 2) * 0.08;
  });

  return (
    <group ref={ref} position={position} scale={scale}>
      {/* Head */}
      <mesh position={[0, 1.7, 0]}>
        <sphereGeometry args={[0.35, 8, 8]} />
        <meshStandardMaterial color={color} roughness={0.3} metalness={0.6} />
      </mesh>
      {/* Body */}
      <mesh position={[0, 0.8, 0]}>
        <capsuleGeometry args={[0.25, 0.7, 4, 8]} />
        <meshStandardMaterial color={color} roughness={0.3} metalness={0.6} />
      </mesh>
      {/* Left leg */}
      <mesh position={[-0.15, 0, 0]}>
        <capsuleGeometry args={[0.08, 0.5, 4, 6]} />
        <meshStandardMaterial color={color} roughness={0.4} metalness={0.5} />
      </mesh>
      {/* Right leg */}
      <mesh position={[0.15, 0, 0]}>
        <capsuleGeometry args={[0.08, 0.5, 4, 6]} />
        <meshStandardMaterial color={color} roughness={0.4} metalness={0.5} />
      </mesh>
      {/* Left arm */}
      <mesh position={[-0.38, 0.9, 0]} rotation={[0, 0, 0.4]}>
        <capsuleGeometry args={[0.06, 0.4, 4, 6]} />
        <meshStandardMaterial color={color} roughness={0.4} metalness={0.5} />
      </mesh>
      {/* Right arm */}
      <mesh position={[0.38, 0.9, 0]} rotation={[0, 0, -0.4]}>
        <capsuleGeometry args={[0.06, 0.4, 4, 6]} />
        <meshStandardMaterial color={color} roughness={0.4} metalness={0.5} />
      </mesh>
    </group>
  );
}

/* ── Robot variant A — round friendly bot (sphere head, cylinder body) ── */
function RobotRound({ position, scale = 0.12, speed = 1, color }: { position: [number, number, number]; scale?: number; speed?: number; color: string }) {
  const ref = useRef<THREE.Group>(null);
  const accent = useAccent();

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime() * speed;
    ref.current.position.y += (Math.abs(Math.sin(t * 2.5)) * 0.025 + position[1] - ref.current.position.y) * 0.1;
    ref.current.rotation.z = Math.sin(t * 1.8) * 0.05;
  });

  return (
    <group ref={ref} position={position} scale={scale}>
      {/* Round head */}
      <mesh position={[0, 1.85, 0]}>
        <sphereGeometry args={[0.35, 12, 12]} />
        <meshStandardMaterial color={color} roughness={0.15} metalness={0.85} />
      </mesh>
      {/* Visor */}
      <mesh position={[0, 1.88, 0.28]}>
        <sphereGeometry args={[0.18, 12, 8, 0, Math.PI * 2, 0, Math.PI * 0.5]} />
        <meshBasicMaterial color={accent} transparent opacity={0.7} />
      </mesh>
      {/* Antenna */}
      <mesh position={[0, 2.25, 0]}>
        <cylinderGeometry args={[0.015, 0.015, 0.15, 6]} />
        <meshStandardMaterial color={color} metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0, 2.35, 0]}>
        <sphereGeometry args={[0.04, 8, 8]} />
        <meshBasicMaterial color={accent} />
      </mesh>
      {/* Cylinder body */}
      <mesh position={[0, 0.95, 0]}>
        <cylinderGeometry args={[0.28, 0.3, 0.85, 10]} />
        <meshStandardMaterial color={color} roughness={0.2} metalness={0.8} />
      </mesh>
      {/* Chest light */}
      <mesh position={[0, 1.1, 0.29]}>
        <circleGeometry args={[0.06, 8]} />
        <meshBasicMaterial color={accent} />
      </mesh>
      {/* Legs — cylinders */}
      <mesh position={[-0.14, 0.2, 0]}>
        <cylinderGeometry args={[0.07, 0.08, 0.55, 8]} />
        <meshStandardMaterial color={color} roughness={0.3} metalness={0.7} />
      </mesh>
      <mesh position={[0.14, 0.2, 0]}>
        <cylinderGeometry args={[0.07, 0.08, 0.55, 8]} />
        <meshStandardMaterial color={color} roughness={0.3} metalness={0.7} />
      </mesh>
      {/* Arms — thin cylinders */}
      <mesh position={[-0.38, 1, 0]} rotation={[0, 0, 0.35]}>
        <cylinderGeometry args={[0.04, 0.05, 0.45, 6]} />
        <meshStandardMaterial color={color} roughness={0.3} metalness={0.7} />
      </mesh>
      <mesh position={[0.38, 1, 0]} rotation={[0, 0, -0.35]}>
        <cylinderGeometry args={[0.04, 0.05, 0.45, 6]} />
        <meshStandardMaterial color={color} roughness={0.3} metalness={0.7} />
      </mesh>
    </group>
  );
}

/* ── Robot variant B — angular stealth bot (diamond head, wedge body) ── */
function RobotAngular({ position, scale = 0.12, speed = 1, color }: { position: [number, number, number]; scale?: number; speed?: number; color: string }) {
  const ref = useRef<THREE.Group>(null);
  const accent = useAccent();

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime() * speed;
    ref.current.position.y += (Math.abs(Math.sin(t * 3)) * 0.02 + position[1] - ref.current.position.y) * 0.1;
    ref.current.rotation.z = Math.sin(t * 2) * 0.04;
  });

  return (
    <group ref={ref} position={position} scale={scale}>
      {/* Diamond head */}
      <mesh position={[0, 1.85, 0]} rotation={[0, Math.PI / 4, 0]}>
        <octahedronGeometry args={[0.3, 0]} />
        <meshStandardMaterial color={color} roughness={0.1} metalness={0.9} />
      </mesh>
      {/* Single eye slit */}
      <mesh position={[0, 1.88, 0.25]}>
        <planeGeometry args={[0.3, 0.06]} />
        <meshBasicMaterial color={accent} transparent opacity={0.9} />
      </mesh>
      {/* Tapered body */}
      <mesh position={[0, 0.95, 0]}>
        <cylinderGeometry args={[0.2, 0.32, 0.9, 6]} />
        <meshStandardMaterial color={color} roughness={0.15} metalness={0.85} />
      </mesh>
      {/* Core glow */}
      <mesh position={[0, 1.05, 0.27]}>
        <circleGeometry args={[0.04, 6]} />
        <meshBasicMaterial color={accent} />
      </mesh>
      {/* Legs — angular */}
      <mesh position={[-0.15, 0.15, 0]}>
        <boxGeometry args={[0.1, 0.55, 0.1]} />
        <meshStandardMaterial color={color} roughness={0.2} metalness={0.8} />
      </mesh>
      <mesh position={[0.15, 0.15, 0]}>
        <boxGeometry args={[0.1, 0.55, 0.1]} />
        <meshStandardMaterial color={color} roughness={0.2} metalness={0.8} />
      </mesh>
      {/* Blade arms */}
      <mesh position={[-0.38, 1, 0]} rotation={[0, 0, 0.5]}>
        <boxGeometry args={[0.04, 0.5, 0.12]} />
        <meshStandardMaterial color={color} roughness={0.15} metalness={0.85} />
      </mesh>
      <mesh position={[0.38, 1, 0]} rotation={[0, 0, -0.5]}>
        <boxGeometry args={[0.04, 0.5, 0.12]} />
        <meshStandardMaterial color={color} roughness={0.15} metalness={0.85} />
      </mesh>
    </group>
  );
}

/* ── Robot variant C — hovering drone bot (no legs, disc body) ── */
function RobotDrone({ position, scale = 0.12, speed = 1, color }: { position: [number, number, number]; scale?: number; speed?: number; color: string }) {
  const ref = useRef<THREE.Group>(null);
  const accent = useAccent();

  useFrame(({ clock }) => {
    if (!ref.current) return;
    const t = clock.getElapsedTime() * speed;
    ref.current.position.y += (Math.sin(t * 1.5) * 0.05 + position[1] + 0.3 - ref.current.position.y) * 0.08;
    ref.current.rotation.z = Math.sin(t * 2.5) * 0.06;
  });

  return (
    <group ref={ref} position={position} scale={scale}>
      {/* Dome head */}
      <mesh position={[0, 1.3, 0]}>
        <sphereGeometry args={[0.3, 10, 10, 0, Math.PI * 2, 0, Math.PI * 0.6]} />
        <meshStandardMaterial color={color} roughness={0.1} metalness={0.9} />
      </mesh>
      {/* Eye ring */}
      <mesh position={[0, 1.2, 0.22]}>
        <torusGeometry args={[0.1, 0.025, 8, 16]} />
        <meshBasicMaterial color={accent} />
      </mesh>
      {/* Disc body */}
      <mesh position={[0, 0.85, 0]}>
        <cylinderGeometry args={[0.35, 0.35, 0.2, 12]} />
        <meshStandardMaterial color={color} roughness={0.15} metalness={0.85} />
      </mesh>
      {/* Hover ring */}
      <mesh position={[0, 0.65, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.25, 0.015, 8, 20]} />
        <meshBasicMaterial color={accent} transparent opacity={0.4} />
      </mesh>
      {/* Side thrusters */}
      <mesh position={[-0.35, 0.85, 0]}>
        <sphereGeometry args={[0.08, 8, 8]} />
        <meshBasicMaterial color={accent} transparent opacity={0.5} />
      </mesh>
      <mesh position={[0.35, 0.85, 0]}>
        <sphereGeometry args={[0.08, 8, 8]} />
        <meshBasicMaterial color={accent} transparent opacity={0.5} />
      </mesh>
    </group>
  );
}

/* ── Central morphing wireframe core ── */
function CoreShape() {
  const meshRef = useRef<THREE.Mesh>(null);
  const accent = useAccent();
  const geo = useMemo(() => new THREE.IcosahedronGeometry(1.2, 2), []);
  const origPos = useMemo(() => new Float32Array(geo.attributes.position.array), [geo]);

  const scaleRef = useRef(0);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    scaleRef.current = THREE.MathUtils.lerp(scaleRef.current, 1, 0.012);

    if (meshRef.current) {
      meshRef.current.scale.setScalar(scaleRef.current);
      meshRef.current.rotation.y = t * 0.06;
      meshRef.current.rotation.x = Math.sin(t * 0.03) * 0.15;

      const pos = meshRef.current.geometry.attributes.position;
      for (let i = 0; i < pos.count; i++) {
        const ox = origPos[i * 3], oy = origPos[i * 3 + 1], oz = origPos[i * 3 + 2];
        const n = Math.sin(ox * 3 + t * 0.5) * Math.cos(oy * 3 + t * 0.4) * Math.sin(oz * 3 + t * 0.6);
        pos.setXYZ(i, ox * (1 + n * 0.1), oy * (1 + n * 0.1), oz * (1 + n * 0.1));
      }
      pos.needsUpdate = true;
    }
  });

  return (
    <mesh ref={meshRef} geometry={geo}>
      <meshBasicMaterial color={accent} wireframe transparent opacity={0.2} />
    </mesh>
  );
}

/* ── Orbital paths that agents walk along ── */
function OrbitalPaths() {
  const accent = useAccent();
  return (
    <>
      {[1.8, 2.4, 3].map((r, i) => (
        <mesh key={i} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.3, 0]}>
          <torusGeometry args={[r, 0.004, 16, 100]} />
          <meshBasicMaterial color={accent} transparent opacity={0.15 + i * 0.03} />
        </mesh>
      ))}
    </>
  );
}

/* ── Agents walking on orbital rings ── */
function OrbitingAgents() {
  const groupRef = useRef<THREE.Group>(null);
  const accent = useAccent();
  const isLight = useMemo(() => document.documentElement.classList.contains('light'), []);

  const agents = useMemo(() => [
    // Ring 1 — inner (fast, intimate)
    { type: 'robotA', radius: 1.8, speed: 0.18, offset: 0, color: isLight ? '#3347cc' : '#88aa22' },
    { type: 'human', radius: 1.8, speed: 0.18, offset: Math.PI * 0.67, color: isLight ? '#444' : '#aaa' },
    { type: 'robotC', radius: 1.8, speed: 0.18, offset: Math.PI * 1.33, color: isLight ? '#2255bb' : '#aadd00' },
    // Ring 2 — middle (counter-rotate)
    { type: 'human', radius: 2.4, speed: -0.12, offset: 0.3, color: isLight ? '#555' : '#999' },
    { type: 'robotB', radius: 2.4, speed: -0.12, offset: Math.PI * 0.6 + 0.3, color: isLight ? '#2255bb' : '#99cc11' },
    { type: 'human', radius: 2.4, speed: -0.12, offset: Math.PI * 1.2 + 0.3, color: isLight ? '#666' : '#bbb' },
    { type: 'robotA', radius: 2.4, speed: -0.12, offset: Math.PI * 1.8 + 0.3, color: isLight ? '#4455dd' : '#77bb11' },
    // Ring 3 — outer (slow, wide)
    { type: 'robotC', radius: 3, speed: 0.07, offset: 0.8, color: isLight ? '#4455dd' : '#77bb11' },
    { type: 'human', radius: 3, speed: 0.07, offset: Math.PI * 0.5 + 0.8, color: isLight ? '#444' : '#ccc' },
    { type: 'robotB', radius: 3, speed: 0.07, offset: Math.PI + 0.8, color: isLight ? '#3344cc' : '#aadd00' },
    { type: 'human', radius: 3, speed: 0.07, offset: Math.PI * 1.5 + 0.8, color: isLight ? '#555' : '#ddd' },
  ], [isLight]);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime();
    groupRef.current.children.forEach((child, i) => {
      const agent = agents[i];
      if (!agent) return;
      const angle = t * agent.speed + agent.offset;
      child.position.x = Math.cos(angle) * agent.radius;
      child.position.z = Math.sin(angle) * agent.radius;
      child.position.y = -0.3;
      // Face direction of travel
      child.rotation.y = -angle + Math.PI / 2;
    });
  });

  return (
    <group ref={groupRef}>
      {agents.map((agent, i) => {
        const props = { key: i, position: [0, 0, 0] as [number, number, number], scale: 0.06, speed: 0.8 + i * 0.1, color: agent.color };
        switch (agent.type) {
          case 'robotA': return <RobotRound {...props} />;
          case 'robotB': return <RobotAngular {...props} />;
          case 'robotC': return <RobotDrone {...props} />;
          default: return <MiniAgent {...props} />;
        }
      })}
    </group>
  );
}

/* ── Connection lines between nearby agents ── */
function ConnectionWeb() {
  const linesRef = useRef<THREE.LineSegments>(null);
  const accent = useAccent();

  const geo = useMemo(() => {
    const g = new THREE.BufferGeometry();
    // Will be updated each frame
    g.setAttribute('position', new THREE.BufferAttribute(new Float32Array(8 * 2 * 3), 3));
    return g;
  }, []);

  useFrame(() => {
    // Connections are implied by the orbital paths — no need to calculate
    // The visual is the agents + paths themselves
  });

  return null; // Connections are visual from the orbital rings
}

/* ── Tiny floating data nodes ── */
function DataNodes() {
  const ref = useRef<THREE.Points>(null);
  const accent = useAccent();
  const count = 120;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 1.5 + Math.random() * 3.5;
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = (Math.random() - 0.5) * 2;
      arr[i * 3 + 2] = r * Math.sin(phi) * Math.sin(theta);
    }
    return arr;
  }, []);

  useFrame(({ clock }) => {
    if (ref.current) ref.current.rotation.y = clock.getElapsedTime() * 0.008;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial color={accent} size={0.02} transparent opacity={0.5} sizeAttenuation depthWrite={false} />
    </points>
  );
}

/* ── Camera ── */
function Camera() {
  const { camera } = useThree();
  useFrame(({ pointer }) => {
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, pointer.x * 1, 0.015);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, pointer.y * 0.3 + 2.5, 0.015);
    camera.lookAt(0, 0, 0);
  });
  return null;
}

/* ── Exported scene ── */
const Scene3D: React.FC<{ className?: string }> = ({ className = '' }) => {
  const accent = useAccent();

  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 2.5, 6], fov: 42 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        style={{ background: 'transparent' }}
      >
        <Camera />

        <ambientLight intensity={0.7} />
        <directionalLight position={[4, 6, 4]} intensity={1} />
        <pointLight position={[-3, 2, 3]} intensity={0.5} color={accent} />
        <pointLight position={[3, 1, -3]} intensity={0.4} color="#ffffff" />
        <pointLight position={[0, -1, 4]} intensity={0.3} color={accent} />

        {/* Central morphing core — the "product" being built */}
        <CoreShape />

        {/* Orbital paths */}
        <OrbitalPaths />

        {/* Agents (robots + humans) walking the rings */}
        <OrbitingAgents />

        {/* Ambient particles */}
        <DataNodes />
      </Canvas>
    </div>
  );
};

export default Scene3D;
