import React from "react";
import { OrbitControls, Stage } from "@react-three/drei";

import { Model } from "./Model";
import { Canvas } from "@react-three/fiber";

interface ModelViewerProps {
  modelPath: string;
}

const color = "hotpink";

const ModelViewer: React.FC<ModelViewerProps> = ({ modelPath }) => {
  return (
    <Canvas
      dpr={[1, 1]}
      shadows
      camera={{ position: [360, 0, 30] }}
      style={{ position: "absolute" }}
    >
      <color attach="background" args={["#101010"]} />
      <Stage>
        <ambientLight />
        <OrbitControls
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Model arg={modelPath} color={color} />
      </Stage>
    </Canvas>
  );
};

export default ModelViewer;
