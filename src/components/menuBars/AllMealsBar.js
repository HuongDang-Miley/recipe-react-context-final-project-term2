import React, { useContext } from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Box from '@material-ui/core/Box';
import { AuthContext } from '../Context';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: 'white',
    marginRight: 40,
  },
}));

export default function MenuAppBar(props) {
  const { auth, user, authorize, randomList, favList } = useContext(AuthContext)
  console.log('auth in MenuBar', auth)
  const classes = useStyles();
  // const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  // const handleChange = (event) => {
  //   setAuth(event.target.checked);
  // };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogOut = () => {
    localStorage.removeItem('jwtToken')
    localStorage.removeItem('clickedMeal')
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar display="flex" p={1} >
          <Box width='100%'>
            <IconButton>
              <NavLink to='/all-meals' variant="h6" activeStyle={{ textDecoration: 'underline' }} className={classes.title}>
                All Meals
          </NavLink>
            </IconButton>
            <IconButton>
              <NavLink to='/favorites' variant="h6" activeStyle={{ textDecoration: 'underline' }} className={classes.title}>
                Favorites
          </NavLink>
            </IconButton>


          </Box>
          <Box p={1} flexShrink={1}>
            {user && (
              <div>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle style={{ marginRight: 4 }} />
                  <span style={{ marginRight: 10 }}>Account</span>
                  {/* <NavLink to='/login' variant="h6" activeStyle={{ textDecoration: 'underline' }} className={classes.title}>
                    <button
                      onClick={handleLogOut}>
                      Logout
                    </button>
                  </NavLink> */}
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose} style={{ color: 'black' }}>{user.email}</MenuItem>
                  <NavLink to='/login'  activeStyle={{ textDecoration: 'underline'}} style={{ color: 'black' }}>
                    <MenuItem onClick={handleLogOut}>Log Out</MenuItem>
                  </NavLink>
                </Menu>
              </div>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
}



