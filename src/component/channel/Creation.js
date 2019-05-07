import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import ChannelImage from './channelImage'
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';
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

  }
});

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
    channelList:[],
    name: '',
    currency: 'INR',
    description: '',
    url: ''
  };

  constructor(props){
      super(props);
  }
  componentWillMount(){

    this.props.channelList(this.state.channelList);
  }

  handleImageURL = e => {
    this.setState({ url: e.target.value });
  }

  saveChannelDetails = () =>{
    let channel = {
      name:this.state.name,
      description:this.state.description,
      url:this.state.url,
      currency:this.state.currency
    }
    this.setState({channelList:[...this.state.channelList,channel]},function(){
      this.props.channelList(this.state.channelList)
    })
  }

  handleName = e =>{
    this.setState({ name: e.target.value });
    
  }

  handleDescription = e =>{
    this.setState({ description: e.target.value });

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
          label="Name of the channel"
          value={this.state.name}
          onChange={(e) => this.handleName(e)}
          className={classes.textField}
          margin="normal"
        />

        <TextField
          id="standard-uncontrolled"
          label="Image URL"
          onChange={(e) => this.handleImageURL(e)}
          className={classes.textField}
          margin="normal"
        />

        <TextField
          id="standard-uncontrolled"
          label="Description"
          onChange={(e) => this.handleDescription(e)}
          className={classes.textField}
          margin="normal"
        />

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
      </form>
      <ChannelImage imageDetails={this.state}/>
      <Button variant="contained" size="small" className={classes.button} onClick={()=>this.saveChannelDetails()}>
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
