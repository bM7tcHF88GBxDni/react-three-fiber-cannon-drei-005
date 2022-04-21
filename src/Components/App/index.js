import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Box, Plane, OrbitControls } from "@react-three/drei";
import { Physics, useBox, usePlane } from "@react-three/cannon";

import css from "./App.module.css";

function PhyPlane({ color, opacity, ...props }) {
  const [ref] = usePlane(() => ({ ...props }));

  return (
    <mesh ref={ref}>
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
    const colors = [
      "#149474",
      "#85defb",
      "#8098d2",
      "#b46cc4",
      "#e394e3",
      "#3ccc8c",
      "#2c88c3",
      "#44b4ea",
      "#545cbc",
      "#6c7c94",
      "#6474e4",
      "#8c6cd4",
      "#74e4a4",
      "#efeec6",
      "#fce7a3",
      "#c43c4c",
      "#b3b4da",
      "#fbb077",
      "#c9deee",
      "#7454b4",
      "#fac3ec",
      "#54647c",
      "#24b47c",
      "#acf4b4",
      "#bbfbfa",
      "#fcec84",
      "#84bbfc",
      "#9454ac",
      "#a48ceb",
      "#fccca4",
      "#f4ab5c",
      "#e49c4c",
      "#e45c54",
      "#cc6b40",
      "#fb745c",
      "#fcd46c",
      "#e4f1f9",
      "#e47c4c",
      "#dc9444",
      "#1c84a4",
      "#58d49c",
      "#fcf4f4",
      "#fce4f4",
      "#ec7c74",
      "#94f4ee",
      "#fcfce4",
      "#1c9c74",
      "#a4acbc",
      "#f4fcfc",
      "#646cdc",
      "#fcfcec",
      "#dc544c",
      "#ecfcfc",
      "#f4fcec",
      "#fc9474",
      "#fcdcf4",
      "#64ccdc",
      "#dcfcd4",
      "#f4f4fc",
      "#dce4fc",
      "#3c9858",
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];

    return color;
  }

  return (
    <mesh
      args={[1, 1, 1]}
      ref={ref}
      onClick={(event) => {
        //get normal, reverse direction
        const normal = event.face.normal.negate().multiplyScalar(30).toArray();

        api.applyLocalImpulse(normal, [0, 0, 0]); //apply directional force to center
      }}
    >
      <boxBufferGeometry></boxBufferGeometry>
      <meshPhongMaterial color={getRandomColor()} />
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
        target={[4.5, 3, 0]}
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
