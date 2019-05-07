import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

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

  }
});

class Photos extends React.Component {
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

  constructor(props){
      super(props);
  }


  render() {
    const { classes } = this.props;

    return (
        <div>
            <TextField
                required
                id="standard-required"
                label="Headline"
                className={classes.textField}
                margin="normal"
                variant="standard"
            />    
        </div>
    );
  }
}

Photos.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Photos);
