import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import ProjectDetail from "./pages/ProjectDetail";
import Category from "./pages/Category";


function App() {
  return (
    <Router basename="/portfolio25">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* Dynamic gallery */}
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/category/:category" element={<Category />} />
        {/* Dynamic project detail */}
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}



export default App;