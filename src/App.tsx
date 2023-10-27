import React from "react";
import ModelViewer from "./components/ModalViewer";

function App() {
  const modelPath = "/models/AviaryVillage.3dm";

  return (
    <div className="App">
      <ModelViewer modelPath={modelPath} />
    </div>
  );
}

export default App;
