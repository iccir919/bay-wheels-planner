import React from "react";
import Map from "./MapComponents/Map";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stationStatus: [],
      stationLocation: [],
      freeBikeStatus : []
    }
  }

  componentDidMount() {
    fetch('https://gbfs.baywheels.com/gbfs/en/station_information.json')
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        this.setState({
          stationLocation: json.data.stations
        })
      });
  }

  render() {
    return (
      <div>
        <Map stationLocation={this.state.stationLocation} />
        <div id="sidebar"></div>
      </div>
    ); 
  }
}

export default App;
