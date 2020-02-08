import React from "react";
import Header from "./Header"
import RouteForm from "./RouteForm";

const Sidebar = function(props){
    return (
        <div id="sidebar">
            <Header />
            <RouteForm 
                bikeType={props.bikeType}
                handleInputChange={props.handleInputChange}
            />
        </div>
    );
}

export default Sidebar;