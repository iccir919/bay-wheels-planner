import React from "react";
import Sidebar from "./Sidebar";

let BayWheelsPlanner = {
	directionsService: new window.google.maps.DirectionsService(),
	directionsRenderer: new window.google.maps.DirectionsRenderer(),
	elevationService: new window.google.maps.ElevationService(),
	longestDistance: 0,
	highestElevation: 0,
	lowestElevation: Infinity,
	chartWidth: 400,
	chartBarWidth: 2
};

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            start: '',
			end: '',
			routes: null,
        }
    }
    render() {
        return (
            <div>
                <Sidebar />
            </div>
        );
    }
}

export default App;