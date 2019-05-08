import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



const styles = theme => ({
  button: {
    display: 'block',
    marginTop: theme.spacing.unit * 2,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  formAlign:{
      display:'inline-block',
      width:'45%',
      margin:'1%'
  },
  textField:{
      width:'100%'
  }
});


class BookingRules extends React.Component {
  state = {
    age: '',
    typeOfRental:'',
    rental:'',
    open: false,
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClose = () => {
    this.setState({ open: false });
  };



  render() {
    const { classes } = this.props;
    let notice=['At least 1 day notice','At least 2 days notice','At least 3 days notice','At least 5 days notice'];
    let cancellation=['Flexible: 50% refund up to 7 days prior to check-in, except fees','Moderate: 50% refund up to 14 days prior to check-in, except fees','Strict: 50% refund up to 30 days prior to check-in, except fees']
    return (
      <form autoComplete="off" style={{textAlign:'left'}}>
        <FormControl className={classes.formControl} style={{width:'50%'}}>
        <div style={{marginRight:'6%',width:'50%'}}>
            <TextField
                required
                select
                id="standard-required"
                label="Notice Period"
                className={classes.textField}
                margin="normal"
                variant="standard"
                helperText='How many days before check-in do you allow bookings?'
            >
            {notice.map(option => (
                <MenuItem key={option} value={option}>
                    {option}
                </MenuItem>
            ))}
            </TextField>
            <TextField
                required
                select
                id="standard-required"
                label="Cancellation policy"
                className={classes.textField}
                margin="normal"
                variant="standard"
            >
            {cancellation.map(option => (
                <MenuItem key={option} value={option}>
                    {option}
                </MenuItem>
            ))}
            </TextField>
        </div>
        </FormControl>
        <Button variant="contained" color="primary" className={classes.button}>
            Next
        </Button>
      </form>
    );
  }
}

BookingRules.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BookingRules);