import React from 'react';

class GoogleMaps extends React.Component {

  // constructor() {
  //   super();
  //   this.state = {
  //     locations: [
  //       { lat: -34.397, lng: 150.644 },
  //       { lat: -34.297, lng: 150.842 }
  //     ]
  //   }
  // }

  componentDidMount() {
    this.googleMap = new window.google.maps.Map(this.map, {
      center: { lat: 39.8282, lng: -98.5795 },
      zoom: 4
    });






  }
  //Put markers in based on state
  loadMarkers(){
  this.props.filteredStadiumList.forEach((loc) => {
    console.log(loc);
    var marker = new window.google.maps.Marker({
      position: {lat:parseInt(loc.latitude), lng:parseInt(loc.longitude) },
      map: this.googleMap,
      title: 'This where the park at!'

    });
     marker.setMap(this.map);

  });

  console.log(this.props);
}

  render() {
    this.loadMarkers();

    return (
      <div>
        <h1>Ballpark Finder</h1>

        <div ref={(map) => { this.map = map; }} style={{width: '100%', height: '400px'}}></div>
      </div>
    );
  }

}

export default GoogleMaps;
