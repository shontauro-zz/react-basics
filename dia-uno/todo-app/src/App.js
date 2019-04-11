import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const message = "Bienvenido al micro curso React.js JSX";
    const name = "Fabian Leon"
    return (
      <div className="App">
        <h2>{message} {name} </h2>
      </div>
    );
  }
}

export default App;
