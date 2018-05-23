import React, {Component} from 'react';

class AddMovies extends Component{
	render(){
		return(
            <div className="container">
                <form className="movie-form">
                    <h2>Add Movie</h2>
                    <div className="form-group">
                        <input ref={ ( input ) => this.title = input } type="text" placeholder="Title" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input ref={ ( input ) => this.year = input } type="text" placeholder="Year" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input ref={ ( input ) => this.poster = input } type="text" placeholder="Poster" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <textarea ref={ ( input ) => this.description = input } type="text" placeholder="Description" className="form-control"></textarea>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-success">Add Movie</button>
                    </div>
                </form>
            </div>
		);
	}
}

export default AddMovies;