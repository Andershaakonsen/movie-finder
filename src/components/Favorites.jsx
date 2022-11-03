import React from "react";
import MovieFavorite from "./MovieFavorite";

const Favorites = ({ favorites, setFavorites }) => {
  return (
    <div className="container mx-auto">
      {favorites.map((movie) => (
        <MovieFavorite
          movie={movie}
          key={movie.imdbID}
          setFavorites={setFavorites}
        />
      ))}
    </div>
  );
};

export default Favorites;
