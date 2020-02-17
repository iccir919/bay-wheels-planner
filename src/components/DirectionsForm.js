import React from "react";

const DirectionsForm = function(props) {
  return (
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Starting location</label>
        <input
          readOnly
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder={props.start.name}
        />
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Ending location</label>
        <input
          readOnly
          type="password"
          class="form-control"
          id="exampleInputPassword1"
          placeholder={props.end.name}
        />
      </div>
      <small id="emailHelp" class="form-text text-muted">
        Select a location by clicking a marker on the map
      </small>
      <button type="submit" class="btn btn-primary float-right">
        Submit
      </button>
    </form>
  );
};

export default DirectionsForm;
