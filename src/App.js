import React, { Component } from 'react';
import './App.css';
import Dictionary from './Dictionaryapp.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
          <p className = "title">DICTIONARY APP</p>
          <Dictionary/>
      </div>
    );
  }
}

export default App;
