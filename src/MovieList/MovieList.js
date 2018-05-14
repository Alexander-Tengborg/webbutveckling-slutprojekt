import React, { Component } from 'react';
import Movie from './Movie.js';
import Movie2 from './Movie2.js';
import Movie3 from './Movie3.js';
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
        fetch('https://api.themoviedb.org/3/movie/' + this.props.type + '?api_key=e7c932bbbb81168a709224970c15e1a7&language=en-US&page=1')
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({movies: responseJson});
            });
    }

    onClick(t, e) {
        let newScroll = 0;
        let parent = e.target.parentElement;
        console.log(e.target.parentElement.clientWidth);
        if(t == 'r')  {
            if(parent.scrollWidth - (parent.scrollLeft + parent.clientWidth) > 40) {
                newScroll += e.target.parentElement.clientWidth;
            }

            //console.log("right: ", newScroll);
        } else {
            newScroll -= parent.clientWidth;
            //console.log("left: ", newScroll);
        }
        e.target.parentElement.scrollBy({left: newScroll, behavior: 'smooth'})
        console.log("newscroll", newScroll);
        console.log("outerwidth", window.outerWidth);
        console.log("scrollLeft", e.target.parentElement.scrollLeft);
        console.log("scrollwidth:", e.target.parentElement.scrollWidth);
        console.log("element.width", e.target.parentElement.style.height);
        console.log("---");
        //e.target.parentElement.scrollLeft += window.outerWidth;
    }

    onScroll(e) {
        let elements = e.target.children;
        //console.log(elements);
        for(let i = 0; i < elements.length; i++) {
            if(elements[i].tagName.toLowerCase() == "button") {
                if(elements[i].getAttribute("left")) elements[i].style.left = e.target.scrollLeft + 'px';
                if(elements[i].getAttribute("right")) elements[i].style.right = -e.target.scrollLeft + 'px';
            }
        }
        //console.log(e.target.scrollLeft);
    }

    render() {
        let movieList = "Could not load movies";

        if(this.state.movies.results) {
            if(this.props.type == "top_rated") {
                movieList = this.state.movies.results.map(data =>
                    <Movie key={data.id} data={data}/>
                )          
            } else if(this.props.type == "popular") {
                movieList = this.state.movies.results.map(data =>
                    <Movie2 key={data.id} data={data}/>
                )
            } else {
                movieList = this.state.movies.results.map(data =>
                    <Movie3 key={data.id} data={data}/>
                )
            }
        }

        return (
            <div>
                <h1 className="category-title">{this.props.title}</h1>
                <div className="movie-list" onScroll={this.onScroll}>
                    <button className="scroll-left" onClick={(e) => this.onClick("l", e)} left="true"><img src="left.png" /></button>
                        {movieList}
                    <button className="scroll-right" onClick={(e) => this.onClick("r", e)} right="true"><img src="right.png" /></button>
                </div>
            </div>
        );
    }
}

export default MovieList;