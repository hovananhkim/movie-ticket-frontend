import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function MovieComponent(props) {
  const params = useParams();
  return (
    <div className="container">
      <div>{params.id}</div>
    </div>
  );
}
