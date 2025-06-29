import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./pages/Footer";
import Contact from "./pages/Contact";
import ConsultingServices from "./pages/Service"; // make sure the default export matches

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<ConsultingServices />} /> {/* ✅ MATCHES path */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
