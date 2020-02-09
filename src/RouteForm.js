import React from "react";


class RouteForm extends React.Component {
    render() {
      return (
        <form className="m-3">
            <h3>Choose your type:</h3>
            <div>
                <label className={`h6 mx-2 ${this.props.bikeType === "free" ? 'label-bold' : 'label-normal'}`}>
                    <input
                        className="mr-1" 
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
                <label className={`h6 mx-2 ${this.props.bikeType === "docked" ? 'label-bold' : 'label-normal'}`}>
                    <input
                        className="mr-1" 
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