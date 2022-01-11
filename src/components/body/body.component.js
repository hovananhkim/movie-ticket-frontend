import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import MoviesComponent from "./movies.component";

export default function BodyComponent() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path="/a" element={<MoviesComponent/>}/>
    </Routes>
        
    </BrowserRouter>
  );
}
