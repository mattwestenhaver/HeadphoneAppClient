import React, { Component } from 'react';
import './App.css';
import 'milligram'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import Home from './components/Home.js'
import Headphones from './components/Headphones.js'
import NewHeadphone from './components/NewHeadphone.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <h2>The Headphone Store</h2>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/headphones'>Headphones</NavLink>
            <NavLink to='/new'>Add Headphone</NavLink>
          </div>
          <Route exact path='/' component={Home} />
          <Route path='/headphones' component={Headphones} />
          <Route path='/new' component={NewHeadphone} />
        </div>
      </Router>
    );
  }
}

export default App;
