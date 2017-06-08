import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      locations: [
        { name: 'Rangers', lat: 65, lng: 23 },
        { name: 'Astros', lat: 45, lng: 45 },
        { name: 'Zimbabwe', lat: 100, lng: -2 }
      ],
      selectedLat: undefined,
      selectedLng: undefined
    };
  }


  handleClick(loc) {
    this.setState({
      selectedLat: loc.lat,
      selectedLng: loc.lng
    });
  }

  handleKeyUp(evt) {
    console.log(evt.keyCode);
    if (evt.keyCode === 13) {
      console.log(evt.target.value);

      var foundThing = this.state.locations.find((loc) => evt.target.value === loc.name);
      if (foundThing !== undefined) {
        //place a marker
        //foundThing.lat and foundThing.lng
      }

    }
  }

  render() {

    const items = this.state.locations.map((loc, i) => {
      return <li key={loc.name + i} onClick={() => this.handleClick(loc)}>{loc.name}</li>
    });


    return (
      <div className="App">



        <div>Selected lat: {this.state.selectedLat}</div>
        <div>Selected lng: {this.state.selectedLng}</div>

        <ul>
          {items}
        </ul>


      </div>
    );
  }
}

export default App;
