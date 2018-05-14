import React, { Component } from 'react';
import './Movie2.css';

class Movie2 extends Component {
    constructor(props) {
        super(props);
    }

    onMouseEnter(e) {
        e.target.style.width = 250 + 'px';
        e.target.style.height = 350 + 'px';
    }

    onMouseLeave(e) {
        e.target.style.width = 200 + 'px';
        e.target.style.height = 300 + 'px';
    }

    render() {
        let data = this.props.data;
        let img_width = 200;
        let img_height = 300;
        let img_path = 'https://image.tmdb.org/t/p/w' + 500 + data.poster_path;
        return (
            <div className="movie-wrappert">
                <img alt={data.title} src={img_path} width={img_width} height={img_height} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}></img>
            </div>
        );
    }
}

export default Movie2;