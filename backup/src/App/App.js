import React, { Component } from 'react';
import Header from '../Header/Header.js';
import MovieList from '../MovieList/MovieList.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MovieList />
      </div>
    );
  }
}

export default App;
