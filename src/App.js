/*
*Author= Chota Herrick Mpuku
*Dictionary App Assignment
*/

import React, { Component } from 'react';
import './App.css';
import Dictionary from './Dictionaryapp.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className = "titleBar">
          <p className = "title">DICTIONARY APP</p>
        </div>
        <Dictionary/>
      </div>
    );
  }
}

export default App;
