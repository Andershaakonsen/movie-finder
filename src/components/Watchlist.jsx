import React from "react";
import MovieInfo from "./MovieInfo";

const Watchlist = ({ watchlist }) => {
  return (
    <div className="container h-screen mx-auto">
      {watchlist.map((movie) => (
        <MovieInfo movie={movie} />
      ))}
    </div>
  );
};

export default Watchlist;
