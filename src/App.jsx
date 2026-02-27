import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Categories from "./components/Categories";
import DairyProducts from "./components/DairyProducts";
import ProductDetails from "./components/ProductDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/dairy" element={<DairyProducts />} />
        <Route path="/product" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;