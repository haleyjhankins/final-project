import React from 'react';

class GoogleMaps extends React.Component {

    constructor(){
      super();
      this.state={
        locations: [
          {lat:-34.397, lng: 150.644 },
          {lat: -34.397, lng: 150.842 }

        ]
      }
    }

  componentDidMount() {
    this.googleMap = new window.google.maps.Map(this.map, {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8
    });

    this.state.locations.forEach((loc) => {
      var marker = new window.google.maps.Marker({
        position: { lat: loc.lat, lng:loc.lng },
        map: this.googleMap,
        title: 'Baseball happens here!'
      });

    });

  }

  render() {
    return (
      <div>
        <h1>Test</h1>
        <div ref={(map) => { this.map = map; }} style={{width: '50%', height: '400px'}}></div>
      </div>
    );
  }

}

export default GoogleMaps;
