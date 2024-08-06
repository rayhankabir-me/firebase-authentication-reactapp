import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./page/Home";
import Login from "./page/Login";
import MultipleFilesUpload from "./page/MultipleFilesUpload";
import Register from "./page/Register";
import Reset from "./page/Reset";
import UploadFile from "./page/UploadFile";
import PrivateRoutes from "./routes/PrivateRoutes";

function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route element={<PrivateRoutes />}>
              <Route path="/home" element={<Home />} />
              <Route path="/" element={<Home />} exact />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/reset" element={<Reset />} />
            <Route path="/upload-file" element={<UploadFile />} />
            <Route
              path="/multiple-files-upload"
              element={<MultipleFilesUpload />}
            />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
