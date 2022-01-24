import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListMoviesComponent from "./listmovies.component";
import "./body.css";
import SelectTicketComponent from "./select-ticket.component";
import MovieComponent from "./movie.component";
import BuyTicketComponent from "./buy-ticket.component";
export default function BodyComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListMoviesComponent />} />
        <Route path="/lich-chieu" element={<SelectTicketComponent />} />
        <Route path="/dat-ve/:name" element={<MovieComponent />} />
        <Route path="/mua-ve/:name" element={<BuyTicketComponent />} />
      </Routes>
    </BrowserRouter>
  );
}
