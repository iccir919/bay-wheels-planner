import React from "react";
import Chart from "./Chart";

class Route extends React.Component {
    render() {
        const data = this.props.data;
        const route = data.route;
        const leg = data.legs[0];

        console.log("route", route);
        console.log("leg", leg);
        return (
            <a>
                <Chart />
            </a>
        );
    }
}

export default Route;