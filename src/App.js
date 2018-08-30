import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dictionary from './Dictionaryapp.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Dictionary/>
      </div>
    );
  }
}

export default App;
