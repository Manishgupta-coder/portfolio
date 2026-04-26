"use client";
import { motion } from 'framer-motion';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import { Group, MathUtils } from 'three';
import { Float, Stars } from '@react-three/drei';

function ProgrammerScene() {
  const groupRef = useRef<Group>(null);
  const { mouse } = useThree();

  useFrame((state) => {
    if (groupRef.current) {
      // Gentle floating/breathing animation
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 1.5) * 0.05 - 0.5;
      
      // Slight rotation based on mouse to give parallax
      const targetX = (mouse.x * Math.PI) / 6;
      const targetY = -(mouse.y * Math.PI) / 8;
      groupRef.current.rotation.y = MathUtils.lerp(groupRef.current.rotation.y, targetX, 0.05);
      groupRef.current.rotation.x = MathUtils.lerp(groupRef.current.rotation.x, targetY, 0.05);
    }
  });

  return (
    <>
      <Stars radius={50} depth={50} count={1000} factor={3} saturation={0} fade speed={1} />
      <group ref={groupRef} position={[0, -0.5, 0]}>
        {/* Desk */}
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[3.5, 0.1, 1.5]} />
          <meshStandardMaterial color="#1a1a1a" />
        </mesh>
        
        {/* Laptop Base */}
        <mesh position={[0, 0.05, 0.1]}>
          <boxGeometry args={[0.8, 0.04, 0.6]} />
          <meshStandardMaterial color="#a3a3a3" />
        </mesh>
        
        {/* Laptop Screen */}
        <group position={[0, 0.07, -0.2]} rotation={[-0.2, 0, 0]}>
          <mesh position={[0, 0.3, 0]}>
            <boxGeometry args={[0.8, 0.6, 0.04]} />
            <meshStandardMaterial color="#737373" />
          </mesh>
          {/* Screen Glowing Part */}
          <mesh position={[0, 0.3, 0.021]}>
            <planeGeometry args={[0.75, 0.55]} />
            <meshBasicMaterial color="#3b82f6" />
          </mesh>
        </group>

        {/* Person/Programmer */}
        <group position={[0, 0.8, 0.8]}>
          {/* Body */}
          <mesh position={[0, -0.4, 0]}>
            <boxGeometry args={[0.6, 0.7, 0.4]} />
            <meshStandardMaterial color="#2563eb" />
          </mesh>
          
          {/* Head */}
          <mesh position={[0, 0.15, 0]}>
            <boxGeometry args={[0.4, 0.4, 0.4]} />
            <meshStandardMaterial color="#fcd34d" />
          </mesh>

          {/* Glasses */}
          <mesh position={[-0.1, 0.2, -0.21]}>
            <boxGeometry args={[0.12, 0.08, 0.02]} />
            <meshStandardMaterial color="#000000" />
          </mesh>
          <mesh position={[0.1, 0.2, -0.21]}>
            <boxGeometry args={[0.12, 0.08, 0.02]} />
            <meshStandardMaterial color="#000000" />
          </mesh>
          <mesh position={[0, 0.2, -0.21]}>
            <boxGeometry args={[0.08, 0.02, 0.02]} />
            <meshStandardMaterial color="#000000" />
          </mesh>

          {/* Arms typing */}
          <group position={[-0.35, -0.2, -0.1]} rotation={[0.5, 0, 0]}>
            <mesh position={[0, -0.15, -0.15]}>
               <boxGeometry args={[0.12, 0.4, 0.12]} />
               <meshStandardMaterial color="#2563eb" />
            </mesh>
          </group>
          <group position={[0.35, -0.2, -0.1]} rotation={[0.5, 0, 0]}>
            <mesh position={[0, -0.15, -0.15]}>
               <boxGeometry args={[0.12, 0.4, 0.12]} />
               <meshStandardMaterial color="#2563eb" />
            </mesh>
          </group>
        </group>
        
        {/* Chair Base */}
        <mesh position={[0, -0.1, 0.9]}>
          <boxGeometry args={[0.7, 0.1, 0.6]} />
          <meshStandardMaterial color="#333333" />
        </mesh>
        <mesh position={[0, -0.5, 0.9]}>
          <cylinderGeometry args={[0.05, 0.05, 0.8]} />
          <meshStandardMaterial color="#222222" />
        </mesh>

        {/* Coffee Mug */}
        <mesh position={[0.8, 0.1, 0.2]}>
          <cylinderGeometry args={[0.08, 0.08, 0.15]} />
          <meshStandardMaterial color="#ef4444" />
        </mesh>
        
        {/* Decor/Plant */}
        <mesh position={[-1.2, 0.15, -0.2]}>
          <cylinderGeometry args={[0.15, 0.1, 0.2]} />
          <meshStandardMaterial color="#ffffff" />
        </mesh>
        <mesh position={[-1.2, 0.4, -0.2]}>
          <sphereGeometry args={[0.25]} />
          <meshStandardMaterial color="#22c55e" />
        </mesh>
      </group>
    </>
  );
}

export default function About() {
  return (
    <section id="about" className="py-32 bg-black text-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <h2 className="text-sm font-mono text-neutral-500 uppercase tracking-[0.3em] mb-12">About Me</h2>
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2 h-[500px] lg:h-[600px] relative cursor-pointer">
             <Canvas camera={{ position: [0, 1.5, 6], fov: 45 }}>
              <ambientLight intensity={0.6} />
              <directionalLight position={[5, 10, 5]} intensity={1.5} />
              <pointLight position={[-10, -10, -10]} intensity={0.5} color="#444444" />
              <ProgrammerScene />
            </Canvas>
          </div>

          <div className="w-full lg:w-1/2 z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6 text-lg md:text-xl text-neutral-400 font-light leading-relaxed"
            >
              <p>
                <strong className="text-white font-medium text-3xl md:text-4xl block mb-6">Hi, I am Manish Gupta.</strong>
                Software Engineer with 2+ years of experience in building scalable and responsive web applications.
              </p>
              <p>
                Proficient in React.js, modern JavaScript (ES6+), state management, and RESTful API integration. I have a strong foundation in C, C++, and Data Structures & Algorithms, enabling efficient problem-solving and performance optimization.
              </p>
              <p>
                I am passionate about creating clean, user-friendly interfaces and developing solutions that improve both performance and user experience. Continuously learning and working toward full-stack development, I aim to contribute technical expertise and innovative thinking to a growth-focused organization.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
