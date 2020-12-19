import React from "react";

const RateMovie = ({ rating, setRatingMovie }) => {
  const stars = (x) => {
    let starss = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= x) {
        starss.push(
          <span key={i} onClick={() => setRatingMovie(i)}>
            <i class="fas fa-star">★</i>
          </span>
        );
      } else {
        starss.push(
          <span key={i} onClick={() => setRatingMovie(i)}>
            <i class="far fa-star">☆</i>
          </span>
        );
      }
    }
    return starss;
  };
  return <div> {stars(rating)}</div>;
};

export default RateMovie;