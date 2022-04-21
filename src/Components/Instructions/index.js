import { Text } from "@react-three/drei";
import React, { useEffect, useState } from "react";

function Instructions() {
  const [flip, setFlip] = useState(true);
  const [instructCount, setInstructCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFlip(!flip);
      setInstructCount(instructCount + 1);
    }, 5000);
  }, [instructCount]);

  return (
    <>
      {instructCount < 5 ? (
        flip ? (
          <Text
            position={[1, 6, 0]}
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
        ) : (
          <Text
            position={[1, 6, 0]}
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
            CLICK + HOLD TO MOVE THE CAMERA
          </Text>
        )
      ) : (
        <></>
      )}
    </>
  );
}

export default Instructions;
