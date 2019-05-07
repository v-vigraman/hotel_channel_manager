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
import MenuItem from '@material-ui/core/MenuItem';
import LastMinuteDiscount from './LastMinuteDiscount'
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


class Discounts extends React.Component {
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
        <div>
            <div style={{textAlign:'left'}}>
            <h3 >Discount for Longer Days</h3>

                <div className={classes.card} style={{marginTop:'2%',display:'inline-block',marginRight:'2%'}}>
            <Card  >
                <CardHeader
                title="7 nights or more"
                />
                <CardContent>
                <Typography component="p">
                15% discount for stays of 7 nights or more
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
                <DialogTitle id="scroll-dialog-title">Discount For Longer Days</DialogTitle>
                <DialogContent>
                    <Typography component="p">
                        <p>If you would like to offer discounted rates for longer stays, you can define the discount rate here.</p>
                        <ul>
                            <li>The discount is applied to the rental rate for the entire booking.</li>
                            <li>You can choose whether to apply this discount in your other special rates rules.</li>
                        </ul>
                    </Typography>
                    <h5>Booking length and discount amount</h5>
                    <form autoComplete="off" style={{textAlign:'left'}}>
                    <FormControl className={classes.formControl} style={{width:'100%'}}>
                        <div style={{width:"100%"}}>
                            <div style={{width:"45%",display:"inline-block",marginRight:"7%"}}> 
                            <TextField
                                required
                                type="number"
                                id="standard-required"
                                label="7 nights or more (%)"
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
                                label="14 nights or more (%)"
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
                                id="standard-required"
                                label="21 nights or more (%)"
                                className={classes.textField}
                                margin="normal"
                                variant="standard"
                            >/</TextField>
                            </div>
                            <div style={{width:"45%",display:"inline-block",marginRight:"2%"}}>
                            <TextField
                                required
                                id="standard-required"
                                label="28 nights or more (%)"
                                className={classes.textField}
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
                    Delete rule
                    </Button>
                    <Button onClick={this.handleClose} color="primary" variant="contained" className={classes.margin}>
                    Save rule
                    </Button>
                </DialogActions>
                </Dialog>
            </div>
            <h3 style={{textAlign:"left"}}>Last minute / Early bird</h3>
            <div>
                <LastMinuteDiscount/>
            </div>
        </div>
    );
  }
}

Discounts.propTypes = {
  classes: PropTypes.object.isRequired,

};

export default withStyles(styles)(Discounts);
