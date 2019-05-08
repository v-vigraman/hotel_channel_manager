import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Divider from '@material-ui/core/Divider';
const styles = theme => ({
  button: {
    display: "block",
    marginTop: theme.spacing.unit * 2
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  formAlign: {
    display: "inline-block",
    width: "45%",
    margin: "1%"
  },
  textField: {
    width: "100%"
  },
  align:{
    width:'30%'
  }
});

const internet = ["NO internet", "Wired internet", "Wireless internet (WIFI)"];
const pool = [
  "No swimming pool",
  "Private indoor pool",
  "Private outdoor pool",
  "Shared indoor pool",
  "Shared outdoor pool"
];
const washing = [
  "No washing machine",
  "Shared washing machine",
  "Washing machine"
];
const heater = [
  "Central heating",
  "Electric heating",
  "Gas heating",
  "No heating",
  "Stove or fireplace"
];
const airCondition = [
  "Central air-conditioning",
  "No air-conditioning",
  "Partial air-conditioning"
];
const parking = [
  "Covered parking on site",
  "No parking",
  "Parking lot/garage (free)",
  "Parking lot/garage (paid)",
  "Parking on street (free)",
  "Parking on street (paid)",
  "Uncovered parking on site"
];
class Facilities extends React.Component {
  state = {
    age: "",
    typeOfRental: "",
    rental: "",
    coffee:"",
    water:"",
    fridge:"",
    microwave:"",
    hall:"",
    gas:"",
    freezer:"",
    kitchenWare:"",
    open: false
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChangeFacilities = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { classes } = this.props;
    function handleOnChange(value) {
      this.setState({
        phone: value
      });
    }
    return (
      <form autoComplete="off" style={{ textAlign: "left" }}>
        <FormControl className={classes.formControl} style={{ width: "50%" }}>
          <div style={{ width: "100%" }}>
            <div className={classes.formAlign}>
              <TextField
                select
                required
                id="standard-required"
                label="Internet"
                className={classes.textField}
                margin="normal"
                variant="standard"
              >
                {internet.map(option => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div className={classes.formAlign}>
              <TextField
                select
                required
                id="standard-required"
                label="Swimming pool"
                className={classes.textField}
                margin="normal"
                variant="standard"
              >
                {pool.map(option => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          </div>
          <div style={{ width: "100%" }}>
            <div className={classes.formAlign}>
              <TextField
                select
                required
                id="standard-required"
                label="Washing Machine"
                className={classes.textField}
                margin="normal"
                variant="standard"
              >
                {washing.map(option => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div className={classes.formAlign}>
              <TextField
                select
                required
                id="standard-required"
                label="Heater"
                className={classes.textField}
                margin="normal"
                variant="standard"
              >
                {heater.map(option => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          </div>
          <div style={{ width: "100%" }}>
            <div className={classes.formAlign}>
              <TextField
                select
                required
                id="standard-required"
                label="Air-conditioning"
                className={classes.textField}
                margin="normal"
              >
                {airCondition.map(option => (
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
                label="Parking"
                className={classes.textField}
                margin="normal"
                variant="standard"
              >
                {parking.map(option => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          </div>
          <h3>Kitchens</h3>
          <Divider component="p" />
          <div style={{ marginRight: "6%", width: "80%" }}>
            <FormControlLabel
              className={classes.align}
              control={
                <Checkbox
                  checked={this.state.checkedB}
                  onChange={this.handleChangeFacilities("coffee")}
                  value="checkedB"
                  color="primary"
                />
              }
              label="Coffee machine"
            />
            <FormControlLabel
              className={classes.align}
              control={
                <Checkbox
                  checked={this.state.checkedB}
                  onChange={this.handleChangeFacilities("water")}
                  value="checkedB"
                  color="primary"
                />
              }
              label="Dish-water"
            />
            <FormControlLabel
              className={classes.align}
              control={
                <Checkbox
                  checked={this.state.checkedB}
                  onChange={this.handleChangeFacilities("fridge")}
                  value="checkedB"
                  color="primary"
                />
              }
              label="Fridge"
            />
            <FormControlLabel
              className={classes.align}
              control={
                <Checkbox
                  checked={this.state.checkedB}
                  onChange={this.handleChangeFacilities("microwave")}
                  value="checkedB"
                  color="primary"
                />
              }
              label="Microwave"
            />
            <FormControlLabel
              className={classes.align}
              control={
                <Checkbox
                  checked={this.state.checkedB}
                  onChange={this.handleChangeFacilities("toaster")}
                  value="checkedB"
                  color="primary"
                />
              }
              label="Toaster"
            />
            <FormControlLabel
              className={classes.align}
              control={
                <Checkbox
                  checked={this.state.checkedB}
                  onChange={this.handleChangeFacilities("hall")}
                  value="checkedB"
                  color="primary"
                />
              }
              label="Hall"
            />
            <FormControlLabel
              className={classes.align}
              control={
                <Checkbox
                  checked={this.state.checkedB}
                  onChange={this.handleChangeFacilities("gas")}
                  value="checkedB"
                  color="primary"
                />
              }
              label="Gas Oven"
            />
            <FormControlLabel
              className={classes.align}
              control={
                <Checkbox
                  checked={this.state.checkedB}
                  onChange={this.handleChangeFacilities("freezer")}
                  value="checkedB"
                  color="primary"
                />
              }
              label="Freezer"
            />
            <FormControlLabel
              className={classes.align}
              control={
                <Checkbox
                  checked={this.state.checkedB}
                  onChange={this.handleChangeFacilities("kitchenWare")}
                  value="checkedB"
                  color="primary"
                />
              }
              label="Kitchenware"
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

Facilities.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Facilities);
