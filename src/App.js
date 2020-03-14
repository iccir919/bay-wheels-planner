import React from "react";

import Map from "./components/Map";
import Sidebar from "./components/Sidebar";
import systemStatusUpdate from "./api/BayWheelsAPI";
const google = window.google;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: {},
      end: {},
      routes: null,
      stationInfo: [],
      stationStatus: []
    };
    this.handleLocationSelection = this.handleLocationSelection.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    systemStatusUpdate().then(([stationInfo, stationStatus]) => {
      this.setState({
        stationInfo,
        stationStatus
      });
    });
  }

  handleLocationSelection(type, station, callback) {
    this.setState({
      [type]: station
    });
    callback();
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
        <Sidebar
          routes={this.state.routes}
          handleSubmit={this.handleSubmit}
          start={this.state.start}
          end={this.state.end}
        />
        <Map
          handleLocationSelection={this.handleLocationSelection}
          stationInfo={this.state.stationInfo}
          stationStatus={this.state.stationStatus}
        />
      </div>
    );
  }
}

export default App;
