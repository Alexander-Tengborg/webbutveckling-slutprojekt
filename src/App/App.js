import React, { Component } from 'react';
import Header from '../Header/Header.js';
import MovieList from '../MovieList/MovieList.js';
import MovieModal from '../MovieList/MovieModal.js';
//import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.showModal = this.showModal.bind(this);
    
    this.state = {
      curMovie: 0
    };
  }

  showModal(id) {
    this.setState({
      curMovie: id
    });

    let wrapper = document.getElementById("modal-wrapper");
    let modal = document.getElementById("movie-modal");

    wrapper.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    wrapper.style.visibility = "visible";

    modal.style.transform = "scale(1)";
  }


  hideModal() {
    let wrapper = document.getElementById("modal-wrapper");
    let modal = document.getElementById("movie-modal");

    wrapper.style.backgroundColor = "rgba(0, 0, 0, 0)";
    wrapper.style.visibility = "hidden";
    modal.style.transform = "scale(0.0)";
  }

  render() {
    return (
      <div>
        <Header />
        <MovieList showModal={this.showModal} type="top_rated" title="Top Rated" />
        <MovieList showModal={this.showModal} type="popular" title="Popular" />
        <MovieList showModal={this.showModal} type="upcoming" title="Upcoming" />
        <MovieModal curMovie={this.state.curMovie} hideModal={this.hideModal} />
      </div>
    );
  }
}

export default App;