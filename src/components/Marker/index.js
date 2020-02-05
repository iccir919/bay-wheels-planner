import React from "react";

const Marker = function(props) {
    console.log(props)
    return (
        <div>
            {props.bikeType === "freebike" ? "free bike" : "dock"}
        </div>
    );
}

export default Marker;