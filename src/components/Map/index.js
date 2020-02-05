import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import config from "../../config.json";

import Marker from "../Marker"


class Map extends Component {
  static defaultProps = {
    center: {
      lat: 37.769,
      lng: -122.4194
    },
    zoom: 13
  };

  render() { 

    let markers;
    console.log(this.props)
    if (this.props.bikeType === "freebike") {
      markers = this.props.freeBikeStatus.map((bike)=>{
        return <Marker 
          key={bike.bike_id}
          lat={bike.lat}
          lng={bike.lon}
          bikeType={this.props.bikeType}
        />
      })
    } else if (this.props.bikeType === "docked") {
      markers = this.props.stationInfo.map((station)=>{
        return <Marker 
          key={station.station_id}
          lat={station.lat}
          lng={station.lon}
          bikeType={this.props.bikeType}
        />
      })
    }

    return (
      <div id="map-canvas" style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: config.GOOGLE_MAPS_API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {markers}
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
