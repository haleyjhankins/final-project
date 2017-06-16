import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import GoogleMaps from './GoogleMapsChange.js'


class App extends Component {

  constructor() {
    super();

    this.state = {
      fullStadiumList: [],
      filteredStadiumList: [],
      inputValue: ''
    }
  }

  clearMarkers(){
    this.setState({
      fullStadiumList: this.state.fullStadiumList,
      filteredStadiumList: [],
      inputValue: ''
    });
  }

  componentDidMount() {
    //using fetch:
    fetch('/api/mlbstadiumdata')
      .then((response)=> response.json())
      .then((data) => {
        this.setState({
          fullStadiumList:data.mlbstadiumdata
        })
      });

    // $.ajax({
    //   url: '/api/mlbstadiumdata'
    // })
    // .done((data) => {
    //   this.setState({
    //     fullStadiumList: data.mlbstadiumdata //data, woo!
    //   })
    //   console.log("data?", data);
    // });
  }

  handleChange(evt) {

    this.setState({
      inputValue: evt.target.value,
    });
  }

  handleKeyUp(evt) {
    if (evt.keyCode === 13) {
      console.log(this.state.inputValue);
      const filteredList = this.state.fullStadiumList.filter((stadium) => {
        return stadium.state.toLowerCase().trim() == this.state.inputValue.toLowerCase();
      });
      // for (let i = 0; i < this.state.fullStadiumList.length; i++) {
      //   let stadium = this.state.fullStadiumList[i];
      //   if (stadium.state.indexOf(this.state.inputValue) > -1) {
      //     filteredList.push(stadium);
      //   }
      // }
      this.setState({
        inputValue: '',
        filteredStadiumList: filteredList
      });

      }
    }





  render() {

    console.log('filtered list in render', this.state.filteredStadiumList);
    let list;
    if (this.state.filteredStadiumList.length > 0) {
      list = this.state.filteredStadiumList.map((stadium) => {
        return <tr key={stadium.latitude}>
            <td  className="stad-name">{stadium.name}</td>
            <td  className="city-name">{stadium.city}</td>
            <td  className="state-name">{stadium.state}</td>
            <td  className="team-name">{stadium.team}</td>
            <td  className="opened-date">{stadium.opened}</td>
            <td  className="capass">{stadium.seatingCapacity}</td>
        </tr>
      });
    }

    return (
      <div className="App">
        <input placeholder="State"
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
              <th className="cap">Capacity</th>
            </tr>
          </thead>
          <tbody>
            {list}
          </tbody>
        </table>

        </div>
        <GoogleMaps filteredStadiumList={this.state.filteredStadiumList} clearMarkers={() => {this.clearMarkers()}} />

      </div>
    );
  }
}

export default App;
