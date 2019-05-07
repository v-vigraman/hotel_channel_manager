import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ChannelList from './channelList'


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

class ChannelManagement extends React.Component {
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

  render() {
    const { classes } = this.props;

    return (
      <div>
         <ChannelList imageDetails={this.props.channelList}/>
      </div>
    );
  }
}

ChannelManagement.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChannelManagement);
