import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import cookie from 'cookie';

function Nav(props) {
  const { setLoggedIn, loggedIn } = props;

  const handleClick = () => {
    console.log('click');
    document.cookie = 'loggedIn=false';
    setLoggedIn(false);
  };
  return (
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
            sx={{
              flexGrow: 1,
              // remove link styles
              color: 'inherit',
              textDecoration: 'none',
            }}
            align="left"
            component={Link}
            to="/"
          >
            San Antonio Taco Shops
          </Typography>
          <Button color="inherit" component={Link} to={`/details`}>
            listings
          </Button>
          {!loggedIn ? (
            <Button color="inherit" component={Link} to={`/login`}>
              Login
            </Button>
          ) : (
            <div>
              <Button
                color="inherit"
                onClick={handleClick}
                component={Link}
                to={`/login`}
              >
                Logout
              </Button>
              <Button color="inherit" component={Link} to={'/adding'}>
                Add
              </Button>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
export default Nav;
