import React from "react";

class Chart extends React.Component {
  render() {
    const props = this.props;
    const chartStyle = {
      width: props.width,
      height: 0 // initially zero height
    };
    var bars = "";
    if (props.data) {
      bars = props.data.map((d, i) => {
        const style = {
          borderBottomWidth: (props.height * d.value) / props.domain[1]
        };
        const key = i + "-" + d.value;
        return (
          <div style={style} key={key}>
            <span>{d.title}</span>
          </div>
        );
      });
      chartStyle.height = props.height; // then grow the height, CSS transition applied here
    }
    return (
      <div className="chart" style={chartStyle}>
        {bars}
      </div>
    );
  }
}

export default Chart;
