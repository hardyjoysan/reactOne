import React,{Component} from 'react';

class Movie extends Component{
    render(){
        return(
            <div className="col-3">
                <div className="card">
                    <img className="card-img-top" src={ this.props.meta.poster } alt={ this.props.meta.title } width="200px" />
                    <div className="card-body">
                        <h5 className="card-title">{ this.props.meta.title }</h5>
                        <p className="card-text">{ this.props.meta.description }</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">({ this.props.meta.year })</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Movie;
