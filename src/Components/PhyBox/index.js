import React, { useRef } from "react";
import { useBox } from "@react-three/cannon";

import { colors } from "./colors.js";

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

export default PhyBox;
