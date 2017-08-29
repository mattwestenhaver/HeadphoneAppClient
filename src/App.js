import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

import Headphones from './components/Headphones.js'

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
          <Route path='/headphones' component={Headphones} />
        </div>
      </Router>
    );
  }
}

export default App;
