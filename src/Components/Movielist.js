import React from 'react'

function Movielist({ movies }) {
    return (
        <div>
            {movies.map((movie) => (
            <MovieCard movie={movie} /> 
            ))}
        </div>
    );
}
export default Movielist 