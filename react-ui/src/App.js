import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class App extends Component {

  constructor() {
    super();

    this.state = {
      fullStadiumList: [],
      filteredStadiumList: [],
      inputValue: ''
    }
  }

  componentDidMount() {

    $.ajax({
      url: '/api/mlbstadiumdata'
    })
    .done((data) => {
      this.setState({
        fullStadiumList: data.mlbstadiumdata //data, woo!
      })
      console.log("data?", data);
    });


  }

  handleChange(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }

  handleKeyUp(evt) {
    if (evt.keyCode === 13) {

      const filteredList = [];
      for (let i = 0; i < this.state.fullStadiumList.length; i++) {
        let stadium = this.state.fullStadiumList[i];
        if (stadium.name.indexOf(this.state.inputValue) > -1) {
          filteredList.push(stadium);
        }
      }

      this.setState({
        inputValue: '',
        filteredStadiumList: filteredList
      });
    }
  }


  render() {
    let list;
    if (this.state.filteredStadiumList.length > 0) {
      list = this.state.filteredStadiumList.map((stadium) => {
        return <tr>
            <td className="stad-name">{stadium.name}</td>
            <td className="city-name">{stadium.city}</td>
            <td className="state-name">{stadium.state}</td>
            <td className="team-name">{stadium.team}</td>
            <td className="opened-date">{stadium.opened}</td>
            <td className="latit">{stadium.latitude}</td>
            <td className="longit">{stadium.longitude}</td>
            <td className="capass">{stadium.capacity}</td>





        </tr>
      });
    }

    return (
      <div className="App">
        <input
          onChange={(evt) => this.handleChange(evt)}
          onKeyUp={(evt) => this.handleKeyUp(evt)}
          value={this.state.inputValue} />
          <div className="table-div">
        <table className="stadium-list">
          <thead>
            <tr>
              <th className="name">Name</th>
              <th className="city">City</th>
              <th className="state">State</th>
              <th className="team">Team</th>
              <th className="opened">Opened</th>
              <th className="lat">Latitude</th>
              <th className="long">Longitude</th>
              <th className="cap">Capacity</th>
            </tr>
          </thead>
          <tbody>
            {list}
          </tbody>
        </table>
        </div>
      </div>
    );
  }
}

export default App;
