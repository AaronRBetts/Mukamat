import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    boxShadow: '2px 5px 30px rgba(0,0,0,0.05)',
    borderRadius: '5px',
    padding: '10px',
    margin: '10px 10px',
  },
  root: {
    flexGrow: 1,
  },
  qtyWrapper: {
    padding: '10px',
    display: 'flex',
  }
}));