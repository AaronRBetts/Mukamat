import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: '5%',
  },
  emptyButton: {
    margin: '3px',
    [theme.breakpoints.up('xs')]: {
    },
  },
  checkoutButton: {
    margin: '3px',
  },
  link: {
    textDecoration: 'none',
  },
  cardDetails: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    '& h6': {
      margin: 'auto'
    }
  },
  paper: {
    padding: theme.spacing(1),
  },
  table: {
    '& th' : {
      padding: '4px'
    }
  }
}));