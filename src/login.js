import React, { useState } from 'react';
import App from './App';
import data from './restrauntData.json';
import { Button } from "@mui/material";

import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  formContainer: {
    // marginTop: theme.spacing(10),
    width: 300,
    margin: 'auto',
  },
}));

function Login(props) {
  const {setLoggedIn} = props


  const handleClick =() =>{
    console.log('click');
    document.cookie= "loggedIn=true"
    setLoggedIn(true)
  }
  const classes = useStyles();
  return (
    <div className={classes.formContainer}>
    <form className={classes.form} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Username" />
      <TextField id="standard-basic" label="Password" />
      <Button onClick={handleClick} component={Link} to={"/"} variant="contained" color="primary" >
        Login
      </Button>
    </form>
</div>
  );
}

export default Login
