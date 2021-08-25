import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Accordion from '@material-ui/core/Accordion';
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
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Logo from './Logo'
import App from '../../App'
import bgImage from '../../images/geometry2.png'

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundImage: `url(${bgImage})`,
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    background: 'linear-gradient(155deg, #3425AF -50%, #C56CD6 150%)',
    [theme.breakpoints.up('sm')]: {
      height: '0'
    },
  },
  DrawerLogo: {
    height: '210px',
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
    justifyContent: "space-evenly"
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
    fontSize: '0.8rem'
  },
  bookTitle: {
    fontSize: '0.6rem'
  },
  Accordion: {
    padding: '0'
  },
  mobileLogo: {

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
    <div className={classes.drawerContainer}>
      <List>
      <Typography variant="h5" className={classes.DrawerLogo} component={Link} to="/"><Logo /></Typography>
      <Divider />
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>Kirjamme</Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.Accordion}>
              <List>
                <ListItem className={classes.linkItem} button component={Link} to="/kirjamme/vesseli">
                  
                  Vesseli
                </ListItem>
                <ListItem className={classes.linkItem} button component={Link} to="/kirjamme/Matilda">
                  
                  Matilda
                </ListItem>
                <ListItem className={classes.linkItem} button component={Link} to="/kirjamme/Mukamatti">
                  
                  Mukamatti
                </ListItem>
                <ListItem className={classes.linkItem} button component={Link} to="/kirjamme/Matti">
                  
                  Matti
                </ListItem>
                <ListItem className={classes.linkItem} button component={Link} to="/kirjamme/Lukukirja">
                  
                  Lukukirja
                </ListItem>
                <ListItem className={classes.linkItem} button component={Link} to="/kirjamme/Kirjaintaulu">
                  
                  Kirjaintaulut
                </ListItem>
                <ListItem className={classes.linkItem} button component={Link} to="/kirjamme/Kirjaintaulut-and-kirjaintaulukirja">
                  
                  Kirjaintaulut & Kirjaintaulukirja
                </ListItem>
                <ListItem className={classes.linkItem} button component={Link} to="/kirjamme/Play-in-English">
                  
                  Play in English
                </ListItem>
                <ListItem className={classes.linkItem} button component={Link} to="/kirjamme/Step-by-step">
                  
                  Step by step
                </ListItem>
                <ListItem className={classes.linkItem} button component={Link} to="/kirjamme/Matkaan">
                  
                  Matkaan
                </ListItem>
                <ListItem className={classes.linkItem} button component={Link} to="/kirjamme/pikku-matin-mukavat-peli-1">
                  
                  Pikku-matin-mukavat-peli-1 (S)
                </ListItem>
                <ListItem className={classes.linkItem} button component={Link} to="/kirjamme/pikku-matin-mukavat-peli-1-suuraakkoset">
                  
                  Pikku matin mukavat peli 1 (P)
                </ListItem>
                <ListItem className={classes.linkItem} button component={Link} to="/kirjamme/pikku-matin-mukavat-peli-2">
                  
                  Pikku matin mukavat peli 2
                </ListItem>
              </List>
            </AccordionDetails>
          </Accordion>
          <ListItem className={classes.linkItem} button component={Link} to="/">
            <ListItemIcon className={classes.navIcon}><HomeIcon /></ListItemIcon>
            <ListItemText primary={'Etusivu'} />
          </ListItem>
          {/* <ListItem className={classes.LinkItem} button component={ScrollLink} offset={-80} smooth={true} duration={500} to="kirjamme">
            
              <ListItemIcon><MenuBookIcon /></ListItemIcon>
              <ListItemText primary={'Kirjamme'} />
          </ListItem> */}
          <ListItem className={classes.linkItem} button component={Link} to="/cart">
            <ListItemIcon className={classes.navIcon}><ShoppingCartIcon /></ListItemIcon>
            <ListItemText primary={'Ostoskori'} />
          </ListItem>
      </List>
      <Divider />
      <List>
          <ListItem className={classes.linkItem}>
            <ListItemIcon className={classes.footerIcon}><MailIcon /></ListItemIcon>
            <Typography className={classes.footerText} variant="subtitle2">mukamat@gmail.com</Typography>
          </ListItem>
          <ListItem className={classes.linkItem}>
            <ListItemIcon className={classes.footerIcon}><PhoneIcon /></ListItemIcon>
            <Typography className={classes.footerText} variant="subtitle2">050-3451712</Typography>
          </ListItem>
      </List>
      <Divider />
      <List>
          <ListItem className={classes.linkItem} button component={Link} to="/privacy_policy">
            Privacy Policy
          </ListItem>
          <ListItem className={classes.linkItem} button component={Link} to="/toimitus">
            Toimitus
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
        <Toolbar className={classes.toolBar}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Logo  className={classes.mobileLogo}/>
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