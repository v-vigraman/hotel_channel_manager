import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Dashboard from './dashboard'

const styles = {
  root: {
    flexGrow: 1,
  },
};

function Home(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            Hotel Channel Management
          </Typography>
        </Toolbar>
      </AppBar>
      <div style={{marginTop:'20%',marginLeft:'30%',marginRight:'30%'}}>
            <Dashboard />
      </div>

    </div>
  );
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
