import React from "react";
import ReactDOM from "react-dom";

import BayWheelsPlanner from "../api/util";
import InfoWindow from "./InfoWindow";
const google = window.google;

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markers: [],
      showModal: false,
      selectedStationInfo: null,
      selectedStationStatus: null
    };
    this.handleShowModal = this.handleShowModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
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

        const self = this;
        marker.addListener("click", function() {
          self.handleShowModal(stationInfo);
        });

        return marker;
      });

      this.setState({
        markers
      });
    }
  }

  handleShowModal(stationInfo) {
    const stationStatus = this.props.stationStatus.data.stations.find(
      station => station.station_id === stationInfo.station_id
    );
    this.setState({
      showModal: true,
      selectedStationInfo: stationInfo,
      selectedStationStatus: stationStatus
    });
  }

  handleCloseModal(station) {
    this.setState({
      showModal: false
    });
  }

  render() {
    return (
      <div id="map-canvas">
        Map
        <InfoWindow
          show={this.state.showModal}
          handleClose={this.handleCloseModal}
          stationInfo={this.state.selectedStationInfo}
          stationStatus={this.state.selectedStationStatus}
          handleLocationSelection={this.props.handleLocationSelection}
        />
      </div>
    );
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
