import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { useContext, useEffect, useRef } from "react";
import { Context } from "../lib/Provider";

export const Camera = () => {
  const tcRef = useRef(null);
  let camera = useThree((state) => state.camera);

  const { modelId } = useContext(Context);

  useEffect(() => {
    if (tcRef.current) {
      let p = camera.position.clone();
      console.log("HERE: ", p);
      // @ts-expect-error
      tcRef.current.reset();
      camera.position.copy(p);
    }
  }, [camera, modelId]);

  return (
    <>
      <OrbitControls
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        // enableZoom={false}
        enablePan={false}
        ref={tcRef}
        // makeDefault
      />
      {/* <TrackballControls
        enabled={false}
        // maxPolarAngle={Math.PI / 2}
        // minPolarAngle={Math.PI / 2}
        rotateSpeed={5}
        noPan={true}
        // noRotate
        noZoom={false}
        zoomSpeed={1.5}
      /> */}
    </>
  );
};
