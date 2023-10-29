import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import ModelViewer from "./ModalViewer";

export const FileUpload: React.FC = () => {
  const [modelPath, setModelPath] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length === 1) {
      // Handle the uploaded 3DM file
      const file = acceptedFiles[0];
      const blobURL = URL.createObjectURL(file);
      setModelPath(blobURL);
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <>
      <div className="drop">
        <div {...getRootProps()} className="dropzone">
          <input {...getInputProps()} />
          <p>Drag & drop 3DM files here, or click to select files</p>
        </div>
      </div>
      {modelPath && (
        <ModelViewer setPath={setModelPath} modelPath={modelPath} />
      )}
    </>
  );
};

export default FileUpload;
