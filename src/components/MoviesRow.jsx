import React from "react";
import MovieCard from "./MovieCard";

const MoviesRow = ({ movies }) => {
  return (
    <div className="flex w-full justify-center">
      {movies.map((movie) => (
        <MovieCard movie={movie} key={movie.imdbID} />
      ))}
    </div>
  );
};

export default MoviesRow;
