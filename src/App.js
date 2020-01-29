import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import Timer from "./components/timer";
import TotalTimer from "./components/totaltimer";
import { TimerProvider } from "./TimerContext";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
    marginRight: 0
  },
  paper: {
    height: 140,
    width: 340,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  control: {
    padding: theme.spacing(2)
  },
  title: {
    fontSize:24,
    paddingTop:30
  }
}));

function App() {
  const classes = useStyles();
  return (
    <TimerProvider>
      <ThemeProvider>
        <Grid container className={classes.root} spacing={2}>
          <Grid container justify="center" spacing={0} item xs={6}>
            <Paper className={classes.paper}>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Total Timer
              </Typography>
              <TotalTimer />
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Timer incrementValue={10000} type={1} title={'Timer 1'} />
            <Timer incrementValue={1000} type={2} title={'Timer 2'} />
            <Timer incrementValue={100} type={3} title={'Timer 3'} />
          </Grid>
        </Grid>
      </ThemeProvider>
    </TimerProvider>
  );
}

export default App;
