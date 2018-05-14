import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
    constructor(props) {
        super(props);
    }

    onMouseEnter(e) {
        e.target.width = 300;
        e.target.height = 400;
        e.target.style.opacity = .2;
    }

    onMouseLeave(e) {
        e.target.width = 200;
        e.target.height = 300;
        e.target.style.opacity = 1;
    }

    render() {
        let data = this.props.data;
        let img_width = 200;
        let img_height = 300;
        let img_path = 'https://image.tmdb.org/t/p/w' + 500 + data.poster_path;
        return (
            <div className="movie-wrapper">
                <img alt={data.title} src={img_path} width={img_width} height={img_height} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}></img>
                <div className="test">
                re
                </div>
            </div>
        );
    }
}

export default Movie;