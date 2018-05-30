import React, {Component} from 'react';

class AddMovies extends Component{
    
    addNewMovie(e) {
        e.preventDefault();
        var movie =  {
            title: this.title.value,
            year: this.year.value,
            description: this.description.value,
            poster: this.poster.value
        };
        this.props.addMovie( movie );
        this.movieFormRef.reset();
    }

	render(){
		return(
            <div className="container">
                <form className="movie-form" ref={(el)=>this.movieFormRef=el} onSubmit={(e)=>this.addNewMovie(e)} autocomplete="on">
                    <h2>Add Movie</h2>
                    <div className="form-group">
                        <input ref={ ( input ) => this.title = input } type="text" placeholder="Title" className="form-control" required/>
                    </div>
                    <div className="form-group">
                        <input ref={ ( input ) => this.year = input } type="text" placeholder="Year" className="form-control" required/>
                    </div>
                    <div className="form-group">
                        <input ref={ ( input ) => this.poster = input } type="text" placeholder="Poster" className="form-control" required/>
                    </div>
                    <div className="form-group">
                        <textarea ref={ ( input ) => this.description = input } type="text" placeholder="Description" className="form-control" required></textarea>
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