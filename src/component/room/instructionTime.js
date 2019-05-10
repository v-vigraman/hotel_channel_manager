import 'date-fns';
import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, TimePicker, DatePicker } from 'material-ui-pickers';

const styles = theme=>({
  root: {
    flexGrow: 1,
  },
  grid: {
    width: '60%',
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});


class InstructionTime extends React.Component {
  state = {
    startDate: new Date(),
    endDate:new Date()
  };

  handleDateChange = date => {
    this.setState({ selectedDate: date });
  };

  render() {
    const { classes } = this.props;
    const { startDate } = this.state.startDate;
    const {endDate} = this.state.endDate;
    return (
      <div className={classes.root}>
      <Grid container spacing={24}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid item xs={6} sm={3}>
          <TimePicker
              margin="normal"
              label="Earliest Check-in"
              value={startDate}
              onChange={this.handleDateChange}
              style={{width:'95%'}}
            />
          </Grid>
          <Grid item xs={6} sm={3}>
            <TimePicker
              margin="normal"
              label="Latest Check-out"
              value={endDate}
              onChange={this.handleDateChange}
              style={{width:'95%'}}
            />
          </Grid>
        </MuiPickersUtilsProvider>

      </Grid>
    </div>
    );
  }
}
InstructionTime.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(InstructionTime);
