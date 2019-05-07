import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import Delete from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import DialogTitle from '@material-ui/core/DialogTitle';
import SeasonRateCreation from './seasonRateCreation'
import MenuItem from '@material-ui/core/MenuItem';

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
  cardCreation:{
    '&:hover':{
      cursor:'pointer'
    }
  }, 
  grid: {
    width: '60%',
  },
});


class SeasonRates extends React.Component {
  state = { open:false,scroll:'paper' };

  handleClickOpen = scroll => () => {
    this.setState({ open: true, scroll });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    let minStay=[];
    let maxStay=[];
    minStay.push(1+ " night")
    for(let i=2;i<=14;i++){
        minStay.push(i+" nights")
    }
    for(let i=7;i<=180;i++){
        maxStay.push(i+ " nights");
    }

    return (
    <div style={{textAlign:'left'}}>
        <div className={classes.card} style={{marginTop:'2%',display:'inline-block',marginRight:'2%'}}>
      <Card  >
        <CardHeader
          title="Summer"
          subheader="Tue 30 Apr, 2019 - Thu 20 Jun, 2019"
        />
        <CardContent>
          <Typography component="p">
            130 EUR per night,

            3 nights minimum stay,
            
            Check-in Any day
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="edit">
            <Edit />
          </IconButton>
          <IconButton className={classnames(classes.expand, {
              [classes.expandOpen]: this.state.expanded,
            })}
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            <Delete/>
          </IconButton>
        </CardActions>
      </Card>
      </div>
    <div className={classes.card} style={{marginTop:'2%',display:'inline-block',marginRight:'2%'}}>
        <Card className={classes.cardCreation}>
        <CardContent onClick={this.handleClickOpen('body')} >
          <Typography component="p">
            <img src="https://img.icons8.com/ios/50/000000/add-rule.png"/>
          </Typography>
        </CardContent>
        </Card>
        </div>
      <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          scroll={this.state.scroll}
          aria-labelledby="scroll-dialog-title"
        >
          <DialogTitle id="scroll-dialog-title">Add Seasonal Rates</DialogTitle>
          <DialogContent>
            <form autoComplete="off" style={{textAlign:'left'}}>
              <FormControl className={classes.formControl} style={{width:'100%'}}>
                  <div style={{width:"100%"}}>
                    <TextField
                      select
                      required
                      style={{width:"100%"}}
                      id="standard-required"
                      label="Season Name"
                      className={classes.textField}
                      margin="normal"
                      variant="standard"
                    />
                  </div>
                  <div>
                    <div>
                      <SeasonRateCreation/>
                    </div>
                  </div>
                  <div style={{width:"100%"}}>
                    <div style={{width:"45%",display:"inline-block",marginRight:"7%"}}> 
                      <TextField
                        required
                        type="number"
                        id="standard-required"
                        label="Basic Night"
                        className={classes.textField}
                        margin="normal"
                        variant="standard"
                      />
                    </div>
                    <div style={{width:"45%",display:"inline-block",marginRight:"2%"}}>
                      <TextField
                        required
                        type="number"
                        id="standard-required"
                        label="Weekend Night"
                        className={classes.textField}
                        margin="normal"
                        variant="standard"
                      />
                    </div>
                  </div>
                  <div style={{width:'100%'}}>
                    <div style={{width:"45%",display:"inline-block",marginRight:"7%"}}> 
                      <TextField
                        required
                        select
                        id="standard-required"
                        label="Minimum Stay"
                        className={classes.textField}
                        style={{width:"80%"}}
                        margin="normal"
                        variant="standard"
                      >
                      {minStay.map(option => (
                          <MenuItem key={option} value={option}>
                              {option}
                          </MenuItem>
                      ))}
                      </TextField>
                      
                    </div>
                    <div style={{width:"45%",display:"inline-block",marginRight:"2%"}}>
                      <TextField
                        required
                        select
                        id="standard-required"
                        label="Maximum Stay"
                        className={classes.textField}
                        style={{width:"80%"}}
                        margin="normal"
                        variant="standard"
                      >
                      {maxStay.map(option => (
                          <MenuItem key={option} value={option}>
                              {option}
                          </MenuItem>
                      ))}
                      </TextField>
                    </div>
                  </div>
              </FormControl>
            </form>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
    </div>

    );
  }
}

SeasonRates.propTypes = {
  classes: PropTypes.object.isRequired,

};

export default withStyles(styles)(SeasonRates);
