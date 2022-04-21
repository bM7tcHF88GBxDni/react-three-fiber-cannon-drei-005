import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Physics, useBox, usePlane } from "@react-three/cannon";

import css from "./App.module.css";
import { colors } from "./colors.js";

function PhyPlane({ color, opacity, ...props }) {
  const [ref] = usePlane(() => ({ ...props }));

  return (
    <mesh ref={ref} receiveShadow>
      <planeBufferGeometry args={[1000, 1000]}></planeBufferGeometry>
      <meshPhongMaterial
        color={color}
        opacity={opacity ? opacity : 1}
        transparent
      />
    </mesh>
  );
}

function PhyBox(props) {
  const [ref, api] = useBox(() => ({ args: [1, 1, 1], mass: 1, ...props }));

  function getRandomColor() {
    const color = colors[Math.floor(Math.random() * colors.length)];

    return color;
  }

  return (
    <mesh
      args={[1, 1, 1]}
      ref={ref}
      castShadow
      receiveShadow
      onClick={(event) => {
        //get normal, reverse direction
        const normal = event.face.normal.negate().multiplyScalar(30).toArray();

        api.applyLocalImpulse(normal, [0, 0, 0]); //apply directional force to center
      }}
    >
      <boxBufferGeometry></boxBufferGeometry>
      <meshLambertMaterial color={getRandomColor()} />
    </mesh>
  );
}

function App() {
  const orbCam = useRef();
  return (
    <Canvas camera={{ position: [0, -2, -10] }}>
      <Physics gravity={[0, -5, 0]} allowSleep={true}>
        <PhyPlane
          color="hotpink"
          opacity={0.0000001}
          position={[0, -0.9, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
        />
        <PhyPlane color="lightblue" position={[0, 0, -10]} />

        <PhyBox position={[0, 0, 0]} />
        <PhyBox position={[0.9, 1, 0]} />
        <PhyBox position={[1.8, 0, 0]} />

        <PhyBox position={[2.7, 1, 0]} />
        <PhyBox position={[3.6, 0, 0]} />

        <PhyBox position={[4.5, 1, 0]} />
        <PhyBox position={[5.4, 0, 0]} />

        <PhyBox position={[6.3, 1, 0]} />
        <PhyBox position={[7.2, 0, 0]} />

        <PhyBox position={[1.8, 2, 0]} />
        <PhyBox position={[3.6, 2, 0]} />
        <PhyBox position={[5.4, 2, 0]} />

        <PhyBox position={[2.7, 3, 0]} />
        <PhyBox position={[4.5, 3, 0]} />

        <PhyBox position={[3.6, 4, 0]} />
      </Physics>

      <ambientLight intensity={0.3} />
      <pointLight intensity={0.8} position={[5, 0, 5]} />

      <OrbitControls
        ref={orbCam}
        target={[3.5, 3, 0]}
        enableZoom={false}
        enablePan={false}
        minAzimuthAngle={-Math.PI / 4} //left
        maxAzimuthAngle={Math.PI / 4} //right
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 1} //to bottom pole
      />
    </Canvas>
  );
}

export default App;
