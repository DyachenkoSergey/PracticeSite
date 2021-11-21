import "./App.css";
import { Layout } from "./sharedComponents/Layout";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { socket } from "constants/socket";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout socket={socket} />
      </BrowserRouter>
    </div>
  );
}

export default App;
