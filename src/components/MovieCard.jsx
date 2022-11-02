import React from "react";
import { AiFillStar } from "react-icons/ai";

const MovieCard = ({ movie, setWatchlist }) => {
  const { Poster, Title, imdbRating, Released } = movie;

  const handleAdd = () => {
    setWatchlist((prevState) => {
      //Adds movie if prevState does not contain it
      if (!prevState.filter((movie) => movie.Title === Title).length > 0) {
        return [...prevState, movie];
      }
      return prevState;
    });
  };

  return (
    <div className="flex flex-col min-w-fit overflow-y-hidden bg-radix-cyan3 hover:bg-radix-cyan4 border border-radix-slate6 hover:border-radix-slate7 rounded-md w-44 ml-4">
      <img
        src={Poster}
        alt={`Poster for ${Title}`}
        className="object-fit w-full"
      />{" "}
      <div className="flex flex-col justify-between h-full">
        <div>
          <h3 className="text-md text-radix-cyan12 max-h-7 overflow-hidden">
            {Title}
          </h3>
        </div>

        <div className="flex flex-col ">
          <span className="text-xs italic text-radix-slate11 mt-1">
            {Released}
          </span>
          <div className="flex justify-between ">
            <span className="text-radix-slate11 text-sm">Imdb: </span>
            <div className="flex items-center">
              <span className="text-sm mr-0.6">{imdbRating}</span>
              <AiFillStar className="text-radix-yellow9" />
            </div>
          </div>
          <button
            onClick={handleAdd}
            className="text-sm py-1 px-1 border border-radix-slate6 mx-auto my-3 bg-radix-cyan7 hover:bg-radix-cyan8 hover:bg-border-radix-slate7"
          >
            Add to Watchlist
          </button>
        </div>
      </div>{" "}
    </div>
  );
};

export default MovieCard;
