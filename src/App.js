import React, { Component } from 'react';
import './App.css';
import Greeting from './components/Greeting'
import Valentine from './components/Valentine'
import Gift from './components/Gift'
import ValentineTwo from './components/ValentineTwo';
import Trivia from './components/Trivia';

class App extends Component {
  render() {
    return (
      <div>
        <Greeting/>
        <Valentine/>
        <ValentineTwo/>
        <Gift/>
        <Trivia/>
      </div>
    );
  }
}

export default App;
