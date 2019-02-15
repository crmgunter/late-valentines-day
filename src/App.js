import React, { Component } from 'react';
import './App.css';
import Greeting from './components/Greeting'
import Valentine from './components/Valentine'

class App extends Component {
  render() {
    return (
      <div>
        <Greeting/>
        <Valentine/>
      </div>
    );
  }
}

export default App;
