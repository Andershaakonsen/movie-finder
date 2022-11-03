import React from "react";
import { useState } from "react";
import { Rating } from "@mantine/core";
import { useRef } from "react";
// import ReactStars from "react-rating-stars-component";

const MovieFavorite = ({ movie, setFavorites }) => {
  const [areaText, setAreaText] = useState(
    //The function will only get invoked the first time the component rerenders and will calculate the initial state.
    () => (movie.hasOwnProperty("userReview") ? movie.userReview : null)
  );
  const [rating, setRating] = useState(() =>
    movie.hasOwnProperty("userRating") ? movie.userRating : null
  );

  const editedText = useRef();

  const [editText, setEditText] = useState(true);
  const { Title, imdbID, Poster } = movie;

  const handleEdit = () => {
    editedText.current = areaText;
    console.log("Edited text inside handleEdit: " + editedText.current);
    setEditText(true);
  };

  const handleUndo = () => {
    console.log("Edited text inside handle undo:" + editedText.current);
    setAreaText(editedText.current);
    setEditText(false);
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    setEditText(false);
    editedText.current = areaText;
    console.log("Edited text inise submit: " + editedText.current);
    setFavorites((prevState) => {
      return prevState.map((el) => {
        if (el.Title === Title) {
          console.log(el);
          console.log(editedText.current);
          return { ...el, userReview: editedText.current, userRating: rating };
        }
        return el;
      });
    });
  };

  return (
    <div className="border-b border-radix-slate6 pb-4">
      <h1 className="mt-4 flex justify-center md:block">{Title}</h1>
      <div className="grid w-full grid-cols-1 md:grid-cols-12 mt-1">
        <div className="col-span-1 md:col-span-4 flex justify-center md:block">
          <img src={Poster} alt={`Poster of ${Title}`} />
        </div>
        <form
          className="flex flex-col items-center mt-2 md:mt-0 md:block md:col-span-4"
          onSubmit={handleReviewSubmit}
        >
          <h3 className="text-radix-slate11">Your Review</h3>
          {editText ? (
            <textarea
              className="w-2/3 mt-2 mb-2 outline-none rounded-md bg-radix-slate3 p-1 "
              placeholder="Write a short review on why you like the movie"
              value={areaText}
              onChange={(e) => {
                console.log("Area Text: " + e.target.value);
                setAreaText(e.target.value);
              }}
            />
          ) : (
            <p className=" mr-2 border rounded-md border-radix-slate5 overflow-hidden mt-2 mb-2 p-1 italic">
              "{areaText}"
            </p>
          )}

          <div className="flex">
            {editText ? (
              <button
                onClick={handleUndo}
                type="button"
                className="text-sm text-radix-slate11 h-8 w-16  border border-radix-slate6 bg-radix-cyan7 hover:bg-radix-cyan8 hover:bg-border-radix-slate7 hover:text-radix-slate12"
              >
                Undo
              </button>
            ) : (
              <button
                type="button"
                className="text-sm text-radix-slate11 h-8 w-16 mt-2  border border-radix-slate6 bg-radix-cyan7 hover:bg-radix-cyan8 hover:bg-border-radix-slate7 hover:text-radix-slate12"
                onClick={handleEdit}
              >
                Edit
              </button>
            )}
          </div>
          <div className="md:col-span-4">
            <h3 className="text-radix-slate11 mt-2">Your Rating</h3>
            <Rating
              value={rating}
              onChange={(currValue) => setRating(currValue)}
              fractions={2}
              size="xl"
              count={10}
            />
            <p>
              <span className="text-radix-slate11">Rating:</span> {rating} / 10
            </p>
          </div>
          <button
            type="submit"
            className="text-sm mt-2 text-radix-slate11 h-8 w-16  border border-radix-slate6 bg-radix-cyan7 hover:bg-radix-cyan8 hover:bg-border-radix-slate7 hover:text-radix-slate12"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default MovieFavorite;
