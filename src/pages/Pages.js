import React from "react";
// REACT-ROUTER-DOM //
import { Routes, Route } from "react-router-dom";
// ---- PAGES ---- //
import Home from "./Home/Home";
import Cuisine from "./Cuisine/Cuisine";
import Searched from "./Searched/Searched";
import RecipesDetails from "./RecipesDetails/RecipesDetails";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cuisine/:name" element={<Cuisine />} />
      <Route path="/searched/:search" element={<Searched />} />
      <Route path="/recipe/:id" element={<RecipesDetails />} />
    </Routes>
  );
};

export default Pages;
