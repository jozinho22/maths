import * as THREE from "three";
import React, { Suspense, useRef } from "react";
import { Canvas, useFrame, useLoader } from "react-three-fiber";
import { OrbitControls } from "@react-three/drei";

const Test = () => {
  const Sphere = () => {
    const sphereRef = useRef();
    const repeatX = 4;
    const repeatY = 2;

/*     const base = useLoader(THREE.TextureLoader, "texture.jpeg");
    base.wrapS = THREE.RepeatWrapping;
    base.wrapT = THREE.RepeatWrapping;
    base.repeat.set(repeatX, repeatY); */

    useFrame(() => {
      sphereRef.current.rotation.x += 0.01;
      sphereRef.current.rotation.y += 0.01;
    });

    return (
      <mesh ref={sphereRef}>
        <sphereGeometry args={[3, 36, 36]} />
  
      </mesh>
    );
  };


  return (
    <Canvas style={{ height: 400, width: 400 }}>
      <pointLight position={[5, 10, -10]} intensity={1} />
      <pointLight position={[0, 0, 10]} intensity={1} />
      <Suspense fallback={null}>
        <Sphere />
      </Suspense>
      <OrbitControls />
      
    </Canvas>
  );
};

export default Test;
