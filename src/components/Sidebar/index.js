import React from "react";
import { withStyles } from '@material-ui/core/styles';

import Header from "../Header";
import BikeKindSelection from "../BikeKindSelection";

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
                    <BikeKindSelection 
                        updateBikeKindSelection={this.props.updateBikeKindSelection}
                    />
                </form>
            </div>
        )
    }
}

export default withStyles(styles)(Sidebar);