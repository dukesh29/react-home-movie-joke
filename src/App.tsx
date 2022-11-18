import React from 'react';
import MovieList from "./components/MovieList/MovieList";
import JokeCard from "./components/JokeCard/JokeCard";
import './App.css';

function App() {

  return (
    <div className="App">
      <div className="movieList">
        <MovieList/>
      </div>
      <JokeCard/>
    </div>
  );
}

export default App;
