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
    if (prevState.markers.length === 0) {
      let markers = this.props.stationInfo.data.stations.map(stationInfo => {
        let marker = new google.maps.Marker({
          map: this.map,
          position: { lat: stationInfo.lat, lng: stationInfo.lon }
        });

        let stationStatus = this.props.stationStatus.data.stations.find(
          station => station.station_id === stationInfo.station_id
        );

        let contentString = `
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title text-center">${stationInfo.name}</h5>
            <div class="d-flex justify-content-around text-center">
              <h5 class="card-title pricing-card-title">${stationStatus.num_bikes_available} <br><small class="text-muted">classic</small></h5>
              <h5 class="card-title pricing-card-title">${stationStatus.num_ebikes_available} <br><small class="text-muted">ebikes</small></h5>
              <h5 class="card-title pricing-card-title">${stationStatus.num_docks_available} <br><small class="text-muted">open docks</small></h5>
            </div>
            <div class="d-flex justify-content-between h-100">
              <button type="button" class="btn btn-success">Start</button>
              <p class="h6 my-auto">Choose as</p>
              <button type="button" class="btn btn-danger">End</button>
            </div>
          </div>
        </div>
        `;

        let infowindow = new google.maps.InfoWindow({
          content: contentString
        });

        marker.addListener("click", function() {
          infowindow.open(this.map, marker);
        });

        return marker;
      });

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
