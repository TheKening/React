import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home.jsx";
import Header from "./pages/Header.jsx";
import Footer from "./pages/Footer.jsx";
import Characters from "./pages/Characters.jsx";
import Moments from "./pages/Moments.jsx";
import Federacion from "./pages/Federacion.jsx";
import "./App.css";
import React from "react";




import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
      <div className="text-light bg-dark vh-100">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Characters" element={<Characters />} />
            <Route path="/Moments" element={<Moments />} />
            <Route path="/Federacion" element={<Federacion />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
  );
}

export default App;
