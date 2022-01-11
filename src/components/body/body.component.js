import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import MoviesComponent from "./movies.component";
import ListMoviesComponent from "./listmovies.component";
import "./body.css";
export default function BodyComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListMoviesComponent />} />
        <Route path="/a" element={<MoviesComponent />} />
      </Routes>
    </BrowserRouter>
  );
}
