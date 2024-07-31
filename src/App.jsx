import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./page/Home";
import Login from "./page/Login";
import Register from "./page/Register";
import Reset from "./page/Reset";
import PrivateRoutes from "./routes/PrivateRoutes";

function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route path="/home" element={<Home />} />
              <Route path="/home" element={<Home />} exact />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/reset" element={<Reset />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
