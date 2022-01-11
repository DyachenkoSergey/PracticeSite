import "./App.css";
import { Layout } from "./sharedComponents/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout />
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
