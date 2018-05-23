import React,{Component} from 'react';

import HomeBanner from './HomeBanner';
import Movie from './Movie';

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
                </div>
            </div>
        );
    }
}
export default Home;