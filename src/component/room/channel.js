import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classnames from "classnames";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import red from "@material-ui/core/colors/red";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import InputAdornment from "@material-ui/core/InputAdornment";
import classNames from 'classnames';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  card: {
    maxWidth: 400,
    marginRight:"2%"
  },
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  actions: {
    display: "flex"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
});


class Channels extends React.Component {
  state = {
     expanded1: false,
     expanded2: false,
     expanded3: false,
     amount: 0 
    };

  handleExpandClick1 = () => {
    this.setState(state => ({ expanded1: !state.expanded1 }));
  };

  handleExpandClick2 = () => {
    this.setState(state => ({ expanded2: !state.expanded2 }));
  };

  handleExpandClick3 = () => {
    this.setState(state => ({ expanded3: !state.expanded3 }));
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };


  render() {
    const { classes } = this.props;

    return (
      <div style={{ textAlign: "left", marginTop: "2%" }}>
        <Card
          className={classes.card}
          style={{ display: "inline-block", width: "25%" }}
        >
          <CardMedia
            className={classes.media}
            image="https://etimg.etb2bimg.com/photo/63435927.cms"
            title="Paella dish"
          />
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded
              })}
              onClick={this.handleExpandClick1}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded1} timeout="auto" unmountOnExit>
            <CardContent>
              <p style={{fontSize:'0.7em'}}>Specify the ammount display for specific OTA's from Basic Rates in (%)</p>
              <TextField
                id="standard-adornment-amount"
                className={classNames(classes.margin, classes.textField)}
                variant="standard"
                label="Percentage"
                value={this.state.amount}
                onChange={this.handleChange("amount")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">%</InputAdornment>
                  )
                }}
              />
            </CardContent>
          </Collapse>
        </Card>
        <Card
          className={classes.card}
          style={{ display: "inline-block", width: "25%" }}
        >
          <CardMedia
            className={classes.media}
            image="https://seeklogo.com/images/B/booking-logo-504475D532-seeklogo.com.png"
            title="Paella dish"
          />
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded
              })}
              onClick={this.handleExpandClick2}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded2} timeout="auto" unmountOnExit>
            <CardContent>
              <p style={{fontSize:'0.7em'}}>Specify the ammount display for specific OTA's from Basic Rates in (%)</p>
              <TextField
                id="standard-adornment-amount"
                className={classNames(classes.margin, classes.textField)}
                variant="standard"
                label="Percentage"
                value={this.state.amount}
                onChange={this.handleChange("amount")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">%</InputAdornment>
                  )
                }}
              />
            </CardContent>
          </Collapse>
        </Card>
        <Card
          className={classes.card}
          style={{ display: "inline-block", width: "25%" }}
        >
          <CardMedia
            className={classes.media}
            image="data:image/png;base64,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"
            title="Paella dish"
          />
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label="Add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded
              })}
              onClick={this.handleExpandClick3}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded3} timeout="auto" unmountOnExit>
            <CardContent>
              <p style={{fontSize:'0.7em'}}>Specify the ammount display for specific OTA's from Basic Rates in (%)</p>
              <TextField
                id="standard-adornment-amount"
                className={classNames(classes.margin, classes.textField)}
                variant="standard"
                label="Percentage"
                value={this.state.amount}
                onChange={this.handleChange("amount")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">%</InputAdornment>
                  )
                }}
              />
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
  }
}

Channels.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Channels);
