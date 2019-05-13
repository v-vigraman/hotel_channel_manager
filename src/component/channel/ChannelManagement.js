import React from 'react';
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



class ChannelManagement extends React.Component {
  state = {
    channelList:[],
    name: '',
    currency: 'INR',
    description: '',
    url: ''
  };


  render() {

    return (
      <div>
         <ChannelList imageDetails={this.props.channelList}/>
      </div>
    );
  }
}


export default withStyles(styles)(ChannelManagement);
