import React from "react";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import Contact from "./Component/Contact";
import Menu from "./Component/Menu";
import Gallery from "./Component/Gallery";
import { HashRouter, Routes, Route } from "react-router-dom";  // ⬅️ Changed

function App() {
  return (
    <>
      <HashRouter> {/* ⬅️ Changed */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/Gallery" element={<Gallery />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
