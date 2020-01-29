import React, { useState, useEffect, useContext } from "react";
import moment from "moment";
import { TimerContext } from "../TimerContext";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  button:{
    margin:10
  },
  title: {
    fontSize:20,
  }
}));

const Timer = props => {
  const [milliseconds, setMilliseconds] = useState(0);
  const [increment, setIncrement] = useState(props.incrementValue);
  const [isActive, setIsActive] = useState(false);

  function toggle() {
    setIsActive(!isActive);
  }

  function reset() {
    setMilliseconds(0);
    setIncrement(increment);
    setIsActive(false);
  }

  useEffect(() => {
    let interval = null;
    console.log(increment);

    if (isActive) {
      interval = setInterval(() => {
        setMilliseconds(milliseconds => milliseconds + increment);
      }, 1000);
    } else if (!isActive && milliseconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, milliseconds, increment]);
  const timer = useContext(TimerContext);
  switch (props.type) {
    case 1:
      timer.setFirstTime(milliseconds);
      break;
    case 2:
      timer.setSecondTime(milliseconds);
      break;
    case 3:
      timer.setThirdTime(milliseconds);
      break;
    default:
      break;
  }

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
          <Typography
                className={classes.title}
                color="textSecondary"
                
              >
                {props.title}
              </Typography>
          <Typography
                color="textSecondary"
               
              >{moment()
              .startOf("day")
              .milliseconds(milliseconds)
              .format("mm:ss.SSS")}
            </Typography>
            <Button variant="contained" color="primary" onClick={toggle} className={classes.button}>
              {isActive ? "Pause" : "Start"}
            </Button>
            <Button variant="contained" color="secondary" onClick={reset}>
              Reset
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Timer;
