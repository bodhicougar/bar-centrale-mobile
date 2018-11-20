import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Sei keine Pfeifen.</h1>
          <p>
            Editiere <code>src/App.js</code> & speichere um neu anzuzeigen.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lerne React aber rasch!
          </a>
        </header>
      </div>
    );
  }
}

export default App;
