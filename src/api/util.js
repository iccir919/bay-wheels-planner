const google = window.google;

const BayWheelsPlanner = {
  directionsService: new google.maps.DirectionsService(),
  directionsRenderer: new google.maps.DirectionsRenderer(),
  elevationService: new google.maps.ElevationService(),
  longestDistance: 0,
  highestElevation: 0,
  lowestElevation: Infinity,
  chartWidth: 400,
  chartBarWidth: 2
};

export default BayWheelsPlanner;
