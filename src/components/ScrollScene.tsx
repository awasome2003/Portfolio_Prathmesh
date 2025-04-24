// components/ScrollScene.tsx
import React, { useRef, useLayoutEffect } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { useTransform, useScroll, useTime } from "framer-motion";
import { degreesToRadians, progress, mix } from "popmotion";
import * as THREE from "three";

const color = "#00f6ff"; // neon blue

const Icosahedron = () => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.2;
    }
  });

  return (
    <mesh ref={ref} rotation-x={0.4}>
      <icosahedronGeometry args={[2.5, 1]} />
      <meshStandardMaterial
        wireframe
        color={color}
        emissive={color}
        emissiveIntensity={0.5}
        toneMapped={false}
        transparent
        opacity={0.6}
      />
    </mesh>
  );
};

const Star = ({ p }: { p: number }) => {
  const ref = useRef<THREE.Object3D>(null);

  useLayoutEffect(() => {
    const distance = mix(3.5, 6, Math.random());
    const yAngle = mix(degreesToRadians(70), degreesToRadians(110), Math.random());
    const xAngle = degreesToRadians(360) * p;
    ref.current?.position.setFromSphericalCoords(distance, yAngle, xAngle);
  }, []);

  useFrame(({ clock }) => {
    if (ref.current) {
      const scale = 0.8 + Math.sin(clock.getElapsedTime() * 2 + p * 10) * 0.2;
      ref.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.05, 8, 8]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={1.5} toneMapped={false} />
    </mesh>
  );
};

const Scene = ({ numStars = 120 }: { numStars?: number }) => {
  const gl = useThree((state) => state.gl);
  const scene = useThree((state) => state.scene);
  const { scrollYProgress } = useScroll();
  const yAngle = useTransform(scrollYProgress, [0, 1], [0.2, degreesToRadians(140)]);
  const distance = useTransform(scrollYProgress, [0, 1], [10, 4]);
  const time = useTime();

  useFrame(({ camera }) => {
    camera.position.setFromSphericalCoords(
      distance.get(),
      yAngle.get(),
      time.get() * 0.0003
    );
    camera.lookAt(0, 0, 0);
  });

  useLayoutEffect(() => {
    gl.setPixelRatio(window.devicePixelRatio);
    scene.fog = new THREE.Fog("#050505", 5, 15);
  }, [gl, scene]);

  const stars = Array.from({ length: numStars }, (_, i) => (
    <Star key={i} p={progress(0, numStars, i)} />
  ));

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={1.2} color={color} />
      <Icosahedron />
      {stars}
    </>
  );
};

const ScrollScene = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas gl={{ antialias: true }} camera={{ position: [0, 0, 10], fov: 50 }}>
        <Scene />
      </Canvas>
    </div>
  );
};

export default ScrollScene;
