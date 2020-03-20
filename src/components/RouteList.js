import React from "react";
import Route from "./Route";

class RouteList extends React.Component {
  render() {
    const data = this.props.data;
    if (data && data.length) {
      const routes = this.props.data.map((d, i) => {
        const key = i + "" + d.route.bounds.toString();
        return (
          <li key={key} className={d.selected ? "selected" : ""}>
            <Route data={d} />
          </li>
        );
      });
      return (
        <div id="routes-container">
          <ul id="routes-list">{routes}</ul>
        </div>
      );
    } else if (!!data) {
      return (
        <div id="routes-container">
          <p>Oops, there are no routes found.</p>
        </div>
      );
    } else {
      return (
        <div id="routes-container">
          <p>Begin by clicking on station marker</p>
          <p>
            Then choose if you want the selected station to be the Start or the
            Destination of your trip
          </p>
        </div>
      );
    }
  }
}

export default RouteList;
