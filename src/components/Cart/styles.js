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
  cartDetails: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    '& div': {
      margin: 'auto'
    },
    flexWrap: 'wrap'
  },
  paper: {
    padding: theme.spacing(2),
  },
  table: {
    '& th' : {
      padding: '4px',
      fontWeight: '800'
    }
  }
}));