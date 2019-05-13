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
    maxWidth: 400
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
  state = { expanded: false, amount: 0 };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
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
          style={{ display: "inline-block", width: "20%" }}
        >
          <CardMedia
            className={classes.media}
            image="data:image/jpeg;base64,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"
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
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <p style={{fontSize:'0.7em'}}>Specify the ammount display for specific OTA's from Basic Rates in (%)</p>
              <TextField
                id="standard-adornment-amount"
                className={classNames(classes.margin, classes.textField)}
                variant="standard"
                label="Amount"
                value={this.state.amount}
                onChange={this.handleChange("amount")}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">$</InputAdornment>
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
