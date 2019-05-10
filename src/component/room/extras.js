import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { Typography } from '@material-ui/core';
import CardActions from '@material-ui/core/CardActions';
import Edit from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import classnames from 'classnames';
import Delete from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import FormControl from '@material-ui/core/FormControl';
import DialogTitle from '@material-ui/core/DialogTitle';

const styles = theme => ({
  colorSwitchBase: {
    color: blue[300],
    '&$colorChecked': {
      color: blue[500],
      '& + $colorBar': {
        backgroundColor: blue[500],
      },
    },
  },
  cardCreation:{
    '&:hover':{
      cursor:'pointer'
    }
  },
  colorBar: {},
  colorChecked: {}
});
const taxType=["City Tax","Destination Tax","Government Tax","Local Tax","Tourism Fee"]
const feeBasis=["% of Rental Amount","Per Adult / day","Per Adult / stay","Per day","Per Person / day"]
const extraServices=["Airport Shuttle","Baby cot","Barbecue","Bed linen","Bike rental","Car rental","Internet","Sunbed","Transfer","Umbrella"];
const provided=["Free","For a Fee"];

class Extra extends React.Component {
  state = {
    checkedA: false,
    checkedSec:false,
    open:false,
    openExtra:false,
    scroll:'paper'
  };
  

  handleClickOpen = scroll => () => {
    this.setState({ open: true, scroll });
  };

  handleClickOpenExtra = scroll => () => {
    this.setState({ openExtra: true, scroll });
  };


  handleClose = () => {
    this.setState({ open: false });
  };

  handleCloseExtra = () => {
    this.setState({ openExtra: false });
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    const { classes } = this.props;

    const cleanBasis = ["Mandatory - Included","Mandatory - for a free","Optional"]

    return (
        <div style={{marginTop:"2%",textAlign:"left"}}>
            <div>
                <Card className={classes.card} style={{width:"50%"}}>
                    <CardContent style={{textAlign:"left"}}>
                    <h3>Cleaning</h3>
                    <div style={{width:"100%"}}>
                        <FormGroup style={{width:"50%"}}>
                            <FormControlLabel
                                control={
                                    <Switch
                                    checked={this.state.checkedA}
                                    onChange={this.handleChange('checkedA')}
                                    value="checkedA"
                                    classes={{
                                        switchBase: classes.colorSwitchBase,
                                        checked: classes.colorChecked,
                                        bar: classes.colorBar,
                                    }}
                                    />
                                }
                                label="Cleaning is provided"
                            />
                            {(this.state.checkedA)?
                                <TextField
                                    required
                                    select
                                    id="standard-required"
                                    label="Cleaning basis"
                                    className={classes.textField}
                                    margin="normal"
                                    variant="standard"
                                >
                                {
                                    cleanBasis.map(option => (
                                        <MenuItem key={option} value={option}>
                                            {option}
                                        </MenuItem>
                                    ))
                                }
                                </TextField>
                                :
                                null
                            }
                        </FormGroup>
                    </div>
                    </CardContent>
                </Card>
            </div>
            <div>
                <Card className={classes.card} style={{width:"50%",marginTop:"2%"}}>
                    <CardContent style={{textAlign:"left"}}>
                    <h3>Security deposit</h3>
                    <div style={{width:"100%"}}>
                        <FormGroup style={{width:"50%"}}>
                            <FormControlLabel
                                control={
                                    <Switch
                                    checked={this.state.checkedSec}
                                    onChange={this.handleChange('checkedSec')}
                                    value="checkedSec"
                                    classes={{
                                        switchBase: classes.colorSwitchBase,
                                        checked: classes.colorChecked,
                                        bar: classes.colorBar,
                                    }}
                                    />
                                }
                                label="I require a security deposit"
                            />
                            {(this.state.checkedSec)?
                                <TextField
                                    required
                                    type="number"
                                    id="standard-required"
                                    label="Amount in EUR"
                                    className={classes.textField}
                                    margin="normal"
                                    variant="standard"
                                />
                                :
                                null
                            }
                        </FormGroup>
                    </div>
                    </CardContent>
                </Card>
            </div>
            <h3>Taxes</h3>
            <div >
                <div className={classes.card} style={{marginTop:'2%',width:"25%",display:'inline-block',marginRight:'2%'}}>
                    <Card>
                        <CardContent style={{textAlign:"left"}}>
                        <h3>Government tax</h3>
                            <Typography>12 EUR Per day</Typography>
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
                        <CardContent onClick={this.handleClickOpenExtra('body')} >
                        <Typography component="p">
                            <img src="https://img.icons8.com/ios/50/000000/add-rule.png"/>
                        </Typography>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <Dialog
                open={this.state.openExtra}
                onClose={this.handleCloseExtra}
                scroll={this.state.scroll}
                aria-labelledby="scroll-dialog-title"
            >
            <DialogTitle id="scroll-dialog-title">Taxes</DialogTitle>
            <DialogContent>
                <form autoComplete="off" style={{textAlign:'left'}}>
                <FormControl className={classes.formControl} style={{width:'100%'}}>
                    <div style={{width:"100%"}}>
                        <div style={{width:"45%",display:"inline-block",marginRight:"7%"}}> 
                        <TextField
                            required
                            select
                            id="standard-required"
                            label="Tax type / name"
                            style={{width:"100%"}}
                            className={classes.textField}
                            margin="normal"
                            variant="standard"
                        >
                        {taxType.map(option => (
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
                            label="Fee basis"
                            style={{width:"100%"}}
                            className={classes.textField}
                            margin="normal"
                            variant="standard"
                            >
                            {feeBasis.map(option => (
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
            <h3>Optional extras and services</h3>
            <div>
                <div className={classes.card} style={{marginTop:'2%',width:"25%",display:'inline-block',marginRight:'2%'}}>
                    <Card>
                        <CardContent style={{textAlign:"left"}}>
                        <h3>Laundry service</h3>
                            <Typography>20 EUR Per stay</Typography>
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
            </div>
            <Dialog
                open={this.state.open}
                onClose={this.handleClose}
                scroll={this.state.scroll}
                aria-labelledby="scroll-dialog-title"
            >
            <DialogTitle id="scroll-dialog-title">Optional extras and services</DialogTitle>
            <DialogContent>
                <form autoComplete="off" style={{textAlign:'left'}}>
                <FormControl className={classes.formControl} style={{width:'100%'}}>
                    <div style={{width:"100%"}}>
                        <div style={{width:"45%",display:"inline-block",marginRight:"7%"}}> 
                        <TextField
                            required
                            select
                            id="standard-required"
                            label="Extra / service"
                            style={{width:"100%"}}
                            className={classes.textField}
                            margin="normal"
                            variant="standard"
                        >
                        {extraServices.map(option => (
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
                            label="Provided"
                            style={{width:"100%"}}
                            className={classes.textField}
                            margin="normal"
                            variant="standard"
                            >
                            {provided.map(option => (
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
                <Button onClick={this.handleCloseExtra} color="primary">
                Save
                </Button>
            </DialogActions>
            </Dialog>
        </div>
    );
  }
}

Extra.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Extra);
