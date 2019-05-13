import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';

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

     }
  };
  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  handleImage = ({channelDetails}) => {
    this.setState({imageDetails:channelDetails})
  }

  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardHeader
          // avatar={
          //   <Avatar aria-label="Recipe" className={classes.avatar}>
          //     {this.props.imageDetails.name.substr(0).toUpperCase()}
          //   </Avatar>
          // }
         
          title={this.props.imageDetails.name}
        />
        <CardMedia
          className={classes.media}
          image={this.props.imageDetails.url}
          title=""
        />
        <CardContent>
          <Typography component="p">
            {this.props.imageDetails.description}
          </Typography>
        </CardContent>
       
        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
          <CardContent>
            
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