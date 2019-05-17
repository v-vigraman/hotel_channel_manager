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
import Photos from './photos'

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


const rooms = [1,2,3,4]
const airCondition=['Yes','No']
const bedRoomType=['Single','Queen','King','Sofa Bed'];
const kitchenBool=['Yes','No']
const internet = ["NO internet", "Wired internet", "Wireless internet (WIFI)"];
let kidsSuitable = ['Children welcome','Great for children','Not suitable for children'];

const pool = [
  "No swimming pool",
  "Private indoor pool",
  "Private outdoor pool",
  "Shared indoor pool",
  "Shared outdoor pool"
];
const washing = [
  "No washing machine",
  "Shared washing machine",
  "Washing machine"
];
const heater = [
  "Central heating",
  "Electric heating",
  "Gas heating",
  "No heating",
  "Stove or fireplace"
];

const roomType = [
  "Deluxe Room",
  "Standard Room"
]

class Creation extends React.Component {
  state = {
    dining:true,
    open:false,
    scroll:'paper',
    openBath:false,
    openPhotos:false 
  };
  
  handleClickOpen = scroll => () => {
    this.setState({ open: true, scroll });
  };

  handleClickOpenPhotos = scroll => () => {
    this.setState({ openPhotos: true, scroll });
  };

  handleClosePhotos = () => {
    this.setState({ openPhotos: false });
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

  handleChangeFacilities = name => event => {
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
        <div style={{width:"50%",marginBottom:"10%",float:"left"}}>
        <form className={classNames(classes.container, classes.formTemplate)} style={{textAlign:"left",marginBottom:"2%"}} noValidate autoComplete="off">
          <FormControl className={classes.formControl} style={{width:'100%'}}>
            <div style={{marginRight:'6%',width:'50%'}}>
                <TextField
                    required
                    select
                    id="standard-required"
                    label="Number of Different rooms"
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
                title="Room 1"
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
                <IconButton aria-label="contentCopy">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
                </IconButton>
                <IconButton onClick={this.handleClickOpenPhotos}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>								
                </IconButton>
              </CardActions>
            </Card>
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
                label="Smoking Room"
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
              Save
          </Button>
        </form>
        <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            scroll={this.state.scroll}
            aria-labelledby="scroll-dialog-title"
          >
            <DialogTitle id="scroll-dialog-title">Add Facilities for selected room.</DialogTitle>
            <DialogContent>
              <form autoComplete="off" style={{textAlign:'left'}}>
                <FormControl className={classes.formControl} style={{width:'100%'}}>
                    <div style={{width:"100%"}}>
                      <div style={{width:"45%",marginRight:"10%",display:"inline-block"}}>
                        <TextField
                          required
                          select
                          id="standard-required"
                          label="Room in Which Floor"
                          className={classes.textField}
                          margin="normal"
                          style={{width:'100%'}}
                          variant="standard"
                      >
                      {rooms.map(option => (
                          <MenuItem key={option} value={option}>
                              {option}
                          </MenuItem>
                      ))}
                      </TextField>
                    </div>
                    <div style={{width:"45%",display:"inline-block"}}>
                      <TextField
                        required
                        type="number"
                        style={{width:"100%"}}
                        id="standard-required"
                        label="Basic rate"
                        className={classes.textField}
                        margin="normal"
                      />
                    </div>
                    <div style={{width:"45%",marginRight:"10%",display:"inline-block"}}>
                      <TextField
                        required
                        select
                        style={{width:"100%"}}
                        id="standard-required"
                        label="Bed type"
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
                    <div style={{width:"45%",display:"inline-block"}}>
                      <TextField
                        select
                        required
                        style={{width:"100%"}}
                        id="standard-required"
                        label="Air-conditioning"
                        className={classes.textField}
                        margin="normal"
                      >
                        {airCondition.map(option => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </TextField>
                    </div>
                    <div style={{width:"45%",marginRight:"10%",display:"inline-block"}}>
                      <TextField
                        required
                        select
                        style={{width:"100%"}}
                        id="standard-required"
                        label="Kitchen"
                        className={classes.textField}
                        margin="normal"
                        variant="standard"
                      >
                      {kitchenBool.map(option =>(
                        <MenuItem key={option} value={option}>
                          {option}
                      </MenuItem>
                      ))}
                      </TextField>
                    </div>
                    <div style={{width:"45%",display:"inline-block"}}>
                      <TextField
                        select
                        required
                        id="standard-required"
                        label="Internet"
                        style={{width:"100%"}}
                        className={classes.textField}
                        margin="normal"
                        variant="standard"
                      >
                        {internet.map(option => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </TextField>
                    </div>
                    <div style={{width:"45%",display:"inline-block",marginRight:"10%"}}>
                      <TextField
                        select
                        required
                        id="standard-required"
                        label="Swiming Pool"
                        style={{width:"100%"}}
                        className={classes.textField}
                        margin="normal"
                        variant="standard"
                      >
                        {pool.map(option => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </TextField>
                    </div>
                    <div style={{width:"45%",display:"inline-block"}}>
                      <TextField
                        select
                        required
                        id="standard-required"
                        label="Heater"
                        style={{width:"100%"}}
                        className={classes.textField}
                        margin="normal"
                        variant="standard"
                      >
                        {heater.map(option => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </TextField>
                    </div>
                    <div style={{width:"45%",display:"inline-block",marginRight:"10%"}}>
                      <TextField
                        select
                        required
                        id="standard-required"
                        label="Washing Machine"
                        style={{width:"100%"}}
                        className={classes.textField}
                        margin="normal"
                        variant="standard"
                      >
                        {washing.map(option => (
                          <MenuItem key={option} value={option}>
                            {option}
                          </MenuItem>
                        ))}
                      </TextField>
                    </div>
                    <div style={{width:"45%",display:"inline-block"}}>
                      <TextField
                        select
                        required
                        style={{width:"100%"}}
                        id="standard-required"
                        label="Suitable For Kids"
                        className={classes.textField}
                        margin="normal"
                        variant="standard"
                      >
                      {kidsSuitable.map(option => (
                      <MenuItem key={option} value={option}>
                          {option}
                      </MenuItem>
                      ))}
                      </TextField>
                    </div>
                    <div style={{width:"45%",display:"inline-block"}}>
                      <TextField
                        select
                        required
                        style={{width:"100%"}}
                        id="standard-required"
                        label="Room Type"
                        className={classes.textField}
                        margin="normal"
                        variant="standard"
                      >
                      {roomType.map(option => (
                      <MenuItem key={option} value={option}>
                          {option}
                      </MenuItem>
                      ))}
                      </TextField>
                    </div>
                  </div>
                  <div style={{  width: "100%" }}>
                    <FormControlLabel
                      className={classes.align}
                      control={
                        <Checkbox
                          checked={this.state.checkedB}
                          onChange={this.handleChangeFacilities("coffee")}
                          value="checkedB"
                          color="primary"
                        />
                      }
                      label="Coffee machine"
                    />
                    <FormControlLabel
                      className={classes.align}
                      control={
                        <Checkbox
                          checked={this.state.checkedB}
                          onChange={this.handleChangeFacilities("water")}
                          value="checkedB"
                          color="primary"
                        />
                      }
                      label="Dish-water"
                    />
                    <FormControlLabel
                      className={classes.align}
                      control={
                        <Checkbox
                          checked={this.state.checkedB}
                          onChange={this.handleChangeFacilities("fridge")}
                          value="checkedB"
                          color="primary"
                        />
                      }
                      label="Fridge"
                    />
                    <FormControlLabel
                      className={classes.align}
                      control={
                        <Checkbox
                          checked={this.state.checkedB}
                          onChange={this.handleChangeFacilities("microwave")}
                          value="checkedB"
                          color="primary"
                        />
                      }
                      label="Microwave"
                    />
                    <FormControlLabel
                      className={classes.align}
                      control={
                        <Checkbox
                          checked={this.state.checkedB}
                          onChange={this.handleChangeFacilities("toaster")}
                          value="checkedB"
                          color="primary"
                        />
                      }
                      label="Toaster"
                    />
                    <FormControlLabel
                      className={classes.align}
                      control={
                        <Checkbox
                          checked={this.state.checkedB}
                          onChange={this.handleChangeFacilities("hall")}
                          value="checkedB"
                          color="primary"
                        />
                      }
                      label="Hall"
                    />
                    <FormControlLabel
                      className={classes.align}
                      control={
                        <Checkbox
                          checked={this.state.checkedB}
                          onChange={this.handleChangeFacilities("gas")}
                          value="checkedB"
                          color="primary"
                        />
                      }
                      label="Gas Oven"
                    />
                    <FormControlLabel
                      className={classes.align}
                      control={
                        <Checkbox
                          checked={this.state.checkedB}
                          onChange={this.handleChangeFacilities("freezer")}
                          value="checkedB"
                          color="primary"
                        />
                      }
                      label="Freezer"
                    />
                    <FormControlLabel
                      className={classes.align}
                      control={
                        <Checkbox
                          checked={this.state.checkedB}
                          onChange={this.handleChangeFacilities("kitchenWare")}
                          value="checkedB"
                          color="primary"
                        />
                      }
                      label="Kitchenware"
                    />
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
          <Dialog
                open={this.state.openPhotos}
                onClose={this.handleClosePhotos}
                scroll={this.state.scroll}
                aria-labelledby="scroll-dialog-title"
            >
            <DialogTitle id="scroll-dialog-title">Room Photos</DialogTitle>
            <DialogContent>
                <Photos/>
            </DialogContent>
            <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                  Save
                </Button>
            </DialogActions>
            </Dialog>
        </div>
      </div>
    );
  }
}

Creation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Creation);
