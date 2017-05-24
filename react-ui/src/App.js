import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class App extends Component {

  constructor() {
    super();

    this.state = {
      fullBallParkList: [],
      filteredBallParkList: [],
      inputValue: ''
    }
  }

  componentDidMount() {

    $.ajax({
      url: '/api/parks'
    })
    .done((data) => {
      this.setState({
        fullBallParkList: data.park //data, woo!
      })
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
      for (let i = 0; i < this.state.fullBallParkList.length; i++) {
        let ballpark = this.state.fullBallParkList[i];
        if (ballpark.parkname.indexOf(this.state.inputValue) > -1) {
          filteredList.push(ballpark);
        }
      }

      this.setState({
        inputValue: '',
        filteredBallParkList: filteredList
      });
    }
  }


  render() {
    let list;
    if (this.state.filteredBallParkList.length > 0) {
      list = this.state.filteredBallParkList.map((ballpark) => {
        return <tr>
          <td>{ballpark.parkname}</td>
          <td>{ballpark.city}</td>
          <td>{ballpark.state}</td>
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
        <table className="ballpark-list">
          <thead>
            <tr>
              <th>Ballpark Name</th>
              <th>City</th>
              <th>State</th>
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
