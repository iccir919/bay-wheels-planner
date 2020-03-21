import React from "react";
import Chart from "./Chart";
import BayWheelsPlanner from "../api/util";

class Route extends React.Component {
  render() {
    let data = this.props.data;
    let route = data.route;
    let leg = route.legs[0];
    let distance = leg.distance.value;
    let width = Math.ceil(
      (distance / BayWheelsPlanner.longestDistance) *
        BayWheelsPlanner.chartWidth
    );
    let domain = [0, BayWheelsPlanner.highestElevation];
    let height = Math.round(
      (BayWheelsPlanner.highestElevation - BayWheelsPlanner.lowestElevation) / 2
    );
    console.log(JSON.stringify(data));
    let elevations = data.elevations
      ? data.elevations.map(d => {
          let elevation = d.elevation;
          return {
            value: elevation,
            title: elevation + "feet"
          };
        })
      : null;

    return (
      <a>
        <div className="heading">Via {route.summary}</div>
        <Chart
          data={elevations}
          domain={domain}
          width={width}
          height={height}
        />
      </a>
    );
  }
}

export default Route;
