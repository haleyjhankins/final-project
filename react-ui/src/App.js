import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Players from './Players';
import Injuries from './Injuries';
import Query from './Query.js';
import Filter from './Filter.js';

class App extends Component {

  constructor(){
    super();

    this.state= {
      fullPersonList: [],
      filteredPersonList: [],
      inputValue: ''
    }
  }

  componentDidMount() {
    $.ajax({
      url: '/api/player-data'
    })
    .done((data) => {
      this.setState({
        fullPersonList: data.players
      })
    });
  }

  handleKeyUp(evt) {
    if(evt.keyCode ===13){

      const filteredList = [];
      for (let i=0; i < this.state.fullPersonList.length; i++) {
        let person= this.state.fullPersonList[i];
        if (person.player.indexOf(this.state.inputValue) > -1) {
          filteredList.push(person);
        }
      }

      this.setState({
        inputValue: '',
        filteredPersonList: filteredList
      });
    }
  }


  render() {
    return (
      <Router>
        <div className="App">


            <button className="players-button">
              <Link to="/players">Players  </Link>
            </button>

            <button className="injuries-button">
              <Link to="/injuries">Injuries</Link>
            </button>

          <Route path="/players" component={Players} />
          <Route path="/injuries" component={Injuries} />

        </div>
      </Router>
    );
  }
}

export default App;
