import React,{Component} from 'react';

import HomeBanner from './HomeBanner';
import Movie from './Movie';
import AddMovies from './AddMovies';

import '../../css/home.css';
import {initialMovies, additionalMovies} from './Movies';
import {Link} from 'react-router-dom'

class Home extends Component {
    constructor() {
        super();
        this.state = {
            movies: initialMovies
        };
        this.loadAdditionalMovies = this.loadAdditionalMovies.bind(this);
        this.addMovieToGallery = this.addMovieToGallery.bind(this); 
    }

    addNewMovie(e) {
        e.preventDefault();
        var movie =  {
            title: this.title.value,
            year: this.year.value,
            description: this.description.value,
            poster: this.poster.value
        };
        this.props.addMovie( movie );
    }

    addMovieToGallery(movie){
        const ts = Date.now(); 
        const newMovie = {};
        newMovie[ 'movie' + ts] = movie; 
        const currentMovies = { ...this.state.movies};
        const newMovies = Object.assign( currentMovies, newMovie ); 
        this.setState({ movies: newMovies});
    }

    loadAdditionalMovies() {
        var currentMovies = { ...this.state.movies };
        var newMovies = Object.assign( currentMovies, additionalMovies );
        this.setState({ movies: newMovies });
    }
      
    render(){
        return (
            <div id="home">
                <HomeBanner />
                <div className="container">
                    <div className="row">
                        <Link className="btn btn-outline-success btn-add" to="/add-movies">Add Movies</Link>
                    </div>
                    <div className="row">
                        {
                            Object
                                .keys(this.state.movies)
                                .map(key => <Movie key={key} meta={this.state.movies[key]} />)
                        }
                    </div>
                    <div className="row text-center">
                        <button onClick={this.loadAdditionalMovies} className="btn btn-outline-danger btn-load">Load more...</button>
                    </div>
                    <div className="row">
                        <AddMovies addMovie={this.addMovieToGallery} />
                    </div>
                </div>
            </div>
        );
    }
}
export default Home;