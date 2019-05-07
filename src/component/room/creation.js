import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';
import ChannelImage from './channelImage'
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

const floors = ['1','2','3','4','5','6','7'];

const rooms = ['1','2','3','4','5','6','7'];

const currencies = [
    {
      value: 'INR',
      label: '₹'
    },
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    }
  ];

class Creation extends React.Component {
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

  handleImageURL = e => {
    this.setState({ url: e.target.value });
    
  }



  handleName = e =>{
    this.setState({ name: e.target.value });
    
  }

  handleDescription = e =>{
    this.setState({ description: e.target.value });

  }

  handleFloor = e =>{
    this.setState({ floor: e.target.value });
  }

  handleRoom = e =>{
    this.setState({ room: e.target.value });
  }

  handleBasicRates = e =>{
    this.setState({ basicRate: e.target.value });

  }

  handleCurrency = e =>{
    this.setState({ currency: e.target.value });
  }

  render() {
    const { classes } = this.props;

    return (
        <div>
      <form className={classNames(classes.container, classes.formTemplate)} noValidate autoComplete="off">
        <TextField
          id="standard-name"
          label="Name of the Hotel"
          value={this.state.name}
          onChange={(e) => this.handleName(e)}
          className={classes.textField}
          margin="normal"
        />

        <TextField
          id="standard-select-floor"
          select
          label="Floor in a building"
          className={classes.textField}
          value={this.state.floor}
          onChange={(e) => this.handleFloor(e)}

          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          margin="normal"
        >
          {floors.map(option => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          id="standard-select-room"
          select
          label="Rooms in a Floor"
          className={classes.textField}
          value={this.state.room}
          onChange={(e) => this.handleRoom(e)}

          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          margin="normal"
        >
          {rooms.map(option => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          id="standard-select-currency"
          select
          label="Select Currency Type"
          className={classes.textField}
          value={this.state.currency}
          onChange={(e) => this.handleCurrency(e)}

          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          margin="normal"
        >
          {currencies.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          id="standard-rate"
          label="Basic Night"
          type='number'
          value={this.state.basicRate}
          onChange={(e) => this.handleBasicRates(e)}
          className={classes.textField}
          margin="normal"
        />

      </form>

      <ChannelImage imageDetails={this.state.channel} basicRate={this.state.basicRate}/>

      <Button variant="contained" size="small" className={classes.button} onClick={()=>this.saveRoomDetails}>
      <SaveIcon className={classNames(classes.leftIcon, classes.iconSmall)} />
      Save
    </Button>
      </div>
    );
  }
}

Creation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Creation);
