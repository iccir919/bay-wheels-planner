import React from "react";
import ReactDOM from "react-dom";

import BayWheelsPlanner from "../api/util";
const google = window.google;

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: []
    };
  }

  componentDidMount() {
    const node = ReactDOM.findDOMNode(this);
    this.map = new google.maps.Map(node, this.props.map);

    BayWheelsPlanner.directionsRenderer.setMap(this.map);
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.markers.length === 0 ||
      prevProps.bikeType !== this.props.bikeType
    ) {
      this.state.markers.forEach(marker => marker.setMap(null));

      let markers = this.props.systemData[`${this.props.bikeType}Info`].map(
        element => {
          return new google.maps.Marker({
            position: { lat: element.lat, lng: element.lon },
            map: this.map
          });
        }
      );
      this.setState({
        markers
      });
    }
  }

  render() {
    return <div id="map-canvas">Map</div>;
  }
}

Map.defaultProps = {
  map: {
    center: new google.maps.LatLng(37.7577, -122.4376),
    zoom: 12,
    disableDefaultUI: true
  }
};

export default Map;
