import React from "react";

import Alert from "react-bootstrap/Alert";

const DirectionsForm = function(props) {
  return (
    <form>
      {props.start.region_id &&
      props.end.region_id &&
      props.start.region_id !== props.end.region_id ? (
        <Alert variant="danger">
          <Alert.Heading>Out of Bounds!</Alert.Heading>
          <p>
            Woah there, partner! It looks like you are trying to take a bike out
            of it's zone. <br />
            The start and end stations must be in the same region (San
            Francisco, East Bay, or San Jose).
          </p>
        </Alert>
      ) : null}
      <div className="form-group">
        <label className="badge badge-success" htmlFor="startingLocation">
          Starting location
        </label>
        <input
          readOnly
          className="form-control"
          id="startingLocation"
          aria-describedby="locationSelector"
          placeholder={props.start.name}
        />
      </div>
      <div className="form-group">
        <label className="badge badge-danger" htmlFor="endingLocation">
          Destination location
        </label>
        <input
          readOnly
          type="password"
          className="form-control"
          id="endingLocation"
          aria-describedby="locationSelector"
          placeholder={props.end.name}
        />
      </div>
    </form>
  );
};

export default DirectionsForm;
