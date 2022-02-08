import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalRouting } from "GlobalRouting";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalRouting />
        <ToastContainer
          position={toast.POSITION.TOP_CENTER}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
