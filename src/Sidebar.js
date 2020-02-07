import React from "react";
import Header from "./Header"
import RouteForm from "./RouteForm";

const Sidebar = function(){
    return (
        <div id="sidebar">
            <Header />
            <RouteForm />
        </div>
    );
}

export default Sidebar;