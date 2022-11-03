import React from "react";
import { AiFillStar } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";

const MovieInfo = ({ movie, setWatchlist, setFavorites }) => {
  const {
    Title,
    Released,
    Runtime,
    Actors,
    Awards,
    imdbRating,
    imdbID,
    Poster,
    Director,
    Plot,
    Genre,
  } = movie;

  const handleDelete = () => {
    setWatchlist((prevState) => prevState.filter((el) => el.imdbID !== imdbID));
  };

  const handleAdd = () => {
    setFavorites((prevState) => {
      //Adds movie if prevState does not contain it
      if (!prevState.filter((movie) => movie.Title === Title).length > 0) {
        toast.info(`Adde ${Title} to watchlist`, {
          position: "bottom-center",
          hideProgressBar: true,
          autoClose: 2000,
        });
        return [...prevState, movie];
      } else {
        toast.info(`Allready added ${Title} to favorites!`, {
          position: "bottom-center",
          hideProgressBar: true,
          autoClose: 2000,
        });

        return prevState;
      }
    });
  };
  return (
    <div className="w-full flex flex-col mt-4 pb-2 border-b border-radix-slate4">
      <div className="flex  items-end justify-center md:justify-start">
        <h2 className="text-center md:text-start">{Title}</h2>
        <p className="text-radix-slate11 italic text-sm text-center ml-2 md:text-start ">
          {Released}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="col-span-1 md:col-span-4 mx-auto md:mx-0">
          <img src={Poster} />
        </div>
        <div className="col-span-1 mt-2 md:mt-0 md:col-span-6 flex flex-col items-center text-center md:text-left justify-between">
          <div>
            <p className="text-sm">
              <span className="italic text-radix-slate11">Actors:</span>{" "}
              {Actors}
            </p>
            <p className="text-sm mt-2">
              <span className="italic text-radix-slate11">Director:</span>{" "}
              {Director}
            </p>
            <p className="text-sm mt-2">
              <span className="italic text-radix-slate11">Awards:</span>{" "}
              {Awards}
            </p>

            <p className="text-sm mt-2">
              <span className="italic text-radix-slate11">Genre:</span> {Genre}
            </p>
            <p className="text-sm mt-2">
              <span className="italic text-radix-slate11">Plot:</span> {Plot}
            </p>
            <p className="text-sm mt-2">
              <span className="italic text-radix-slate11">Runtime:</span>{" "}
              {Runtime}
            </p>
            <p className="text-sm mt-2 flex items-center w-full justify-center md:justify-start">
              <span className="italic text-radix-slate11 mr-1">
                Imdb Rating:
              </span>{" "}
              {imdbRating}
              <AiFillStar className="text-radix-yellow9" />
            </p>
          </div>
          <div>
            <button
              className="text-sm text-radix-slate11 py-1 px-1 border border-radix-slate6 mx-auto my-3 bg-radix-cyan7 hover:bg-radix-cyan8 hover:bg-border-radix-slate7 hover:text-radix-slate12"
              onClick={handleDelete}
            >
              Remove from watchlist
            </button>
            <button
              className="text-sm text-radix-slate11 py-1 px-1 border border-radix-slate6 mx-auto my-3 bg-radix-cyan7 hover:bg-radix-cyan8 hover:bg-border-radix-slate7 ml-2 hover:text-radix-slate12"
              onClick={handleAdd}
            >
              Add to favorites
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default MovieInfo;
