import React, { Component } from 'react';
import './App.css';
import MapView from './map/MapView.js';

class App extends Component {
  render() {
    return (
      <body>
        {< MapView />}
      </body>
    );
  }
}

export default App;
