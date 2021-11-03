import React from "react";

function MovieCard({ movie: {posterUrl, title, rate}}){
    return(
        <Card style={{width: "18rem", marginBottom: "40px" }}>

        <Card.Img variant="top" src={posterUrl}/>
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <p>{rate}</p>

        </Card.Body>
        </Card>
    );
}
export default MovieCard;