import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import config from "./config.json";

const mapStyles = {
    position: 'relative',
    width: '100%',
    height: '100%'
};

class GoogleMap extends Component {
  render() {
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
            />
        </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: config.GOOGLE_MAPS_API_KEY
})(GoogleMap);