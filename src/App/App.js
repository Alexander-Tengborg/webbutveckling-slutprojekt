import React, { Component } from 'react';
import Header from '../Header/Header.js';
import MovieList from '../MovieList/MovieList.js';
//import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    window.addEventListener("resize", this.onResize);
  }

  onResize() {
    var movieLists = document.getElementsByClassName("movie-list");

    for(var i = 0; i < movieLists.length; i++) {
      movieLists[i].scrollLeft = 0;
    }
  }

  render() {
    return (
      <div>
        <Header />
        <MovieList type="top_rated" title="Top Rated" />
        <MovieList type="popular" title="Popular" />
        <MovieList type="upcoming" title="Upcoming" />
        <div style={{height: '400px'}}></div>
      </div>
    );
  }
}

export default App;