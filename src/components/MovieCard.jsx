import React from "react";
import { Card } from "react-bootstrap";

function MovieCard({ movie, onClick }) {
  return (
    <Card style={{border:"solid 10px",bordercolour:"black", width: "18rem", cursor: "pointer" }} onClick={() => onClick(movie.id)} className="mb-4">
      <Card.Img  style={{borderRadius:"0px"}}variant="top" src={movie.image} alt={movie.title} />
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;