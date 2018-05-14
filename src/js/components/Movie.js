import React,{Component} from 'react';

class Movie extends Component{
    render(){
        return(
            <div className="col-md">
                <div className="card">
                    <img className="card-img-top" src={ this.props.poster } alt={ this.props.title } width="200px" />
                    <div className="card-body">
                        <h5 className="card-title">{ this.props.title }</h5>
                        <p className="card-text">{ this.props.description }</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">({ this.props.year })</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Movie;
