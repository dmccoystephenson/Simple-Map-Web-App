import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <body>
        <div class="centered-horizontally">
          <h1>Map View</h1>
          <div id="mapViewDiv"></div>
          <p>This is a map, the source for which can be found <a href="https://developers.arcgis.com/javascript/latest/sample-code/webmap-basic/">here</a>.</p>
        </div>
      </body>
    );
  }
}

export default App;
