import React, { Component } from 'react';
import logo from './drone-bleu.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>VelaAerial</h2>
        </div>
        <p className="App-intro">
          Welcome to this site. A web site. a Frank site. 
        </p>
      </div>
    );
  }
}

export default App;
