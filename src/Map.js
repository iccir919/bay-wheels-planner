import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import config from "./config.json";

const mapStyles = {
    position: 'relative',
    width: '100%',
    height: '100%'
};

class GoogleMap extends Component {
  render() {
    let markers = [];
    if (this.props.bikeType === "free") {
      markers = this.props.freeBikeStatus.map((bike) => {
        return (
          <Marker 
            key={bike.bike_id}
            position={{lat: bike.lat, lng: bike.lon}} 
          />
        );
      })
    } else if (this.props.bikeType === "docked") {
      markers = this.props.stationInfo.map((station) => {
        return (
          <Marker
            position={{lat: station.lat, lng: station.lon}}
          />
        );
      })
    }
    return (
        <div id="map">
            <Map
                google={this.props.google}
                zoom={14}
                style={mapStyles}
                initialCenter={{
                lat: 37.7749,
                lng: -122.4194
                }}
            >
              {markers}
            </Map>
        </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: config.GOOGLE_MAPS_API_KEY
})(GoogleMap);