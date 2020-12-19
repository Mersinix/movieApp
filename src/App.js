import React, { useState } from 'react';
import NavBar from './Components/NavBar';
import MovieList from './Components/MovieList';
import {movieContainer} from './Components/movieContainer';
import AddMovie from "./Components/AddModal/AddMovie";
import SearchMovie from "./Components/SearchMovie";
import './App.css';


function App() {
  const [movieData, setMovieData] = useState(movieContainer);
  const [ratingMovie, setRatingMovie] = useState(1);
  const [movieSearch, setMovieSearch] = useState("");
  const adding = (e, newMovie) => {
    e.preventDefault();
    setMovieData([...movieData, newMovie]);
  };

  return (
    <div className="App">
      <NavBar/>
      <AddMovie adding={adding} />
      <div style={{ cursor: "pointer" }}>
        <SearchMovie
          setMovieSearch={setMovieSearch}
          ratingMovie={ratingMovie}
          setRatingMovie={setRatingMovie}
        />
      </div>
      
      <MovieList movieData={movieData} ratingMovie={ratingMovie} movieSearch={movieSearch}/>
      
    </div>
  );
}

export default App;
