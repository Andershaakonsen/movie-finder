import React from "react";
import MovieInfo from "./MovieInfo";

const Watchlist = ({ watchlist, setWatchlist, setFavorites }) => {
  return (
    <div className="container h-screen mx-auto">
      {watchlist.map((movie) => (
        <MovieInfo
          movie={movie}
          setWatchlist={setWatchlist}
          key={movie.imdbID}
          setFavorites={setFavorites}
        />
      ))}
    </div>
  );
};

export default Watchlist;
