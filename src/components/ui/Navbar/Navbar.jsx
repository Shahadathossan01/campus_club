import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import { useStoreActions, useStoreState } from 'easy-peasy';

const settings = ['Profile', 'Account', 'Dashboard','logout'];

const Navbar=()=> {
  const {userData}=useStoreState(state=>state.user)
  const {logoutUser}=useStoreActions(action=>action.user)
  console.log(userData)
  const handleLogout=()=>{
    handleCloseNavMenu()
    logoutUser()
  }
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handle=()=>{
    handleCloseNavMenu()
    handleLogout()
  }
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link to='/' style={{textDecoration:'none',color:'white'}}><AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /></Link>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Link style={{textDecoration:'none',color:'white'}}>CAMPUS CLUBS</Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem  onClick={handleCloseNavMenu}>
                <Box>
                    <Link style={{textDecoration:'none'}} to='/participants_info'>
                    <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'black', display: 'block' }}>
                    participants info
                    </Button>
                    </Link>
                    <Link style={{textDecoration:'none'}} to='/register'><Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'black', display: 'block' }}>
                        register
                    </Button>
                    </Link>
                    <Link style={{textDecoration:'none'}} to='/login'><Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'black', display: 'block' }}>
                        login
                    </Button>
                    </Link>
                    <Button onClick={handleLogout} sx={{ my: 2, color: 'black', display: 'block' }}>
                        logout
                    </Button>
                    {
              userData?.user?.username
            }
                </Box>
                </MenuItem>
            </Menu>
          </Box>
          <Link to='/' style={{textDecoration:'none',color:'white'}}><AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /></Link>
          
          <Typography
            variant="h5"
            noWrap
            component="a"
            href='/'
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            <Link style={{textDecoration:'none',color:'white'}}>CAMPUS CLUBS</Link>
          </Typography>
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Link style={{textDecoration:'none'}} to='/participants_info'><Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                participants info
            </Button>
            </Link>
            <Link style={{textDecoration:'none'}} to='/register'><Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                register
            </Button>
            </Link>
            <Link style={{textDecoration:'none'}} to='/login'><Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}>
                login
            </Button>
            </Link>
            <Button onClick={handle} sx={{ my: 2, color: 'white', display: 'block' }}>
                logout
            </Button>
            {
              userData?.user?.username
            }
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
