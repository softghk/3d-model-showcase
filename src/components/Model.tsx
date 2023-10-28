import { useLayoutEffect, useState } from "react";
import { useLoader } from "@react-three/fiber";
import { Rhino3dmLoader } from "three/examples/jsm/loaders/3DMLoader";
import { MeshStandardMaterial } from "three";

interface ModelProps {
  object?: object;
  modelId: { [key: string]: any } | null;
  setModelId: (id: { [key: string]: any } | null) => void;
  [properties: string]: any;
}

const hovered = new MeshStandardMaterial({ color: "hotpink" });
const unhovered = new MeshStandardMaterial({ color: "orange" });

export const Model = (props: ModelProps) => {
  const { modelId, setModelId } = props;
  const object = useLoader(Rhino3dmLoader as any, props.arg, (loader) =>
    loader.setLibraryPath("https://cdn.jsdelivr.net/npm/rhino3dm@0.15.0-beta/")
  );
  useLayoutEffect(() => {
    object.traverse((child: any) => {
      if (child.id === modelId?.id) {
        child.material = hovered;
      } else {
        child.material = unhovered;
      }
    });
  }, [object, props.color, modelId?.id]);

  return (
    <primitive
      onClick={(e: any) => {
        e.stopPropagation();
        if (e.object.id === modelId?.id) {
          setModelId(null);
        } else {
          setModelId(e.object);
        }
      }}
      object={object}
      {...props}
    />
  );
};
