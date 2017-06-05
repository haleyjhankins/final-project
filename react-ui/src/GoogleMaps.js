import React from 'react';

class GoogleMaps extends React.Component {

    constructor(){
      super();
      this.state={
        locations: [
          {lat:95.7129, lng: 39.8282 },
          {lat: 95.7129, lng: 39.8282 }

        ]
      }
    }

  componentDidMount() {
    this.googleMap = new window.google.maps.Map(this.map, {
      center: { lat: 37.0902, lng: -95.7129 },
      zoom: 5
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
        <div ref={(map) => { this.map = map; }} style={{width: '100%', height: '400px'}}></div>
      </div>
    );
  }

}

export default GoogleMaps;
