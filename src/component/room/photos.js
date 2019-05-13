import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
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



  render() {
    const { classes } = this.props;

    return (
        <div className={classes.root} style={{width:'90%',marginTop:'2%'}}>
            <Grid container spacing={24}>
              <Grid item xs={12} style={{height:"350px"}}>
                <Paper className={classes.paper} style={{height:"100%"}}>
                {/* <CardMedia
                  className={classes.media}
                  image="../../1.jpg"
                  title="Paella dish"
                /> */}
                  <img src={require('../../1.jpg')} alt="1" width="100%" style={{height:"100%"}}/>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.paper}>
                  <img src={require('../../1.jpg')} alt="1" width="100%"/>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.paper}>
                  <img src={require('../../1.jpg')} alt="1" width="100%"/>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.paper}>
                  <img src={require('../../1.jpg')} alt="1" width="100%"/>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper className={classes.paper}>
                  <img src={require('../../1.jpg')} alt="1" width="100%"/>
                </Paper>
              </Grid>
            </Grid>
        </div>
    );
  }
}

Photos.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Photos);
