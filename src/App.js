import React, { useState } from 'react';
import NavBar from './Components/NavBar';
import MovieList from './Components/MovieList';
import {movieContainer} from './Components/movieContainer';
import AddMovie from "./Components/AddModal/AddMovie";
import SearchMovie from "./Components/SearchMovie";
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import MovieDescription from './Components/MovieDescription';


function App() {
  const [movieData, setMovieData] = useState(movieContainer);
  const [ratingMovie, setRatingMovie] = useState(1);
  const [movieSearch, setMovieSearch] = useState("");
  const adding = (e, newMovie) => {
    e.preventDefault();
    setMovieData([...movieData, newMovie]);
  };
  

  return (
   <Router>
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path="/">
      <AddMovie adding={adding} />
      <div style={{ cursor: "pointer" }}>
        <SearchMovie
          setMovieSearch={setMovieSearch}
          ratingMovie={ratingMovie}
          setRatingMovie={setRatingMovie}
        />
      </div>
      <MovieList  
      movieData={movieData} 
      ratingMovie={ratingMovie} 
      movieSearch={movieSearch}
      />
      </Route>
      <Route exact path="/film/:userId">
        <MovieDescription/>
      </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;




    
    
   
    