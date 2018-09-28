import React, { Component } from 'react';
import './App.css';
import { Quotes } from "./quotes.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Quotes name="jaz"/>
        </header>
      </div>
    );
  }
}

export default App;
