import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    boxShadow: '2px 5px 40px rgba(0,0,0,0.3)',
    borderRadius: '10px',
    padding: theme.spacing(3),
    maxWidth: '1280px',
    margin: 'auto',
  },
  root: {
    flexGrow: 1,
  },
}));