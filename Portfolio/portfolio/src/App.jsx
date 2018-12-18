import React, { Component } from 'react';
import Home from './components/Home';
import About from './components/About';
import NavBarO from './components/CustomNavBar';

import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBarO/>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
