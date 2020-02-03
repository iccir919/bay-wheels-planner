import React from "react";

import Header from "../Header";
import BikeKindSelection from "../BikeKindSelection";

class Sidebar extends React.Component {
    render() {
        return (
            <div id="sidebar">
                <Header />
                <BikeKindSelection 
                    updateBikeKindSelection={this.props.updateBikeKindSelection}
                />
            </div>
        )
    }
}

export default Sidebar;