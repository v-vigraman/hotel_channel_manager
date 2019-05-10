import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import {NavLink} from 'react-router-dom'
import AddToQueue from '@material-ui/icons/AddToQueue';
import Home from '@material-ui/icons/Home';

const styles = {
  root: {
    width: 500,
  },
};

class Dashboard extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
        className={classes.root}
      >
        <NavLink to="/channel"> <BottomNavigationAction label="Channel"  icon={<AddToQueue />} /></NavLink>
        <NavLink to="/room"> <BottomNavigationAction label="Room" icon={<Home />} /></NavLink>
      </BottomNavigation>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);