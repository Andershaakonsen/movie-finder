import React from "react";
import MovieCard from "./MovieCard";

const MoviesRow = ({ movies, setWatchlist, setMovies }) => {
  return (
    <div className="flex w-[clamp(min-content,min-content,100%)] px-4 md:px-0 max-w-full mx-auto overflow-x-auto gap-4">
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
