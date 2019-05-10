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


class BasicRates extends React.Component {
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
    let minGuest=[];
    let minStay=[];
    let maxStay=[];
    for(let i=1;i<=30;i++){
        minGuest.push(i)
    }
    minStay.push(1+ " night")
    for(let i=2;i<=14;i++){
        minStay.push(i+" nights")
    }
    for(let i=7;i<=180;i++){
        maxStay.push(i+ " nights");
    }
    return (
      <form autoComplete="off" style={{textAlign:'left'}}>
        <FormControl className={classes.formControl} style={{width:'50%'}}>
        <div style={{width:'100%'}}>
            <div className={classes.formAlign}>
                <TextField
                    required
                    type="number"
                    id="standard-required"
                    label="Basic night"
                    className={classes.textField}
                    margin="normal"
                    variant="standard"
                />
            </div>
            <div className={classes.formAlign}>
            <TextField
                    required
                    type="number"
                    id="standard-required"
                    label="Weekend night"
                    className={classes.textField}
                    margin="normal"
                    variant="standard"
                />
            </div>
        </div>
        <div style={{marginRight:'6%',width:'50%'}}>
            <TextField
                required
                select
                id="standard-required"
                label="Maximum guests"
                className={classes.textField}
                margin="normal"
                variant="standard"
            >
            {minGuest.map(option => (
                <MenuItem key={option} value={option}>
                    {option}
                </MenuItem>
            ))}
            </TextField>
            <span>Allow additional guests for a fee?</span>
            <TextField
                required
                select
                id="standard-required"
                label="Minimum stay"
                className={classes.textField}
                margin="normal"
                variant="standard"
            >
            {minStay.map(option => (
                <MenuItem key={option} value={option}>
                    {option}
                </MenuItem>
            ))}
            </TextField>
            <TextField
                required
                select
                id="standard-required"
                label="Maximum Stay"
                className={classes.textField}
                margin="normal"
                variant="standard"
            >
            {maxStay.map(option => (
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

BasicRates.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BasicRates);