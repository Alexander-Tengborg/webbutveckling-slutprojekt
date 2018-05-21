import React, { Component } from 'react';
import './MovieModal.css';

class MovieModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            curMovie: this.props.curMovie,
            movieDetails: []
        };

        this.getMovieDetails = this.getMovieDetails.bind(this);
    }

    componentDidUpdate(prevProps) {
        if(prevProps.curMovie != this.props.curMovie) {
            this.getMovieDetails();
        }
    }
    

    getMovieDetails() {
        fetch('https://api.themoviedb.org/3/movie/' + this.props.curMovie + '?api_key=e7c932bbbb81168a709224970c15e1a7&language=en-US&page=1')
        .then((response) => response.json())
        .then((responseJson) => {
            this.setState({movieDetails: responseJson});
        });
    }

    render() {
        return (
            <div id="modal-wrapper" onClick={this.props.hideModal}>
                <div id="movie-modal">
                    <h1>{this.state.movieDetails.title}</h1>
                    <p>{this.state.movieDetails.imdb_id}</p>
                    <p>{this.state.movieDetails.tagline}</p>

                </div>
            </div>
        )
    }
}

export default MovieModal;