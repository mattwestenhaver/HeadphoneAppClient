import React, { Component } from 'react';
import './App.css';
import axios from 'axios'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <h2>The Headphone Store</h2>
          </div>
          <p className="App-intro">
            Welcome to the headphone store...
          </p>
        </div>
      </Router>
    );
  }
}

export default App;
