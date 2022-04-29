import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./index.css";
import ProductPurchase from "./ProductPurchase";
import HomeComponent from "./HomeComponent";

export default function MainRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/purchase/:id" element={<ProductPurchase />} />
        <Route path="/" element={<HomeComponent />} />
      </Routes>
    </Router>
  )
 };