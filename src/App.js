/*
  Description: Main file to load application
  Author: Trisha Patel
*/
import React from 'react';
import Grid from '@material-ui/core/Grid';
import blue from '@material-ui/core/colors/blue';
import ToDoList from './components/to-do-list/index.js'
import logo  from './assets/OpsLevelLogoText.svg'
import { makeStyles } from '@material-ui/core/styles';
const primary = blue[900]; // #F44336

const useStyles = makeStyles((theme) => ({

  header: {
    padding: '15px',
    textAlign: 'left',
  },
  title:{
    paddingTop: '15px',
    paddingBottom: '15px',
    textAlign: 'center',
    color: primary,
    fontSize:'30px',
  },
  container:{
      border:'1px solid grey',
      display: 'flex',
      width:'100%'
  }
}));
function App() {
  const classes = useStyles();

  return (
    <div className="App">
        <Grid container className={classes.container}>
        <Grid item xs={1}>
          <header className={classes.header}>
            <img src={logo} alt='OpsLevel' />
          </header>
         </Grid>
         <Grid item xs={11}>
           <header className={classes.title}>
            To-Do Tasks
           </header>
          </Grid>
        </Grid>
        <Grid container justify="center">
            <ToDoList/>
        </Grid>
    </div>
  );
}

export default App;
