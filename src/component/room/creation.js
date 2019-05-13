import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Edit from '@material-ui/icons/Edit';
import classnames from 'classnames';
import Delete from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Divider from '@material-ui/core/Divider';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
  formTemplate:{

  },
  align:{
    width:'30%'
  },
  card:{
    width:"100%"
  },
});


const kitchens = [1,2,3,4,5]

const kitchenFacilities=['Kitchenette','Open plan kitchen','Outdoor kitchen','Separate kitchen'];



  const bedRoomType=['Bedroom','Living room','Other room'];
  const bedCount = ['1','2','3','4','5','6','7','8','9','10+']
  const count=[
    {
      labels:['Bunk-bed','Double bed']
    },
    {
      labels:['King-sized bed','Queen-sized bed']
    },
    {
      labels:['Single bed(adult)','Single bed(child)']
    },
    {
      labels:['Sofa-bed(double)','Sofa-bed(single)']
    }
  ]
  const bathType=['En-suite bathroom','Full bathroom','WC']
  const toilet = ['No toilet','Toilet']
  const shower = ['No shower','Separate shower','Shower over bath']
  const bath = ['Jacuzzi','No bath','Standard bath']
class Creation extends React.Component {
  state = {
    dining:true,
    open:false,
    scroll:'paper',
    openBath:false 
  };
  
  handleClickOpen = scroll => () => {
    this.setState({ open: true, scroll });
  };

  handleClickOpenBath = scroll => () =>{
    this.setState({ openBath: true, scroll });
  }

  handleClose = () => {
    this.setState({ open: false });
  };

  handleCloseBathroom = () => {
    this.setState({ openBath: false });
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };


  
  render() {
    const { classes } = this.props;
    let bedRoom=[];
    for (let i=1;i<18;i++){
      bedRoom.push(i);
    }

    return (
      <div style={{width:"100%"}}>
        <div style={{width:"50%",float:"left"}}>
        <form className={classNames(classes.container, classes.formTemplate)} style={{textAlign:"left",marginBottom:"2%"}} noValidate autoComplete="off">
          <FormControl className={classes.formControl} style={{width:'100%'}}>
            <div style={{marginRight:'6%',width:'50%'}}>
                <TextField
                    required
                    select
                    id="standard-required"
                    label="Number of bedrooms"
                    className={classes.textField}
                    margin="normal"
                    style={{width:'100%'}}
                    variant="standard"
                >
                {bedRoom.map(option => (
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
                ))}
                </TextField>
            </div>
            <div style={{marginRight:'6%',width:'50%'}}>
            <Card  style={{width:"100%"}}>
              <CardHeader
                title="Bedroom 1"
              />
              <CardContent>
                <Typography component="p">
                Living room

                Bunk-bed, 2 x Double bed
                </Typography>
              </CardContent>
              <CardActions className={classes.actions} disableActionSpacing>
                <IconButton aria-label="edit" onClick={this.handleClickOpen('body')}>
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
            <div style={{marginRight:'6%',width:'50%'}}>
                <TextField
                    required
                    select
                    id="standard-required"
                    label="Number of Bathrooms"
                    className={classes.textField}
                    margin="normal"
                    style={{width:'100%'}}
                    variant="standard"
                >
                {bedRoom.map(option => (
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
                ))}
                </TextField>
            </div>
            <div style={{marginRight:'6%',width:'50%'}}>
            <Card  style={{width:"100%"}}>
              <CardHeader
                title="Bathroom 1"
              />
              <CardContent>
                <Typography component="p">
                Full bathroom

                Toilet, Shower over bath, Standard bath
                </Typography>
              </CardContent>
              <CardActions className={classes.actions} disableActionSpacing>
                <IconButton aria-label="edit" onClick={this.handleClickOpenBath('body')}>
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
            <div style={{marginRight:'6%',width:'50%'}}>
                <TextField
                    required
                    select
                    id="standard-required"
                    label="Number of Kitchens"
                    className={classes.textField}
                    margin="normal"
                    style={{width:'100%'}}
                    variant="standard"
                >
                {kitchens.map(option => (
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
                ))}
                </TextField>
            </div>
            <div style={{marginRight:'6%',width:'50%'}}>
                <TextField
                    required
                    select
                    id="standard-required"
                    label="Kitchen 1"
                    className={classes.textField}
                    margin="normal"
                    style={{width:'100%'}}
                    variant="standard"
                >
                {kitchenFacilities.map(option => (
                    <MenuItem key={option} value={option}>
                        {option}
                    </MenuItem>
                ))}
                </TextField>
            </div>
            <h3>Other Rooms</h3>
            <Divider component="p" />
            <div style={{marginRight:'6%',width:'75%'}}>
              <FormControlLabel className={classes.align}
                control={
                  <Checkbox
                    checked={this.state.checkedB}
                    onChange={this.handleChange('dining')}
                    value="checkedB"
                    color="primary"
                  />
                }
                label="Dining Room"
              />
              <FormControlLabel className={classes.align}
                control={
                  <Checkbox
                    checked={this.state.checkedB}
                    onChange={this.handleChange('dining')}
                    value="checkedB"
                    color="primary"
                  />
                }
                label="Drying Room"
              />
              <FormControlLabel className={classes.align}
                control={
                  <Checkbox
                    checked={this.state.checkedB}
                    onChange={this.handleChange('dining')}
                    value="checkedB"
                    color="primary"
                  />
                }
                label="Eating area"
              />
              <FormControlLabel className={classes.align}
                control={
                  <Checkbox
                    checked={this.state.checkedB}
                    onChange={this.handleChange('dining')}
                    value="checkedB"
                    color="primary"
                  />
                }
                label="Fitness room"
              />
              <FormControlLabel className={classes.align}
                control={
                  <Checkbox
                    checked={this.state.checkedB}
                    onChange={this.handleChange('dining')}
                    value="checkedB"
                    color="primary"
                  />
                }
                label="Games Room"
              />
              <FormControlLabel className={classes.align}
                control={
                  <Checkbox
                    checked={this.state.checkedB}
                    onChange={this.handleChange('dining')}
                    value="checkedB"
                    color="primary"
                  />
                }
                label="Hall"
              />
              <FormControlLabel className={classes.align}
                control={
                  <Checkbox
                    checked={this.state.checkedB}
                    onChange={this.handleChange('dining')}
                    value="checkedB"
                    color="primary"
                  />
                }
                label="Laundry"
              />
              <FormControlLabel className={classes.align}
                control={
                  <Checkbox
                    checked={this.state.checkedB}
                    onChange={this.handleChange('dining')}
                    value="checkedB"
                    color="primary"
                  />
                }
                label="Office"
              />
              <FormControlLabel className={classes.align}
                control={
                  <Checkbox
                    checked={this.state.checkedB}
                    onChange={this.handleChange('dining')}
                    value="checkedB"
                    color="primary"
                  />
                }
                label="Library"
              />
              <FormControlLabel className={classes.align}
                control={
                  <Checkbox
                    checked={this.state.checkedB}
                    onChange={this.handleChange('dining')}
                    value="checkedB"
                    color="primary"
                  />
                }
                label="Pantry"
              />
              <FormControlLabel className={classes.align}
                control={
                  <Checkbox
                    checked={this.state.checkedB}
                    onChange={this.handleChange('dining')}
                    value="checkedB"
                    color="primary"
                  />
                }
                label="Studio"
              />
              <FormControlLabel className={classes.align}
                control={
                  <Checkbox
                    checked={this.state.checkedB}
                    onChange={this.handleChange('dining')}
                    value="checkedB"
                    color="primary"
                  />
                }
                label="TV Room"
              />
            </div>
          </FormControl>
          <Button variant="contained" style={{marginTop:"2%"}} color="primary" className={classes.button}>
              Next
          </Button>
        </form>
        <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            scroll={this.state.scroll}
            aria-labelledby="scroll-dialog-title"
          >
            <DialogTitle id="scroll-dialog-title">Choose beds for Bedroom 1</DialogTitle>
            <DialogContent>
              <p>Add beds by choosing the quantities below.</p>
              <form autoComplete="off" style={{textAlign:'left'}}>
                <FormControl className={classes.formControl} style={{width:'100%'}}>
                    <div style={{width:"100%"}}>
                      <TextField
                        required
                        select
                        style={{width:"97%"}}
                        id="standard-required"
                        label="Bedroom type"
                        className={classes.textField}
                        margin="normal"
                        variant="standard"
                      >
                      {bedRoomType.map(option =>(
                        <MenuItem key={option} value={option}>
                          {option}
                      </MenuItem>
                      ))}
                      </TextField>
                    </div>
                    {count.map(option => (
                      <div style={{width:"100%"}}>
                        {option.labels.map(label=>(
                          <div style={{width:"47%",display:'inline-block',marginRight:"3%"}}> 
                            <TextField
                              required
                              select
                              id="standard-required"
                              label={label}
                              style={{width:'100%'}}
                              className={classes.textField}
                              margin="normal"
                              variant="standard"
                            >
                            {bedCount.map(option => (
                              <MenuItem key={option} value={option}>
                                {option}
                              </MenuItem>
                            ))}
                            </TextField>
                          </div>
                        ))}
                      </div>
                    ))}
                </FormControl>
              </form>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClose} color="primary">
                Save
              </Button>
            </DialogActions>
          </Dialog>
          <Dialog
            open={this.state.openBath}
            onClose={this.handleCloseBathroom}
            scroll={this.state.scroll}
            aria-labelledby="scroll-dialog-title"
          >
            <DialogTitle id="scroll-dialog-title">What's in Bathroom 1</DialogTitle>
            <DialogContent>
              <p>Define the bathroom features below</p>
              <form autoComplete="off" style={{textAlign:'left'}}>
                <FormControl className={classes.formControl} style={{width:'100%'}}>
                    <div style={{width:"100%"}}>
                      <TextField
                        required
                        select
                        style={{width:"97%"}}
                        id="standard-required"
                        label="Bathroom type"
                        className={classes.textField}
                        margin="normal"
                        variant="standard"
                      >
                      {bathType.map(option =>(
                        <MenuItem key={option} value={option}>
                          {option}
                      </MenuItem>
                      ))}
                      </TextField>
                    </div>
                    <div style={{width:"100%"}}>
                      <TextField
                        required
                        select
                        style={{width:"97%"}}
                        id="standard-required"
                        label="Toilet"
                        className={classes.textField}
                        margin="normal"
                        variant="standard"
                      >
                      {toilet.map(option =>(
                        <MenuItem key={option} value={option}>
                          {option}
                      </MenuItem>
                      ))}
                      </TextField>
                    </div>
                    <div style={{width:"100%"}}>
                      <TextField
                        required
                        select
                        style={{width:"97%"}}
                        id="standard-required"
                        label="Shower"
                        className={classes.textField}
                        margin="normal"
                        variant="standard"
                      >
                      {shower.map(option =>(
                        <MenuItem key={option} value={option}>
                          {option}
                      </MenuItem>
                      ))}
                      </TextField>
                    </div>
                    <div style={{width:"100%"}}>
                      <TextField
                        required
                        select
                        style={{width:"97%"}}
                        id="standard-required"
                        label="Bath"
                        className={classes.textField}
                        margin="normal"
                        variant="standard"
                      >
                      {bath.map(option =>(
                        <MenuItem key={option} value={option}>
                          {option}
                      </MenuItem>
                      ))}
                      </TextField>
                    </div>
                </FormControl>
              </form>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleCloseBathroom} color="primary">
                Save
              </Button>
            </DialogActions>
          </Dialog>
        </div>
          {/* <div style={{width:"20%",float:"left",marginTop:"10%"}}>
            <Card className={classes.card}>
              <CardHeader className={classes.title}
                title="Where can your guests sleep?"
              />
              <CardContent>
                <Typography component="p">
                  Even if you offer a sofa-bed in the living room you can add living room as a bedroom.
                </Typography>
              </CardContent>
            </Card>
          </div> */}
      </div>
    );
  }
}

Creation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Creation);
