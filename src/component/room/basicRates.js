import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import classNames from 'classnames';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});


function BasicRates(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root} style={{width:"98%"}}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell style={{fontWeight:"bold",color:"black"}}>Rooms</TableCell>
            <TableCell align="center" style={{fontWeight:"bold",color:"black"}}>Basic Rates</TableCell>
            <TableCell align="center" style={{fontWeight:"bold",color:"black"}}>Weekend Rate</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              Room 1
            </TableCell>
            <TableCell component="th" scope="row" align="center">
              <TextField
                id="filled-adornment-amount"
                className={classNames(classes.margin, classes.textField)}
                variant="filled"
                label="Amount"
                InputProps={{
                  startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
              />
            </TableCell>
            <TableCell align="center">
              <TextField
                  id="filled-adornment-amount"
                  className={classNames(classes.margin, classes.textField)}
                  variant="filled"
                  label="Amount"


                  InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                  }}
                />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Room 2
            </TableCell>
            <TableCell component="th" align="center" scope="row">
              <TextField
                id="filled-adornment-amount"
                className={classNames(classes.margin, classes.textField)}
                variant="filled"
                label="Amount"
                InputProps={{
                  startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
              />
            </TableCell>
            <TableCell align="center">
              <TextField
                  id="filled-adornment-amount"
                  className={classNames(classes.margin, classes.textField)}
                  variant="filled"
                  label="Amount"


                  InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                  }}
                />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Room 3
            </TableCell>
            <TableCell component="th" scope="row" align="center">
              <TextField
                id="filled-adornment-amount"
                className={classNames(classes.margin, classes.textField)}
                variant="filled"
                label="Amount"
                InputProps={{
                  startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
              />
            </TableCell>
            <TableCell align="center">
              <TextField
                  id="filled-adornment-amount"
                  className={classNames(classes.margin, classes.textField)}
                  variant="filled"
                  label="Amount"


                  InputProps={{
                    startAdornment: <InputAdornment position="start">$</InputAdornment>,
                  }}
                />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  );
}

BasicRates.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BasicRates);