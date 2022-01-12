import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListMoviesComponent from "./listmovies.component";
import "./body.css";
import BuyTicketComponent from "./buy-ticket.component";
import MovieComponent from "./movie.component";
export default function BodyComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListMoviesComponent />} />
        <Route path="/lich-chieu" element={<BuyTicketComponent />} />
        <Route path="/dat-ve/:id" element={<MovieComponent />} />
      </Routes>
    </BrowserRouter>
  );
}
