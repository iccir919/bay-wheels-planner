import React from "react";
import Header from "./Header"
import RouteForm from "./RouteForm";

const Sidebar = function(props){
    return (
        <div id="sidebar">
            <Header />
            <RouteForm />
        </div>
    );
}

export default Sidebar;