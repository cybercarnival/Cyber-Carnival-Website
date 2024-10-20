import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import AboutPage from "./aboutus/aboutus";
// import SponsorsPage from "./sponsors/SponsorsPage.jsx";
import HomePage from "./homepage/HomePage.jsx";



const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        </Routes>
    </BrowserRouter>
  );
};

export default Router;
