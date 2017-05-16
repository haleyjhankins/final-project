import React, { Component } from 'react';
import Query from './Query.js';
import Filter from './Filter.js';
import Players from './Players.js';
import Injuries from './Injuries.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Query />
        <Filter />
        <Players />
        <Injuries />
        <footer> <p className="footer-name">This app was built with: </p> <a href="https://www.mysportsfeeds.com/"><img src="sportsfeeds.png" alt="my sports feeds" /></a></footer>
      </div>
    );
  }
}

export default App;
