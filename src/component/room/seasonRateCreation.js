import 'date-fns';
import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DatePicker } from 'material-ui-pickers';

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


class SeasonRateCreation extends React.Component {
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
          <Grid item xs={12} sm={6}>
          <DatePicker
              margin="normal"
              label="Start Date"
              value={startDate}
              onChange={this.handleDateChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <DatePicker
              margin="normal"
              label="End Date"
              value={endDate}
              onChange={this.handleDateChange}
            />
          </Grid>
        </MuiPickersUtilsProvider>

      </Grid>
    </div>
    );
  }
}
 SeasonRateCreation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SeasonRateCreation);
