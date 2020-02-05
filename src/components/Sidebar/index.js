import React from "react";
import { withStyles } from '@material-ui/core/styles';

import Header from "../Header";
import BikeTypeSelector from "../BikeTypeSelector";

const styles = theme => ({
    formControl: {
        margin: theme.spacing(3),
    },
});

class Sidebar extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div id="sidebar">
                <Header />
                <form className={classes.formControl} noValidate autoComplete="off">
                    <BikeTypeSelector 
                        updateBikeType={this.props.updateBikeType}
                        bikeType={this.props.bikeType}
                    />
                </form>
            </div>
        )
    }
}

export default withStyles(styles)(Sidebar);