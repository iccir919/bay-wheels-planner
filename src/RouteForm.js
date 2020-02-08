import React from "react";


class RouteForm extends React.Component {
    render() {
      return (
        <form className="m-3">
            <h3>Choose your type:</h3>
            <div>
                <label>
                    <input
                        className="mx-2"
                        name="bikeType"
                        type="radio"
                        value="free"
                        onChange={this.props.handleInputChange} 
                        checked={this.props.bikeType === "free"}
                    />
                        ⚡ Electric free bike
                </label>
            </div>
            <div>
                <label>
                    <input 
                        className="mx-2"
                        name="bikeType"
                        type="radio"
                        value="docked"
                        onChange={this.props.handleInputChange} 
                        checked={this.props.bikeType === "docked"}
                    />
                        🚲 Traditional docked bike
                </label>
            </div>
        </form>
      );
    }
  }

  export default RouteForm;