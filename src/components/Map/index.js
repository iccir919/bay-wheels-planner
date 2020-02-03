import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

import EbikeLocationMarker from "../EbikeLocationMarker";
import DockLocationMarker from "../DockLocationMarker";
import config from "../../config.json";


class Map extends Component {
  static defaultProps = {
    center: {
      lat: 37.769,
      lng: -122.4194
    },
    zoom: 13
  };

  render() { 
    return (
      <div id="map-canvas" style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: config.GOOGLE_MAPS_API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        {this.props.bikeKindSelection ===  "docked" ? 
          this.props.stationInfo.map((station) => {
            return <DockLocationMarker 
              lat={station.lat}
              lng={station.lon} 
              station={station} 
            /> 
          }) : this.props.freeBikeStatus.map((ebike) => {
            return <EbikeLocationMarker 
              lat={ebike.lat}
              lng={ebike.lon} 
              ebike={ebike} 
            /> 
          })
        }
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
