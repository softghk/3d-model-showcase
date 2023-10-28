import React, { useState } from "react";
import { OrbitControls, Stage, TrackballControls } from "@react-three/drei";

import { Model } from "./Model";
import { Canvas } from "@react-three/fiber";

interface ModelViewerProps {
  modelPath: string;
}

const color = "hotpink";

const ModelViewer: React.FC<ModelViewerProps> = ({ modelPath }) => {
  const [modelId, setModelId] = useState<{ [key: string]: any } | null>(null);
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
      }}
    >
      {!!modelId && (
        <div
          style={{
            position: "fixed",
            left: "50%",
            top: "50%",
            width: "300px",
            height: "300px",
            background: "#cbcbcb",
            transform: "translate(-50%, -50%)",
            borderRadius: "13px",
            zIndex: 1,
            padding: "10px",
            boxSizing: "border-box",
          }}
        >
          <div>
            <button
              onClick={() => setModelId(null)}
              style={{
                cursor: "pointer",
                padding: "5px 10px",
                background: "#eee",
                border: "unset",
                outline: "unset",
                borderRadius: "8px",
              }}
            >
              X
            </button>
          </div>
          <div>
            <h5>Detail model {modelId?.id}:</h5>
            <div
              style={{
                fontSize: "11px",
              }}
            >
              <p>UUID: {modelId?.uuid}</p>
              <p>IsObject3D: {modelId?.isObject3D?.toString()}</p>
              <p>RenderOrder: {modelId?.renderOrder}</p>
              <p>Visible: {modelId?.visible?.toString()}</p>
            </div>
          </div>
        </div>
      )}
      <Canvas
        dpr={[1, 1]}
        shadows
        camera={{ position: [360, 0, 30] }}
        style={{ position: "absolute" }}
      >
        <color attach="background" args={["#202020"]} />
        <Stage>
          <ambientLight />
          <OrbitControls
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            enableZoom={false}
            enablePan={false}
          />
          <TrackballControls
            noPan={false}
            noRotate
            noZoom={false}
            zoomSpeed={1.5}
          />
          <Model
            setModelId={setModelId}
            modelId={modelId}
            arg={modelPath}
            color={color}
          />
        </Stage>
      </Canvas>
    </div>
  );
};

export default ModelViewer;
