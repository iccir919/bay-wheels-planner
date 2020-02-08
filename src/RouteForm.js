import React from "react";

class RouteForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            start: '',
            end: ''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <form className="m-4">
                <h3>Step 1:</h3>
                <h5>Choose your bike type:</h5>
                <div class="form-check mb-3">
                    <input class="form-check-input" type="radio" name="bikeType" id="free" value="free" checked />
                    <label class="form-check-label" for="free">
                        ⚡ Electric free (no dock) bike
                    </label>
                </div>
                <div class="form-check mb-3">
                    <input class="form-check-input" type="radio" name="bikeType" id="docked" value="docked" />
                    <label class="form-check-label" for="docked">
                        🚲Tradional docked (at station) bike
                    </label>
                </div>
            </form>
        );
    }
}

export default RouteForm;