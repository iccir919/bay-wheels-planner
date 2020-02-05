import React from "react";
import Map from "../Map";
import Sidebar from "../Sidebar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stationInfo: [],
      stationStatus: [],
      freeBikeStatus : [],
      bikeType: 'freebike'
    }
  }

  componentDidMount() {
    this.systemStatusUpdate();
  }

  updateBikeType = () => {
    this.setState((state) => {
      return {bikeType: state.bikeType === 'freebike' ? 'docked' : 'freebike'}
    });
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

  render() {
    return (
      <div>
        <Map 
          stationInfo={this.state.stationInfo}
          stationStatus={this.state.stationStatus}
          freeBikeStatus ={this.state.freeBikeStatus}
          bikeKindSelection={this.state.bikeKindSelection}
        />
        <Sidebar 
          bikeType={this.state.bikeType}
          updateBikeType={this.updateBikeType}
        />
      </div>
    ); 
  }
}

export default App;
