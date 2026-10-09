"use client";
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Mesh, MathUtils } from 'three';

function FloatingShape() {
  const meshRef = useRef<Mesh>(null);
  const { mouse, viewport } = useThree();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.3;
      
      const targetX = (mouse.x * viewport.width) / 10;
      const targetY = (mouse.y * viewport.height) / 10;
      
      meshRef.current.position.x = MathUtils.lerp(meshRef.current.position.x, targetX, 0.1);
      meshRef.current.position.y = MathUtils.lerp(meshRef.current.position.y, targetY, 0.1);
    }
  });

  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[1.5, 0.4, 128, 32]} />
      <meshStandardMaterial 
        color="#ffffff" 
        wireframe={true} 
        transparent 
        opacity={0.15} 
      />
    </mesh>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={1} />
          <directionalLight position={[2, 2, 2]} intensity={2} />
          <FloatingShape />
        </Canvas>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.p
          className="text-sm font-mono text-neutral-500 uppercase tracking-[0.35em] mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          Manish Gupta
        </motion.p>
        <motion.h1 
          className="text-5xl sm:text-6xl md:text-8xl font-black text-white mb-6 tracking-tight leading-[1.05]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          SOFTWARE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-500 to-white">
            ENGINEER
          </span>
        </motion.h1>
        <motion.p
          className="text-xs sm:text-sm font-mono text-neutral-600 uppercase tracking-[0.25em] mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          3+ years · React · TypeScript · Production web apps
        </motion.p>
        <motion.p 
          className="text-lg md:text-2xl text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          I build scalable, responsive interfaces—REST APIs, performance tuning, and
          accessible UI that ships to real users.
        </motion.p>
      </div>
    </section>
  );
}
