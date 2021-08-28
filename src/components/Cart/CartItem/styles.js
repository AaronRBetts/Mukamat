import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  media: {
    width: '50px',
    height: '80px',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'grid',
    textAlign: 'center',
  },
  button: {
    fontSize: '4rem',
  },
  quantity: {
    marginLeft: 'auto',
    display: 'flex',
    alignItems: 'center',
  }
}));