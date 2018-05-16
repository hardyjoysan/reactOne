import React,{Component} from 'react';

import HomeBanner from './HomeBanner';
import Movie from './Movie';
import {initialMovies, additionalMovies} from '../../Movies';

class Home extends Component {
    constructor() {
        super();
        
        this.state = {
            movies: initialMovies
        };
    }
      
    render(){
        return (
            <div id="home">
                <HomeBanner />
                <div className="container">
                    <div className="row">
                        {
                        Object
                            .keys(this.state.movies)
                            .map(key => <Movie key={key} meta={this.state.movies[key]} />)
                        }
                    </div>
                    <div className="row">
                        <div className="text-center">
                            <button onClick={this.loadAdditionalMovies} className="btn btn-outline-danger">Load more...</button>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}
export default Home;