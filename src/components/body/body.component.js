import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListMoviesComponent from "./listmovies.component";
import "./body.css";
import MovieScheduleComponent from "./movie-schedules.component";
export default function BodyComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListMoviesComponent />} />
        <Route path="/lich-chieu" element={<MovieScheduleComponent />} />
      </Routes>
    </BrowserRouter>
  );
}
