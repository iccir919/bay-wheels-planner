import React from "react";
import Map from "./components/Map";
import systemStatusUpdate from "./api/SystemAPI";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: "",
      end: "",
      routes: null,
      bikeType: "station",
      systemData: {}
    };
  }

  componentDidMount() {
    systemStatusUpdate().then(([stationInfo, stationStatus, freeBikeInfo]) => {
      this.setState({
        systemData: {
          stationInfo: stationInfo.data.stations,
          stationStatus: stationStatus.data.stations,
          freeBikeInfo: freeBikeInfo.data.bikes
        }
      });
    });
  }

  render() {
    return (
      <div>
        <Map
          bikeType={this.state.bikeType}
          systemData={this.state.systemData}
        />
      </div>
    );
  }
}

export default App;
