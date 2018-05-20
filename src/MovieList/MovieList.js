import React, { Component } from 'react';
import Movie from './Movie.js';
import './MovieList.css';

class MovieList extends Component {
    constructor(props) {
        super(props);

        this.getMovies = this.getMovies.bind(this);
        this.state = {
            movies: [],
            scrollLeft: 0
        }
        this.getMovies();

        this.onResize = this.onResize.bind(this);
        this.onScroll = this.onScroll.bind(this);

        this.movieList = React.createRef();

        window.addEventListener("resize", this.onResize);

    }

    onResize() {
        this.movieList.current.scrollLeft = this.state.scrollLeft;
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

        if(t == 'r')  {
            if(parent.scrollLeft <= (parent.scrollWidth - parent.offsetWidth - 13)) { // if it is scrolled all the way to the right. why 13??
                newScroll += parent.clientWidth;
            }
        } else {
            newScroll -= parent.clientWidth;
        }
        parent.scrollBy({left: newScroll, behavior: 'smooth'})
    }

    onScroll(e) {
        let elements = e.target.children;
        for(let i = 0; i < elements.length; i++) {
            if(elements[i].tagName.toLowerCase() == "button") {
                let element = elements[i];
                if(element.getAttribute("left")) {
                    element.style.left = e.target.scrollLeft + 'px';
                    if(e.target.scrollLeft == 0 || window.screen.width < 500) {
                        element.style.visibility = "hidden";
                    } else {
                        element.style.visibility = "visible";
                    }
                } else if(element.getAttribute("right")) {
                    element.style.right = -e.target.scrollLeft + 'px';
                    if(e.target.scrollLeft >= (e.target.scrollWidth - e.target.offsetWidth - 13) || window.screen.width < 500) {
                        element.style.visibility = "hidden";
                    } else {
                        element.style.visibility = "visible";
                    }
                }
            }
        }
        this.setState({
            scrollLeft: e.target.scrollLeft
        });
    }
    render() {
        let movieList = "Could not load movies";

        if(this.state.movies.results) {
            movieList = this.state.movies.results.map(data =>
                <Movie showModal={this.props.showModal} key={data.id} data={data}/>
            )          
        }

        return (
            <div>
                <h1 className="category-title">{this.props.title}</h1>
                <div className="movie-list" ref={this.movieList} onScroll={this.onScroll}>
                    <button className="scroll-left" onClick={(e) => this.onClick("l", e)} left="true">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 20 20">
                            <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" fill="#f2f2f2" transform="translate(20, 0) scale(-1, 1)"/>
                        </svg>
                    </button>
                        {movieList}
                    <button className="scroll-right" onClick={(e) => this.onClick("r", e)} right="true">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 20 20">
                            <path d="M8.122 24l-4.122-4 8-8-8-8 4.122-4 11.878 12z" fill="#f2f2f2"/>
                        </svg>
                    </button>
                </div>
            </div>
        );
    }
}

export default MovieList;