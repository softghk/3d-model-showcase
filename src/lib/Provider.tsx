import React, { createContext, useState } from "react";

export const Context = createContext<{
  modelId: ObjectType | undefined;
  setModelId: React.Dispatch<React.SetStateAction<ObjectType | undefined>>;
}>({
  modelId: undefined,
  setModelId: () => null,
});

export interface ObjectType {
  [key: string]: any;
}

export const Provider = ({ children }: React.PropsWithChildren) => {
  const [modelId, setModelId] = useState<ObjectType | undefined>(undefined);
  return (
    <Context.Provider value={{ modelId, setModelId }}>
      {!!modelId && (
        <div
          style={{
            position: "fixed",
            right: "5%",
            top: "5%",
            width: "300px",
            height: "200px",
            background: "#cbcbcb",
            borderRadius: "13px",
            zIndex: 1,
            padding: "10px",
            boxSizing: "border-box",
          }}
        >
          <div>
            <button
              onClick={() => setModelId(undefined)}
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
      {children}
    </Context.Provider>
  );
};
