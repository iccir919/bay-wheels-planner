import React from "react";
import Map from "./Map"
import Sidebar from "./Sidebar";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            routes: null,
            bikeType: 'free'
        }
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <Sidebar />
                {/* <Map /> */}
            </div>
        );
    }
}

export default App;