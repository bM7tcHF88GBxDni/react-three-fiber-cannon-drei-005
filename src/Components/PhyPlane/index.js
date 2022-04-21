import React from "react";
import { usePlane } from "@react-three/cannon";

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

export default PhyPlane;
