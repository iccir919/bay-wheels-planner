const K_WIDTH = 3;
const K_HEIGHT = 3;

const stationLocationMarker = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: 'absolute',
  width: K_WIDTH,
  height: K_HEIGHT,
  left: -K_WIDTH / 2,
  top: -K_HEIGHT / 2,

  border: '1px solid white',
  borderRadius: K_HEIGHT,
  backgroundColor: 'deeppink',
  textAlign: 'center',
  fontWeight: 'bold',
  padding: 3.5
};

export {stationLocationMarker};