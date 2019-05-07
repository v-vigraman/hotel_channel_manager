import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import LocationOn from '@material-ui/icons/LocationOn';
import Message from '@material-ui/icons/Message';
import Home from '@material-ui/icons/Home';
import Photo from '@material-ui/icons/Photo';
import Description from '@material-ui/icons/Description';
import FitnessCenter from '@material-ui/icons/FitnessCenter';
import WbSunny from '@material-ui/icons/WbSunny';
import Loyalty from '@material-ui/icons/Loyalty';
import AddBox from '@material-ui/icons/AddBox';
import LibraryBooks from '@material-ui/icons/LibraryBooks';
import AddToQueue from '@material-ui/icons/AddToQueue';
const drawerWidth = 240;



const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px',
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  toolbar:theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  icon: {
    margin: theme.spacing.unit * 2,
  },
  appBarColor:{
    backgroundColor: "#a15ea2",
  }
});

class PersistentDrawerLeft extends React.Component {
  state = {
    open: false,
    channelList:[]
  };

  constructor(props){
    super(props)
  }



  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };


  render() {
    const { classes, theme } = this.props;
    const { open } = this.state;


    return (
      <div className={classNames(classes.root, classes.toolbar)}>
        <CssBaseline />
        <AppBar
          position="fixed"
          className={classNames(classes.appBar, classes.appBarColor, {
            [classes.appBarShift]: open,
          })}
        >
          <Toolbar disableGutters={!open}>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" noWrap>
              Room Manager
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            {['Location','Basic Details','Room Creation','Photos','Description','Facilities','Basic rates','Seasonal rates','Discounts','Extras','Booking rules','House Rules','Instructions','Channels'].map((text, index) => (
              <ListItem button key={text} onClick={ () => this.props.onSelectOption(index,this.props.channels)} >
                <ListItemIcon>{(index == 0 )? 
                                  <LocationOn/>:(index ==1)? <Message/>:(index ==2 )? <Home/>:(index==3)? <Photo/>:(index==4)?<Description/>:(index==5)?<FitnessCenter/>:(index==6)?<WbSunny/>:(index==7)?<Loyalty/>:(index==8)?<AddBox/>:(index==9)?<LibraryBooks/>:(index==12)?<AddToQueue/>:<LibraryBooks/>
                                        
                               }
                                              
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
        </Drawer>
      </div>
    );
  }
}

PersistentDrawerLeft.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};


export default withStyles(styles, { withTheme: true })(PersistentDrawerLeft);