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


class LastMinuteDiscount extends React.Component {
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

    let lastMinute=[];
    let earlyBird=[];
    lastMinute.push(1+ " day")

    for(let i=2;i<=6;i++){
        lastMinute.push(i+" days")
    }

    lastMinute.push(1+" week")
    lastMinute.push(2+" weeks")
    lastMinute.push(3+" weeks")    
    lastMinute.push(1+" month")
    lastMinute.push(2+" months")
    lastMinute.push(3+" months")

    for(let i=4;i<=18;i++){
        earlyBird.push(i+ " months");
    }

    return (
    <div style={{textAlign:'left'}}>
        <div className={classes.card} style={{marginTop:'2%',width:"28%",display:'inline-block',marginRight:'2%'}}>
      <Card  style={{width:"100%"}}>
        <CardHeader
          title="Last Minute"
        />
        <CardContent>
          <Typography component="p">
          Bookings made less than 14 days before check-in - discount 11%
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
          <DialogTitle id="scroll-dialog-title">Last minute / Early bird discounts</DialogTitle>
          <DialogContent>
            <Typography>
                Define discounts for guests booking early or at the last minute. These discounts apply for all periods which match the rules below.
            </Typography>
            <form autoComplete="off" style={{textAlign:'left'}}>
              <FormControl className={classes.formControl} style={{width:'100%'}}>
                <h2>Last minute Discounts</h2>
                  <div style={{width:"100%"}}>
                    <div style={{width:"45%",display:"inline-block",marginRight:"7%"}}> 
                    <TextField
                        required
                        select
                        id="standard-required"
                        label="Booking made less than"
                        className={classes.textField}
                        helperText="before check-in"
                        style={{width:"80%"}}
                        margin="normal"
                        variant="standard"
                      >
                      {lastMinute.map(option => (
                          <MenuItem key={option} value={option}>
                              {option}
                          </MenuItem>
                      ))}
                      </TextField>
                    </div>
                    <div style={{width:"45%",display:"inline-block",marginRight:"2%"}}>
                      <TextField
                        required
                        type="number"
                        id="standard-required"
                        label="Apply discount of (%)"
                        className={classes.textField}
                        margin="normal"
                        variant="standard"
                      />
                    </div>
                  </div>
                  <h2>Easrly bird discounts</h2>
                  <div style={{width:'100%'}}>
                    <div style={{width:"45%",display:"inline-block",marginRight:"7%"}}> 
                      <TextField
                        required
                        select
                        id="standard-required"
                        label="Booking made more than"
                        className={classes.textField}
                        style={{width:"80%"}}
                        helperText="before check-in"
                        margin="normal"
                        variant="standard"
                      >
                      {earlyBird.map(option => (
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
                        label="Apply discount of (%)"
                        className={classes.textField}
                        style={{width:"80%"}}
                        margin="normal"
                        variant="standard"
                      />
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

LastMinuteDiscount.propTypes = {
  classes: PropTypes.object.isRequired,

};

export default withStyles(styles)(LastMinuteDiscount);
