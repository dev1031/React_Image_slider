import React, { Component } from 'react';
import './App.css';

import Slides from './components/Slides';

class App extends Component {
  render() {
    const { slides } = this.props;
    return (
      <div className="App">
        <Slides slides={slides} />
      </div>
    );
  }
}

export default App;
