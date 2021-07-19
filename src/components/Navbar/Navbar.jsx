import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import MenuBookIcon from '@material-ui/icons/MenuBook'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import MailIcon from '@material-ui/icons/Mail';
import GavelIcon from '@material-ui/icons/Gavel';
import App from '../../App'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      background: '#ffa801',
      color: '#1e272e'
    },
  },
  DrawerLogo: {
    padding: '10px'
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  Watermark: {
    margin: 'auto auto 0 auto',
  },
  SiteInfo: {
    display: 'flex',
    height: '100%',

  }
}));


function Navbar(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Typography variant="h5" className={classes.DrawerLogo}>Mukamat Oy</Typography>
      <Divider />
      <List>
          <ListItem button component={Link} to="/">
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary={'Home'} />
          </ListItem>
          {/* <ListItem button component={ScrollLink} offset={-80} smooth={true} duration={500} to="kirjamme">
            
              <ListItemIcon><MenuBookIcon /></ListItemIcon>
              <ListItemText primary={'Kirjamme'} />
          </ListItem> */}
          <ListItem button component={Link} to="/kirjamme">
            <ListItemIcon><MenuBookIcon /></ListItemIcon>
            <ListItemText primary={'Kirjamme'} />
          </ListItem>
          <ListItem button component={Link} to="/cart">
            <ListItemIcon><ShoppingCartIcon /></ListItemIcon>
            <ListItemText primary={'Checkout'} />
          </ListItem>
      </List>
      <Divider />
      {/* <List>
          <ListItem button component={Link} to="/about">
            <ListItemIcon><EmojiPeopleIcon /></ListItemIcon>
            <ListItemText primary={'About us'} />
          </ListItem>
          <ListItem button component={Link} to="/returns">
            <ListItemIcon><LocalShippingIcon /></ListItemIcon>
            <ListItemText primary={'Returns & Shipping'} />
          </ListItem>
          <ListItem button component={Link} to="/kirjamme">
            <ListItemIcon><GavelIcon /></ListItemIcon>
            <ListItemText primary={'Legal'} />
          </ListItem>
          <ListItem button component={Link} to="/contact">
            <ListItemIcon><MailIcon /></ListItemIcon>
            <ListItemText primary={'Contact'} />
          </ListItem>
      </List> */}
      
            
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <Router>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Mukamat
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <App />
      </main>
    </Router>
    </div>
  );
}

export default Navbar;