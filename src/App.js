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
      stationInfo: [],
      stationStatus: []
    };
  }

  componentDidMount() {
    systemStatusUpdate().then(([stationInfo, stationStatus]) => {
      this.setState({
        stationInfo,
        stationStatus
      });
    });
    window.onhashchange = this.hashChange;
  }

  render() {
    return (
      <div>
        <Sidebar />
        <Map
          stationInfo={this.state.stationInfo}
          stationStatus={this.state.stationStatus}
        />
      </div>
    );
  }
}

export default App;
