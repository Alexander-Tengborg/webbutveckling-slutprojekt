import React, { Component } from 'react';
import Header from '../Header/Header.js';
import MovieList from '../MovieList/MovieList.js';
//import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MovieList type="top_rated" title="Top Rated" />
        <MovieList type="popular" title="Popular" />
        <MovieList type="upcoming" title="Upcoming" />
      </div>
    );
  }
}

export default App;
