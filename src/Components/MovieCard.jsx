import React  from "react";
import RateMovie from "./RateMovie";
import {Link} from 'react-router-dom';





const MovieCard = ({ movie: {id, title, rating, year, genre, image, synopsis}}) => {
  

  return (
    <Link className="card-link" to={`/film/${id}`}>
    <div className="Container">
      
      <div>
        <img src={image} alt="poster" style={{ width: "200px", height: "280px" }} />
      </div>
      <div className="movieDetails">
        <h2>{title}</h2>
        <RateMovie rating={rating} />
        <h5>
          {" "}
          {year} || {genre}
        </h5>
        <p style={{ fontSize: "13px", textAlign: "justify" }}>{synopsis}</p>
      </div>
      
    </div>
    </Link>
    
  );
};

export default MovieCard;




   