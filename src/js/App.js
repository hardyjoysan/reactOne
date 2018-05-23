import React, { Component } from 'react';
import '../css/App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'


import Header from './Header';
import Home from './components/Home';
import Features from './components/Features';
import Enterprise from './components/Enterprise';
import Support from './components/Support';
import Pricing from './components/Pricing';
import AddMovies from './components/AddMovies';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header sitename="ReactOne" />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/features" component={Features} />
            <Route path="/enterprise" component={Enterprise} />
            <Route path="/support" component={Support} />
            <Route path="/pricing" component={Pricing} />
            <Route path="/add-movies" component={AddMovies} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
