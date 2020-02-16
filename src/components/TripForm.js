import React from "react";

class TripForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startLocation: "",
      endLocation: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  render() {
    return (
      <form className="container">
        <div className="form-group d-flex justify-content-between">
          <label className="pt-2">Bike pick-up/drop-off sort</label>
          <div class="btn-group btn-group-toggle" data-toggle="buttons">
            <label
              className={`btn btn-secondary ${
                this.props.bikeType === "free" ? "active" : ""
              }`}
            >
              <input
                onChange={this.props.handleBikeTypeChange}
                type="radio"
                name="bikeType"
                id="free"
                autocomplete="off"
              />
              No station
            </label>
            <label
              className={`btn btn-secondary ${
                this.props.bikeType === "station" ? "active" : ""
              }`}
            >
              <input
                onChange={this.props.handleBikeTypeChange}
                type="radio"
                name="bikeType"
                id="stationed"
                autocomplete="off"
              />
              At a station
            </label>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="startLocation">Start Location</label>
          <input
            value={this.state.startLocation}
            onChange={this.handleChange}
            type="text"
            className="form-control"
            id="startLocation"
            aria-describedby="startLocation"
            placeholder="Start"
          />
        </div>
        <div className="form-group">
          <label htmlFor="endLocation">End Location</label>
          <input
            value={this.state.endLocation}
            onChange={this.handleChange}
            type="text"
            className="form-control"
            id="endLocation"
            placeholder="End"
          />
        </div>
        <button type="submit" className="btn btn-primary float-right">
          Submit
        </button>
      </form>
    );
  }
}

export default TripForm;
