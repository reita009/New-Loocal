import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

//Pages
import Home from "./Pages/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </>
      </div>
    </BrowserRouter>
  );
}

export default App;
