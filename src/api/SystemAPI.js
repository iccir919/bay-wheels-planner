const systemStatusUpdate = function() {
  return Promise.all([
    fetch("https://gbfs.baywheels.com/gbfs/en/station_information.json"),
    fetch("https://gbfs.baywheels.com/gbfs/en/station_status.json"),
    fetch("https://gbfs.baywheels.com/gbfs/en/free_bike_status.json")
  ]).then(([stationInfo, stationStatus, freeBikeStatus]) => {
    return Promise.all([
      stationInfo.json(),
      stationStatus.json(),
      freeBikeStatus.json()
    ]);
  });
};

export default systemStatusUpdate;
