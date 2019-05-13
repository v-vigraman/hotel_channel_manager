import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  formTemplate:{

  },
  button:{
    marginLeft:'10px'
  }
});

class Description extends React.Component {
  state = {
    name: '',
    floor: '1',
    room: '1',
    currency: 'INR',
    basicRate: 0,
    channel:[{
        name:"",
        description:"",
        url:""
    }]
    
  };


  render() {
    const { classes } = this.props;

    return (
        <div style={{textAlign:"left"}}>
            <TextField
                required
                id="standard-required"
                label="Headline"
                className={classes.textField}
                margin="normal"
                variant="standard"
            />  
             <TextField
                id="standard-multiline-flexible"
                label="Short Summary"
                multiline
                rowsMax="4"
                value={this.state.multiline}
                className={classes.textField}
                margin="normal"
                variant="standard"
            />  
            <div style={{width:'35%'}}>
              <TextField
                id="standard-multiline-static"
                label="Detailed Description"
                multiline
                rows="4"
                className={classes.textField}
                style={{width:"98%"}}
                margin="normal"
                variant="standard"
            />
            </div>
            <Button variant="contained" color="primary" className={classes.button}>
            Next
          </Button>
        </div>
    );
  }
}

Description.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Description);
