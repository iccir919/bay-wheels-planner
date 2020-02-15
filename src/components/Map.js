import React from "react";
import ReactDOM from "react-dom";

import BayWheelsPlanner from "../api/util";
const google = window.google;

class Map extends React.Component {
  componentDidMount() {
    const node = ReactDOM.findDOMNode(this);
    const map = new google.maps.Map(node, this.props.map);

    BayWheelsPlanner.directionsRenderer.setMap(map);
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
