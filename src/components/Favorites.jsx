import React from "react";
import MovieInfo from "./MovieInfo";

const Favorites = ({ favorites, Favorites }) => {
  return (
    <div>
      Favorites
      {favorites.map((el) => (
        <MovieInfo movie={el} />
      ))}
    </div>
  );
};

export default Favorites;
