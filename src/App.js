import React from "react";

import BayWheelsPlanner from "./api/util";
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
    this.getRoutes = this.getRoutes.bind(this);
    this.getElevations = this.getElevations.bind(this);
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
    this.getRoutes();
  }

  getRoutes() {
    const self = this;
    BayWheelsPlanner.directionsService.route(
      {
        origin: `${this.state.start.lat},${this.state.start.lon}`,
        destination: `${this.state.end.lat},${this.state.end.lon}`,
        travelMode: google.maps.TravelMode["BICYCLING"],
        provideRouteAlternatives: true,
        unitSystem: google.maps.UnitSystem.IMPERIAL
      },
      function(response, status) {
        if (status === google.maps.DirectionsStatus.OK) {
          let routes = response.routes;
          let longestDistance = 0;
          routes.forEach(function(route) {
            let distance = route.legs[0].distance.value;
            if (distance > longestDistance) longestDistance = distance;
          });
          BayWheelsPlanner.longestDistance = longestDistance;

          self.setState({
            routes: routes.map(function(route, i) {
              return {
                route: route,
                selected: i === 0
              };
            })
          });

          BayWheelsPlanner.directionsRenderer.setDirections(response);

          self.getElevations();
        } else {
          self.setState({
            routes: []
          });
        }
      }
    );
  }

  getElevations() {
    const self = this;
    let routes = this.state.routes;

    let routeElevations = routes.map((data) => {
      const route = data.route;
      const path = route.overview_path;
      const distance = route.legs[0].distance.value;
      const samples = Math.round(distance/BayWheelsPlanner.longestDistance * (BayWheelsPlanner.chartWidth/BayWheelsPlanner.chartBarWidth));

      return new Promise((resolve, reject) => {
        BayWheelsPlanner.elevationService.getElevationAlongPath({
					path: path,
					samples: samples
				}, function(result, status){
					if (status === google.maps.ElevationStatus.OK){
						resolve({
							data: data,
							elevations: result
						});
					} else {
						reject(status);
					}
				});
      })
    })

    Promise.all(routeElevations).then(results => { 
      let highestElevation = 0, lowestElevation = Infinity;

			results.forEach(function(result, i){
				let elevations = result.elevations;
				let prevElevation = elevations[0].elevation;
				let rise = 0, drop = 0;

				elevations.forEach(function(r){
					let elevation = r.elevation;
					if (elevation > prevElevation) rise += elevation - prevElevation;
					if (elevation < prevElevation) drop += prevElevation - elevation;
					prevElevation = elevation;

					if (elevation > highestElevation) highestElevation = elevation;
					if (elevation < lowestElevation) lowestElevation = elevation;
				});

				result.data.stats = {
					rise: rise,
					drop: drop
				};
				result.data.elevations = elevations;
			});

			BayWheelsPlanner.highestElevation = highestElevation;
			BayWheelsPlanner.lowestElevation = lowestElevation;
			self.setState({
				routes: routes
			});
    });
  }

  render() {
    return (
      <div>
        <Sidebar
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
