import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
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
import MenuBookIcon from '@material-ui/icons/MenuBook'
import PersonPinIcon from '@material-ui/icons/PersonPin'
import MailIcon from '@material-ui/icons/Mail'
import PhoneIcon from '@material-ui/icons/Phone'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Logo from './Logo'
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
      height: '0'
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
    padding: '10px',
  },
  Watermark: {
    margin: 'auto auto 0 auto',
  },
  SiteInfo: {
    display: 'flex',
    height: '100%',
  },
  navIcon: {
    color: '#3c40c6',
    marginLeft: '2em',
  },
  linkItem: {
    textAlign: 'right'
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
      <Typography variant="h5" className={classes.DrawerLogo} component={Link} to="/"><Logo /></Typography>
      <Divider />
      <List>
          <ListItem className={classes.linkItem} button component={Link} to="/">
            <ListItemText primary={'Home'} />
            <ListItemIcon className={classes.navIcon}><HomeIcon /></ListItemIcon>
          </ListItem>
          {/* <ListItem className={classes.LinkItem} button component={ScrollLink} offset={-80} smooth={true} duration={500} to="kirjamme">
            
              <ListItemIcon><MenuBookIcon /></ListItemIcon>
              <ListItemText primary={'Kirjamme'} />
          </ListItem> */}
          <ListItem className={classes.linkItem} button component={Link} to="/kirjamme">
            <ListItemText primary={'Kirjamme'} />
            <ListItemIcon className={classes.navIcon}><MenuBookIcon /></ListItemIcon>
          </ListItem>
          <ListItem className={classes.linkItem} button component={Link} to="/cart">
            <ListItemText primary={'Checkout'} />
            <ListItemIcon className={classes.navIcon}><ShoppingCartIcon /></ListItemIcon>
          </ListItem>
          <ListItem className={classes.linkItem} button component={Link} to="/tekijä">
            <ListItemText primary={'Tekijä'} />
            <ListItemIcon className={classes.navIcon}><PersonPinIcon /></ListItemIcon>
          </ListItem>
      </List>
      <Divider />
      <List>
          <ListItem className={classes.linkItem}>
            <ListItemIcon className={classes.footerIcon}><MailIcon /></ListItemIcon>
            <Typography className={classes.footerText} variant="subtitle2">birgit.saatsi@mukamat.fi</Typography>
          </ListItem>
          <ListItem className={classes.linkItem}>
            <ListItemIcon className={classes.footerIcon}><PhoneIcon /></ListItemIcon>
            <Typography className={classes.footerText} variant="subtitle2">050-3451712</Typography>
          </ListItem>
      </List>
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
        <Toolbar classes={classes.toolBar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
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

        <App />
      </main>
    </Router>
    </div>
  );
}

export default Navbar;