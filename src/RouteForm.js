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
            <form id="directions-form">
				<div className="field-section">
					<label htmlFor="directions-start">From</label>
					<input 
                        name="start"
                        placeholder="Start" 
                        required 
                        onChange={this.handleChange}
                    />
				</div>
                <div className="field-section">
					<label htmlFor="directions-end">To</label>
                    <input 
                        name="end"
                        onChange={this.handleChange} 
                        placeholder="Destination" 
                        required 
                    />
				</div>
                <div className="form-footer">
                    <button>Go</button>
                </div>
            </form>
        );
    }
}

export default RouteForm;