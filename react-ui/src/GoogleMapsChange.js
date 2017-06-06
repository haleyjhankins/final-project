 import React from 'react';

class GoogleMapsChange extends React.Component {

  constructor() {
    super();

    this.markers = [];
  }

  componentDidMount() {
    this.googleMap = new window.google.maps.Map(this.map, {
      center: { lat: 32.7767, lng: -96.7970 },
      zoom: 5
    });
  }

  handleClick(lat, lng) {
    var marker = new window.google.maps.Marker({
      position: { lat: lat, lng: lng },
      map: this.googleMap,
      title: 'Hover over the marker to see this text!'
    });
    this.markers.push(marker);
  }

  handleClearMarkers() {
    for (let i = 0; i < this.markers.length; i++) {
      this.markers[i].setMap(null);
    }
    this.markers = [];
  }

  handleCenterpointClick(lat, lng) {
    this.googleMap.setCenter({ lat: lat, lng: lng });
  }

  render() {
    return (
      <div className="google-maps-change">

        <div ref={(map) => { this.map = map; }} style={{width: '50%', height: '400px', float: 'left'}}></div>

        <div style={{width: '40%', float: 'left'}}>
          <button onClick={() => this.handleClearMarkers()}>clear markers</button>


        </div>
      </div>
    );
  }


}

export default GoogleMapsChange;
