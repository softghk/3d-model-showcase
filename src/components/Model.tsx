import { useLayoutEffect, useState } from "react";
import { useLoader } from "@react-three/fiber";
import { Rhino3dmLoader } from "three/examples/jsm/loaders/3DMLoader";
import { MeshStandardMaterial } from "three";

interface ModelProps {
  object?: object;
  [properties: string]: any;
}

const hovered = new MeshStandardMaterial({ color: "hotpink" });
const unhovered = new MeshStandardMaterial({ color: "orange" });

export const Model = (props: ModelProps) => {
  const [mochSelected, setMoshSelected] = useState<null | number>(null);
  const object = useLoader(Rhino3dmLoader as any, props.arg, (loader) =>
    loader.setLibraryPath("https://cdn.jsdelivr.net/npm/rhino3dm@0.15.0-beta/")
  );
  useLayoutEffect(() => {
    object.traverse((child: any) => {
      if (child.id === mochSelected) {
        child.material = hovered;
      } else {
        child.material = unhovered;
      }
    });
  }, [object, props.color, mochSelected]);

  return (
    <primitive
      onClick={(e: any) => {
        e.stopPropagation();
        if (e.object.id === mochSelected) {
          setMoshSelected(null);
        } else {
          setMoshSelected(e.object.id);
        }
      }}
      object={object}
      {...props}
    />
  );
};
