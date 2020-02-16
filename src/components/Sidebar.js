import React from "react";
import TripForm from "./TripForm";

const Sidebar = function(props) {
  return (
    <div id="sidebar">
      <header className="text-center">
        <h1>Bay Wheels Planner</h1>
      </header>
      <TripForm
        bikeType={props.bikeType}
        handleBikeTypeChange={props.handleBikeTypeChange}
      />
    </div>
  );
};

export default Sidebar;
