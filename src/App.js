import React, { useState } from 'react';
import './App.css';
import nav from './nav'
import Details from './details';
import AppBar from '@mui/material/AppBar';
import Table from '@mui/material/Table';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import data from './restrauntData.json';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { BrowserRouter as Router, Switch, Route,Routes, Link, Navigate } from 'react-router-dom';
import {Link} from "react-router-dom";




const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
  Link: {

  }
}));



function App() {
  const [contacts, setContacts] = useState(data);
  
  return (

    <div className="App">
      <Router>
        <Route></Route>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
              align="left"
            >
              San Antonio Taco Shops
            </Typography>
            <Button color="inherit" component={Link} to ={`/.details.js`}>listings</Button>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
      </Router>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650}} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>San Antonio Taco Shops</StyledTableCell>
              <StyledTableCell align="left">Name</StyledTableCell>
              <StyledTableCell align="left">Address</StyledTableCell>
              <StyledTableCell align="left">Info</StyledTableCell>
              <StyledTableCell align="left">Directions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contacts.map((contacts) => (
              <TableRow
                key={contacts.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0} }}
              >
                <TableCell component="th" scope="row">
                  {contacts.name}
                </TableCell>
                <TableCell align="left">{contacts.Name}</TableCell>
                <TableCell align="left">{contacts.address}</TableCell>
                <TableCell align="left">{contacts.phoneNumber}</TableCell>
                <TableCell align="left">directions</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default App;
