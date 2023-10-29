import { FileUpload } from "./components/FileUpload";
import { Provider } from "./lib/Provider";
import "./App.css";

function App() {
  return (
    <Provider>
      <FileUpload />
    </Provider>
  );
}

export default App;
