import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    boxShadow: '2px 5px 30px rgba(0,0,0,0.2)',
    borderRadius: '5px',
    padding: '10px',
    margin: 'auto',
  },
  root: {
    flexGrow: 1,
  },
}));