import { makeStyles, fade } from '@material-ui/core/styles';

const drawerWidth = 0;

export default makeStyles((theme) => ({
  appBar: {
    padding: '0 10vw',
    ["@media (max-width:800px)"]: { padding: '0' },
    boxShadow: '10px 10px 20px rgba(0,0,0,0,5)',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      '& >div': {
        justifyContent: 'space-between',
      }
    },
  },
  toolbar: {
    height: '0'
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  title: {
    alignItems: 'center',
    display: 'flex',
    textDecoration: 'none',
  },
  image: {
    marginRight: '10px',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  grow: {
    display: 'flex',
    flexWrap: 'nowrap',
  },
  DrawerLogo: {
    padding: '10px'
  },
  navLinks: {
    textDecoration: 'underline 0px #fff',
    color: '#000',
    margin: '0 20px',
    transition: 'all 0.2s ease',
    '&:hover': {
      textDecoration: 'underline 4px #CE9FFC',
    },
    ["@media (max-width:800px)"]: { display: 'none' },
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  }
}));