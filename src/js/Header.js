import React, {Component} from 'react';

import {Link} from 'react-router-dom'

class Header extends Component{
	render(){
		return(
			<div className="App">
				<div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
					<h5 className="my-0 mr-md-auto font-weight-normal">{this.props.sitename}</h5>
					<nav className="my-2 my-md-0 mr-md-3">
					<Link className="p-2 text-dark" to="/">Home</Link>
					<Link className="p-2 text-dark" to="/blog">Blog</Link>
					<Link className="p-2 text-dark" to="/enterprise">Enterprise</Link>
					<Link className="p-2 text-dark" to="/support">Support</Link>
					<Link className="p-2 text-dark" to="/pricing">Pricing</Link>
					</nav>
					<a className="btn btn-outline-primary" href="#">Sign up</a>
				</div>
			</div>
		);
	}
}

export default Header;