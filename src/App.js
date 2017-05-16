import React, { Component } from 'react';
import Query from './Query.js';
import Filter from './Filter.js';
import Players from './Players.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Query />
        <Filter />
        <Players />
      </div>
    );
  }
}

export default App;
