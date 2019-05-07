import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class ChannelImage extends React.Component {
  state = {
     expanded: false,
     imageDetails:{

     },
     basicRate:this.props.basicRate,
     channelRate:0,
     channels:[{
       name:"",
       rate:0
     }]
  };
  constructor(props){
    super(props);
  }
  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  handleImage = ({channelDetails}) => {
    this.setState({imageDetails:channelDetails})
  }

  handleChannelRates = (e,channel) =>{
    let newChannel = {
      name:channel,
      rate:e.target.value
    }
    this.setState({
      channels: [...this.state.channels, newChannel]
    })
  }

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardHeader
          title={this.props.imageDetails.name}
        />
        <CardMedia
          className={classes.media}
          image={this.props.imageDetails.url}
          title=""
        />
        <CardContent style={{padding:'0px',textAlign:'left'}}>

        <TextField 
              style={{marginTop:'0px',marginBottom:'0px',marginLeft:'5px'}}
              id="standard-rate"
              label="Basic Night"
              type='number'
              value={this.state.basicRate}
              className={classes.textField}
              margin="normal"
            />

            <TextField
              style={{marginTop:'0px',marginBottom:'0px',marginLeft:'5px'}}
              id="standard-rate"
              label="Channel Rate"
              type='number'
              value={this.state.channelRate}
              onChange={(e) => this.handleChannelRates(e,this.props.imageDetails.name)}
              className={classes.textField}
              margin="normal"
            />
          
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton
            className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
          <Typography component="p">
            {this.props.imageDetails.description}
          </Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  }
}

ChannelImage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ChannelImage);