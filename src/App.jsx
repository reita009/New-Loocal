import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

//Pages
import Home from "./Pages/Home";
import ForgotPassword from "./Pages/ForgotPassword";
import Help from "./Pages/Help";
import NavBar from "./Pages/NavBar";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/senha" element={<ForgotPassword />} />
            <Route path="/login/ajuda" element={<Help />} />
            <Route path="/backoffice" element={<NavBar />} />
          </Routes>
        </>
      </div>
    </BrowserRouter>
  );
}

export default App;
