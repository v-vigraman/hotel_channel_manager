import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import red from '@material-ui/core/colors/red';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Photos from './photos'
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


class MapPhotos extends React.Component {
  state = { open:false,scroll:'paper' };

  handleClickOpen =  () =>{
    this.setState({ open: true,scroll:'paper' });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    const { classes } = this.props;

    return (
    <div style={{textAlign:'left'}}>
        <div className={classes.card} style={{marginTop:'2%',width:"28%",display:'inline-block',marginRight:'2%'}}>
        <IconButton onClick={this.handleClickOpen}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>								
        </IconButton>
        </div>
      <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          scroll={this.state.scroll}
          aria-labelledby="scroll-dialog-title"
        >
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

    );
  }
}

MapPhotos.propTypes = {
  classes: PropTypes.object.isRequired,

};

export default withStyles(styles)(MapPhotos);
