import React from "react";
import Map from "./components/Map";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: "",
      end: "",
      routes: null
    };
  }
  render() {
    return (
      <div>
        <Map />
      </div>
    );
  }
}

export default App;
