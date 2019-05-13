import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InstructionTime from "./instructionTime";
import MuiPhoneNumber from "material-ui-phone-number"
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
  }
});

class Instruction extends React.Component {
  state = {};
  handleOnChange = (value) => {
    this.setState({
       phone: value
    });
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    let collectionPoint = [
      "At the property",
      "From another location",
      "Key code entrance",
      "Keys are in a lock box",
      "There is a reception"
    ];
    return (
      <form autoComplete="off" style={{ textAlign: "left" }}>
        <FormControl className={classes.formControl} style={{ width: "100%" }}>
          <div>
              <InstructionTime />
          </div>
          <div style={{ width: "50%" }}>
            <div
              style={{
                width: "45%",
                display: "inline-block",
                marginRight: "7%"
              }}
            >
              <TextField
                id="standard-select-rental"
                label="Check-in contact person"
                className={classes.textField}
                SelectProps={{
                  MenuProps: {
                    className: classes.menu
                  }
                }}
                margin="normal"
              />
            </div>
            <div
              style={{
                width: "45%",
                display: "inline-block",
                marginRight: "2%"
              }}
            >
              <TextField
                required
                select
                id="standard-required"
                min={1}
                label="Key collection point"
                className={classes.textField}
                margin="normal"
                variant="standard"
              >
                {collectionPoint.map(option => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          </div>
          <div style={{width:"50%",marginTop: '3%'}}>
            <MuiPhoneNumber defaultCountry={'us'}   onChange={this.handleOnChange}/>
          </div>
          <div style={{marginRight:'6%',width:"50%"}}>
            <TextField
                id="standard-multiline-static"
                label="Check-in Instruction"
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

Instruction.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Instruction);
