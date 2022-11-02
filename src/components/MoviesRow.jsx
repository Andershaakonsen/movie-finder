import React from "react";
import MovieCard from "./MovieCard";

const MoviesRow = ({ movies, setWatchlist }) => {
  return (
    <div className="flex w-full justify-center">
      {movies.map((movie) => (
        <MovieCard
          movie={movie}
          setWatchlist={setWatchlist}
          key={movie.imdbID}
        />
      ))}
    </div>
  );
};

export default MoviesRow;
