'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { useState, useRef } from 'react';
import * as random from 'maath/random/dist/maath-random.esm';

function ParticleWaves() {
  const ref = useRef<any>();
  const [sphere] = useState(() => random.inSphere(new Float32Array(3000), { radius: 1.5 }) as Float32Array);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 12;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#D4AF37"
          size={0.004}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.35}
        />
      </Points>
    </group>
  );
}

export default function Hero3D() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-60">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ParticleWaves />
      </Canvas>
    </div>
  );
}