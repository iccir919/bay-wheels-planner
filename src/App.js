import React from "react";
import Map from "./Map"
import Sidebar from "./Sidebar";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
			start: '',
			end: '',
			routes: null,
        }
    }

    render() {
        return (
            <div>
                <Map />
                <Sidebar />
            </div>
        );
    }
}

export default App;