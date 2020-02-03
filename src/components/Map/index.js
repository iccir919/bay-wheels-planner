import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
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
          
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
