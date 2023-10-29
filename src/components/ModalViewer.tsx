import React from "react";
import { Stage } from "@react-three/drei";

import { Model } from "./Model";
import { Canvas } from "@react-three/fiber";
import { Camera } from "./Camera";

interface ModelViewerProps {
  modelPath: string;
  setPath: (item: string | null) => void;
}

const color = "hotpink";

const ModelViewer: React.FC<ModelViewerProps> = ({ modelPath, setPath }) => {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
      }}
    >
      <button className="remove-item" onClick={() => setPath(null)}>
        Remove the model
      </button>
      <Canvas
        dpr={[1, 1]}
        shadows
        camera={{ position: [0, 0, 30] }}
        style={{ position: "absolute" }}
      >
        <color attach="background" args={["#202020"]} />
        <Stage>
          <ambientLight />
          <Camera />
          <Model arg={modelPath} color={color} />
        </Stage>
      </Canvas>
    </div>
  );
};

export default ModelViewer;
