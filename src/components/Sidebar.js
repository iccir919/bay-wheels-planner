import React from "react";
import DirectionsForm from "./DirectionsForm";
import Route from "./Route"

const Sidebar = function(props) {
  return (
    <div id="sidebar">
      <header className="text-center">
        <h1>Bay Wheels Planner</h1>
      </header>
      <DirectionsForm
        start={props.start}
        end={props.end}
        handleSubmit={props.handleSubmit}
      />
      <Route />
    </div>
  );
};

export default Sidebar;
