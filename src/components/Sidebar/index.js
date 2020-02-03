import React from "react";

import Header from "../Header";
import BikeSelection from "../BikeSelection";

class Sidebar extends React.Component {
    render() {
        return (
            <div id="sidebar">
                <Header />
                <BikeSelection 
                    updateBikeKindSelection={this.props.updateBikeKindSelection}
                />
            </div>
        )
    }
}

export default Sidebar;