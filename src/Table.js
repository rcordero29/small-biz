import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { useState } from 'react';
import data from './restrauntData.json';
import { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@material-ui/core';
import { Link } from 'react-router-dom';
import cookie from 'cookie';

function TableContent() {
  const [contacts, setContacts] = useState(data);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
    Link: {},
  }));

  if (cookie.parse(document.cookie).loggedIn === 'true') {
    return (
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <StyledTableCell>San Antonio Taco Shops</StyledTableCell>
                <StyledTableCell align="left">Name</StyledTableCell>
                <StyledTableCell align="left">Address</StyledTableCell>
                <StyledTableCell align="left">Info</StyledTableCell>
                <StyledTableCell align="left">Directions</StyledTableCell>
                <StyledTableCell align="left">Delete</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {contacts.map((contacts) => (
                <TableRow
                  key={contacts.Name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {contacts.name}
                  </TableCell>
                  <TableCell align="left">{contacts.Name}</TableCell>
                  <TableCell align="left">{contacts.address}</TableCell>
                  <TableCell align="left">{contacts.phoneNumber}</TableCell>
                  <TableCell
                    align="left"
                    numeric="true"
                    component={Link}
                    to="google.com"
                  >
                    directions
                  </TableCell>
                  <TableCell align="left">
                    <button>Delete</button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <h3> add a business</h3>
        <form>
          <input
            type="text"
            name="Business Name"
            required="required"
            placeholder="Enter a Business"
          />
          <input
            type="text"
            name="Address"
            required="required"
            placeholder="Enter a address"
          />
          <input
            type="text"
            name="Phone number"
            required="required"
            placeholder="Phone Number"
          />
        </form>
      </div>
    );
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
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
          {console.log(cookie.parse(document.cookie).loggedIn)}
          {contacts.map((contacts) => (
            <TableRow
              key={contacts.Name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {contacts.name}
              </TableCell>
              <TableCell align="left">{contacts.Name}</TableCell>
              <TableCell align="left">{contacts.address}</TableCell>
              <TableCell align="left">{contacts.phoneNumber}</TableCell>
              <TableCell
                align="left"
                numeric="true"
                component={Link}
                to="google.com"
              >
                directions
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableContent;
