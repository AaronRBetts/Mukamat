import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  media: {
    width: '45px',
    height: '70px',
    margin: '0'
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
    minWidth: '30px'
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'inline-grid',
    textAlign: 'center',
    border: '1px solid #ccc',
    borderRadius: '3px'
  },
  button: {
    padding: '0',
    margin: '8px',
    '& button > span > svg': {
      fontSize: '2rem'
    }
  },
  quantity: {
    marginLeft: 'auto',
    display: 'flex',
    alignItems: 'center',
  },
}));