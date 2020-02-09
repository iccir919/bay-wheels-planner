import React from "react";
import Map from "./Map"
import Sidebar from "./Sidebar";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            routes: null,
            bikeType: 'free',
            stationStatus: [],
            freeBikeStatus : [],
            stationInfo: []
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentDidMount() {
        this.systemStatusUpdate();
    }

    systemStatusUpdate() {
        Promise.all([
          fetch('https://gbfs.baywheels.com/gbfs/en/station_information.json'), 
          fetch('https://gbfs.baywheels.com/gbfs/en/station_status.json'),
          fetch('https://gbfs.baywheels.com/gbfs/en/free_bike_status.json')
        ])
        .then(([stationInfo, stationStatus, freeBikeStatus]) => { 
           return Promise.all([stationInfo.json(), stationStatus.json(), freeBikeStatus.json()]) 
        })
        .then(([stationInfo, stationStatus, freeBikeStatus]) => {
          this.setState({
            stationInfo: stationInfo.data.stations,
            stationStatus: stationStatus.data.stations,
            freeBikeStatus: freeBikeStatus.data.bikes
          })
        });
    }

    handleInputChange(event) {
        console.log(event.target);
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <Sidebar 
                    bikeType={this.state.bikeType}
                    handleInputChange={this.handleInputChange}
                />
                <Map />
            </div>
        );
    }
}

export default App;