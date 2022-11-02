import React from "react";
import MovieCard from "./MovieCard";

const MoviesRow = ({ movies, setWatchlist, setMovies }) => {
  return (
    <div className="flex w-full justify-center">
      {movies.map((movie) => (
        <MovieCard
          movie={movie}
          setMovies={setMovies}
          setWatchlist={setWatchlist}
          key={movie.imdbID}
        />
      ))}
    </div>
  );
};

export default MoviesRow;
