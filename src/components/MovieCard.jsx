import React from "react";
import { AiFillStar } from "react-icons/ai";
const movie = {
  Title: "Guardians of the Galaxy Vol. 2",
  Year: "2017",
  Rated: "PG-13",
  Released: "05 May 2017",
  Runtime: "136 min",
  Genre: "Action, Adventure, Comedy",
  Director: "James Gunn",
  Writer: "James Gunn, Dan Abnett, Andy Lanning",
  Actors: "Chris Pratt, Zoe Saldana, Dave Bautista",
  Plot: "The Guardians struggle to keep together as a team while dealing with their personal family issues, notably Star-Lord's encounter with his father the ambitious celestial being Ego.",
  Language: "English",
  Country: "United States",
  Awards: "Nominated for 1 Oscar. 15 wins & 59 nominations total",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
  Ratings: [
    { Source: "Internet Movie Database", Value: "7.6/10" },
    { Source: "Rotten Tomatoes", Value: "85%" },
    { Source: "Metacritic", Value: "67/100" },
  ],
  Metascore: "67",
  imdbRating: "7.6",
  imdbVotes: "674,085",
  imdbID: "tt3896198",
  Type: "movie",
  DVD: "22 Aug 2017",
  BoxOffice: "$389,813,101",
  Production: "N/A",
  Website: "N/A",
  Response: "True",
};
const MovieCard = () => {
  return (
    <div className="flex flex-col  bg-radix-cyan3 hover:bg-radix-cyan4 border border-radix-slate6 hover:border-radix-slate7 rounded-md">
      <img
        src={movie.Poster}
        alt={`Poster for ${movie.Title}`}
        className="object-cover w-full"
      />{" "}
      <h3 className="text-md text-radix-cyan12">{movie.Title}</h3>
      <span className="text-xs italic text-radix-slate11 mt-0.5">
        {movie.Released}
      </span>
      <div className="flex justify-between mt-2">
        <span className="text-radix-slate11 text-sm">Imdb: </span>
        <div className="flex items-center">
          <span className="text-sm mr-0.6">{movie.imdbRating}</span>
          <AiFillStar className="text-radix-yellow9" />
        </div>
      </div>
      <button className="text-sm py-1 px-1 border border-radix-slate6 m-2 bg-radix-cyan7 hover:bg-radix-cyan8 hover:bg-border-radix-slate7">
        Add to Watchlist
      </button>
    </div>
  );
};

export default MovieCard;
