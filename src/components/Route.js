import React from "react";
import Chart from "./Chart";

class Route extends React.Component {
  render() {
    const data = this.props.data;
    const route = data.route;
    return (
      <a>
        <div className="heading">Via {route.summary}</div>
        <Chart />
      </a>
    );
  }
}

export default Route;
