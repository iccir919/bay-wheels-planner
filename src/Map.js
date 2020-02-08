import React from "react";

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.map = React.createRef();
    }

	componentDidMount(){
        this.map = new window.google.maps.Map(document.getElementById('map'), {
            center: {lat: 37.7749, lng: -122.4194},
            zoom: 14
        });
	}

    render() {
        return (
            <div id="map" ref={this.map} />
        );
    }
}

export default Map;
