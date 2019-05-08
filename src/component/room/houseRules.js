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


class HouseRules extends React.Component {
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
    let kidsSuitable = ['Children welcome','Great for children','Not suitable for children'];
    let wheelChair = ['Full access for wheelchairs','No access for wheelchairs','Some access for wheelchairs']
    let parties = ['Allowed','Not Allowed']
    let smoking = ['No smoking','Smoking allowed','Smoking outside'];
    let pets = ['No pets allowed','Pets allowed','Pets considered']
    return (
      <form autoComplete="off" style={{textAlign:'left'}}>
        <FormControl className={classes.formControl} style={{width:'50%'}}>
        <div style={{width:'100%'}}>
            <div className={classes.formAlign}>
                <TextField
                    select
                    required
                    id="standard-required"
                    label="Suitable For Kids"
                    className={classes.textField}
                    margin="normal"
                    variant="standard"
                >
                {kidsSuitable.map(option => (
                <MenuItem key={option} value={option}>
                    {option}
                </MenuItem>
                ))}
                </TextField>
            </div>
            <div className={classes.formAlign}>
                <TextField
                    id="standard-select-type"
                    select
                    label="Wheelchair Access"
                    className={classes.textField}
                    value={this.state.typeOfRental}
                    SelectProps={{
                    MenuProps: {
                        className: classes.menu,
                    },
                    }}
                    margin="normal"
                >
                {wheelChair.map(option => (
                <MenuItem key={option} value={option}>
                    {option}
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
                label="Events or parties allowed "
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
                {parties.map(option => (
                    <MenuItem key={option} value={option}>
                    {option}
                    </MenuItem>
                ))}
                </TextField>
            </div>
            <div className={classes.formAlign}>
                <TextField
                    required
                    select
                    id="standard-required"
                    type="number"
                    min={1}
                    label="Smoking allowed "
                    className={classes.textField}
                    margin="normal"
                    variant="standard"
                >
                {smoking.map(option => (
                    <MenuItem key={option} value={option}>
                    {option}
                    </MenuItem>
                ))}
                </TextField>
            </div>
        </div>
        <div style={{marginRight:'6%',width:"45%"}}>
            <TextField
                required
                select 
                id="standard-required"
                label="Pets"
                className={classes.textField}
                margin="normal"
                variant="standard"
            >
            {pets.map(option => (
                    <MenuItem key={option} value={option}>
                    {option}
                    </MenuItem>
            ))}
            </TextField>
        </div>
        <div style={{marginRight:'6%',width:"100%"}}>
            <TextField
                id="standard-multiline-static"
                label="House Rules"
                multiline
                rows="4"
                className={classes.textField}
                margin="normal"
                variant="standard"
            />
        </div>
        </FormControl>
        <Button variant="contained" color="primary" className={classes.button}>
            Next
        </Button>
      </form>
    );
  }
}

HouseRules.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HouseRules);