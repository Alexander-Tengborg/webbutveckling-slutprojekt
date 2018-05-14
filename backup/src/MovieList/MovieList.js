import React, { Component } from 'react';
import Movie from './Movie.js';
import './MovieList.css';

class MovieList extends Component {
    constructor(props) {
        super(props);

        this.getMovies = this.getMovies.bind(this);
        this.state = {
            movies: []
        }

        this.getMovies();
    }

    getMovies() {
        fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=e7c932bbbb81168a709224970c15e1a7&language=en-US&page=1')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({movies: responseJson});
            });
    }

    render() {
        let movieList = "Could not load movies";

        if(this.state.movies.results) {
            movieList = this.state.movies.results.map(data =>
                <Movie key={data.id} data={data}/>
            )
            console.log(movieList);
        }

        return (
            <div className="movie-list">
                {movieList}
            </div>
        );
    }
}

export default MovieList;