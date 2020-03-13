import React from "react";

import Route from "./Route"

class RouteList extends React.Component {
    render() {
        const self = this;
        const data = this.props.data;
        if (this.props.data && this.props.data.length) {
            const routes = this.props.data.map(function(d, i){
                const key = i + '' + d.route.bounds.toString();
                return (
                    <li
                        key={key}
                        className={d.selected ? 'selected' : ''}
                    >
                        <Route 
                            data={d}
                        />
                    </li>
                )
            });
            return (
                <div id="routes-container">
                    <ul id="routes-list">
                        {routes}
                    </ul>
                </div>
            )
        } else {
            return (
                <div id="routes-container">
                    <p>Begin by entering the Start and End locations above.</p>
                </div>
            );
        }
    }
}

export default RouteList;