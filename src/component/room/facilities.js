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

const typeOfRental=[
    {name:'B&B'},
    {name:'Apartment'},
    {name:'Boat'},
    {name:"Guest House"}
]
const rental=[
    {name:"Entire House or Apartment"},
    {name:"Room with Own Facilities"}
]
class Facilities extends React.Component {
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

    return (
      <form autoComplete="off" style={{textAlign:'left'}}>
        <FormControl className={classes.formControl} style={{width:'50%'}}>
        <div style={{width:'100%'}}>
            <div className={classes.formAlign}>
                <TextField
                    select
                    required
                    id="standard-required"
                    label="Internet"
                    className={classes.textField}
                    margin="normal"
                    variant="standard"
                />
            </div>
            <div className={classes.formAlign}>
                <TextField
                    id="standard-select-type"
                    select
                    label="Type Of Rental"
                    className={classes.textField}
                    value={this.state.typeOfRental}
                    SelectProps={{
                    MenuProps: {
                        className: classes.menu,
                    },
                    }}
                    margin="normal"
                >
                {typeOfRental.map(option => (
                <MenuItem key={option.name} value={option.name}>
                    {option.name}
                </MenuItem>
                ))}
                </TextField>
                
            </div>
        </div>
        <div style={{width:'100%'}}>
            <div className={classes.formAlign}>
                <TextField
                id="standard-select-rental"
                select
                label="Rental Basis"
                value={this.state.rental}
                className={classes.textField}
                SelectProps={{
                    MenuProps: {
                    className: classes.menu,
                    },
                }}
                helperText="Please select your Country"
                margin="normal"
                >
                {rental.map(option => (
                    <MenuItem key={option.name} value={option.name}>
                    {option.name}
                    </MenuItem>
                ))}
                </TextField>
            </div>
            <div className={classes.formAlign}>
                <TextField
                    required
                    id="standard-required"
                    type="number"
                    min={1}
                    label="Floors in building"
                    className={classes.textField}
                    margin="normal"
                    variant="standard"
                />
            </div>
        </div>
        <div style={{marginRight:'6%'}}>
            <TextField
                required
                id="standard-required"
                label="Rental License Number"
                className={classes.textField}
                margin="normal"
                variant="standard"
            />
        </div>
        <Button variant="contained" color="primary" className={classes.button}>
            Next
        </Button>
        </FormControl>
      </form>
    );
  }
}

Facilities.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Facilities);