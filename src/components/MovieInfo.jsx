import React from "react";

const MovieInfo = ({ movie }) => {
  const { Title, Released, Runtime, Actors, Poster, Director, Plot, Genre } =
    movie;
  return (
    <div className="w-full flex flex-col mt-4 pb-2 border-b border-radix-slate4">
      <h2>{Title}</h2>
      <p className="text-radix-slate11 italic text-sm">{Released}</p>
      <div className="flex justify-between">
        <div className>
          <img src={Poster} />
        </div>
        <div className="ml-4">
          <p>Actors</p>
        </div>
        <div className="ml-4">
          <p>Actors</p>
        </div>
      </div>
    </div>
  );
};

export default MovieInfo;
