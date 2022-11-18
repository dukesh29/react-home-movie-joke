import React, {Component} from 'react';
import MovieCart from "../MovieCart/MovieCart";
import {MovieType} from "../../types";
import './MovieList.css';

interface State {
  myMovies: MovieType[],
  myValue: string,
}

class MovieList extends Component<{}, State> {

  state: State = {
    myMovies: [
      {title: 'В погоне за счастьем', id: '1', num: 1},
      {title: 'Властелин колец', id: '2', num: 2},
      {title: 'Мстители:Финал', id: '3', num: 3},
    ],

    myValue: '',
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({myValue: event.target.value});
  }

  addMovie = () => {
    if(this.state.myValue !== '') {
      return this.setState(prevState => ({
        myMovies: [...prevState.myMovies, {
          id: Math.random().toString(),
          num: prevState.myMovies.length + 1,
          title: prevState.myValue,
        }]
      }))
    }else {
      alert('Type your movie!');
    }
  };

  changeInput = (event: React.ChangeEvent<HTMLInputElement>, id: string) => {
    this.setState(prev => ({
      myMovies: prev.myMovies.map(movie => {
        return movie.id === id ? {
          ...movie,
          title: event.target.value,
        } : movie;
      })
    }))
  };


  deleteEl = (id: string) => {
    this.setState(prev => ({
      myMovies: prev.myMovies.filter(movie => movie.id !== id),
    }))
  };


  render() {
    return (
      <>
        <div className="input-block">
          <div className="input-form">
            <input type="text" onChange={this.handleChange} value={this.state.myValue}/>
            <button type="button" onClick={this.addMovie}>Add</button>
          </div>
          <p>To watch list:</p>
        </div>
        {this.state.myMovies.map(movie => (
          <MovieCart id={movie.id} onDelete={() => this.deleteEl(movie.id)} title={movie.title} num={movie.num}
                     onChange={event => this.changeInput(event, movie.id)} key={movie.id}/>
        ))}
      </>
    );
  }
}

export default MovieList;