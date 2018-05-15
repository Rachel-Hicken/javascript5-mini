import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './Movie';

class App extends Component {
  constructor() {
    super()
    this.state = {
      badMovies: ['Battlerield Earth', 'Catwoman', 'The Last Airbender']
    }
  }

  render() {
    let suchBadMovies = this.state.badMovies.map( (movie, i) => {
      return <Movie key={i} movie={movie} />
    })

    return (
      <div className="App">
        <h1>Terrible Movies List:</h1>
        {suchBadMovies}
      </div>
    );
  }
}

export default App;
