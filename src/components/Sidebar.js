import React from "react";
import DirectionsForm from "./DirectionsForm";

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
    </div>
  );
};

export default Sidebar;
