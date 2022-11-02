import React from "react";
import MoviesRow from "./MoviesRow";

const MovieContainer = ({ movies }) => {
  return (
    <div className="w-full flex justify-center mt-4 p-2">
      <MoviesRow movies={movies} />
    </div>
  );
};

export default MovieContainer;
