import React from "react";

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.map = React.createRef();
    }

	componentDidMount(){
        this.map = new window.google.maps.Map(document.getElementById('map'), {
            center: {lat: -34.397, lng: 150.644},
            zoom: 8
        });
	}

    render() {
        return (
            <div id="map" ref={this.map}>
                <h2>This is a map</h2>
            </div>
        );
    }
}

export default Map;
