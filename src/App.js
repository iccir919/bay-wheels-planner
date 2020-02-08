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
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentDidMount() {
    }

    handleInputChange(event) {
        console.log(event.target);
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render() {
        return (
            <div>
                <Sidebar 
                    bikeType={this.state.bikeType}
                    handleInputChange={this.handleInputChange}
                />
                <Map />
            </div>
        );
    }
}

export default App;