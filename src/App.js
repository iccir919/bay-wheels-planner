import React from "react";
import Map from "./components/Map";
import Sidebar from "./components/Sidebar";
import systemStatusUpdate from "./api/SystemAPI";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: "",
      end: "",
      routes: null,
      bikeType: "station",
      systemData: {
        stationInfo: [],
        freeInfo: [],
        stationStatus: []
      }
    };
    this.handleBikeTypeChange = this.handleBikeTypeChange.bind(this);
  }

  componentDidMount() {
    systemStatusUpdate().then(([stationInfo, stationStatus, freeBikeInfo]) => {
      this.setState({
        systemData: {
          stationInfo: stationInfo.data.stations,
          stationStatus: stationStatus.data.stations,
          freeInfo: freeBikeInfo.data.bikes
        }
      });
    });
  }

  handleBikeTypeChange() {
    this.setState(prevState => {
      return {
        bikeType: prevState.bikeType === "station" ? "free" : "station"
      };
    });
  }

  render() {
    return (
      <div>
        <Sidebar
          bikeType={this.state.bikeType}
          handleBikeTypeChange={this.handleBikeTypeChange}
        />
        <Map
          bikeType={this.state.bikeType}
          systemData={this.state.systemData}
        />
      </div>
    );
  }
}

export default App;
