import React from "react";

class Chart extends React.Component {
    render() {
        const chartStyle = {
			height: 0 // initially zero height
        };
        let bars = '';
        return(
            <div className="chart" style={chartStyle}>
                {bars}
            </div>
        );
    }
}

export default Chart;