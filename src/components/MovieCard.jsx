import React from "react";
import { AiFillStar, AiFillDelete } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { ToastContainer, toast } from "react-toastify";

const MovieCard = ({ movie, setWatchlist, setMovies }) => {
  const { Poster, Title, imdbRating, Released } = movie;

  const handleAdd = () => {
    setWatchlist((prevState) => {
      //Adds movie if prevState does not contain it
      if (!prevState.filter((movie) => movie.Title === Title).length > 0) {
        toast.info("Added to watchlist", {
          position: "bottom-center",
          hideProgressBar: true,
          autoClose: 2000,
        });
        return [...prevState, movie];
      } else {
        toast.info("Already added to watchlist!", {
          position: "bottom-center",
          hideProgressBar: true,
          autoClose: 2000,
        });

        return prevState;
      }
    });
  };

  const handleDelete = () => {
    setMovies((prevState) => prevState.filter((el) => el.Title !== Title));
  };

  return (
    <div className="flex flex-col min-w-[300px] overflow-y-hidden bg-radix-cyan3 hover:bg-radix-cyan4 border border-radix-slate6 hover:border-radix-slate7 rounded-md w-44 ">
      <div className="relative">
        <img
          src={Poster}
          alt={`Poster for ${Title}`}
          className="object-cover w-full max-h-[400px] 2xl:max-h-[none] relative"
        />
        <div className="absolute right-0 top-0 cursor-pointer ">
          <ImCross
            onClick={handleDelete}
            className="text-radix-red7 p-1  w-6 h-8 opacity-60 hover:opacity-100"
          />
        </div>
      </div>
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
      <ToastContainer />
    </div>
  );
};

export default MovieCard;
