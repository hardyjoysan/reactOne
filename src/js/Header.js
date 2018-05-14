import React, {Component} from 'react';

import Home from './components/Home';
import Features from './components/Features';
import Enterprise from './components/Enterprise';
import Support from './components/Support';
import Pricing from './components/Pricing';

import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch,
	Redirect
  } from 'react-router-dom'

class Header extends Component{
	render(){
		return(
			<Router>
				<div className="App">
				<div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
					<h5 class="my-0 mr-md-auto font-weight-normal">ReactOne</h5>
					<nav class="my-2 my-md-0 mr-md-3">
					<Link className="p-2 text-dark" to="/">Home</Link>
					<Link className="p-2 text-dark" to="/features">Features</Link>
					<Link className="p-2 text-dark" to="/enterprise">Enterprise</Link>
					<Link className="p-2 text-dark" to="/support">Support</Link>
					<Link className="p-2 text-dark" to="/pricing">Pricing</Link>
					</nav>
					<a class="btn btn-outline-primary" href="#">Sign up</a>
				</div>

				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/features" component={Features} />
					<Route path="/enterprise" component={Enterprise} />
					<Route path="/support" component={Support} />
					<Route path="/pricing" component={Pricing} />
				</Switch>
				</div>
			</Router>
		);
	}
}

export default Header;