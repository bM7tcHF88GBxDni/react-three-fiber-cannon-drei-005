import { Text } from "@react-three/drei";
import React from "react";

function Instructions() {
  return (
    <Text
      position={[1, -3, 0]}
      color={"white"}
      fontSize={0.7}
      maxWidth={5}
      lineHeight={1}
      letterSpacing={0.02}
      textAlign={"center"}
      font="https://fonts.gstatic.com/s/raleway/v14/1Ptrg8zYS_SKggPNwK4vaqI.woff"
      anchorX="left"
      anchorY="middle"
      fillOpacity={1}
      strokeWidth={"1%"}
      strokeColor={"lightgrey"}
      strokeOpacity={0.1}
    >
      CLICK ON A CUBE FACE
    </Text>
  );
}

export default Instructions;
