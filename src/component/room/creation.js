import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
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
  }
});

const floors = ['1','2','3','4','5','6','7'];

const rooms = ['1','2','3','4','5','6','7'];

const kitchens = [1,2,3,4,5]

const kitchenFacilities=['Kitchenette','Open plan kitchen','Outdoor kitchen','Separate kitchen'];

const currencies = [
    {
      value: 'INR',
      label: '₹'
    },
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    }
  ];

class Creation extends React.Component {
  state = {
    dining:true,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  constructor(props){
      super(props);
  }

  render() {
    const { classes } = this.props;
    let bedRoom=[];
    for (let i=1;i<18;i++){
      bedRoom.push(i);
    }

    return (
      <div style={{width:"50%"}}>
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
          <Divider component="li" />
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
      </div>
    );
  }
}

Creation.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Creation);
