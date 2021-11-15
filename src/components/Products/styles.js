import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    zIndex: '20',
    flexGrow: 1,
    boxShadow: '2px 5px 40px rgba(0,0,0,0.3)',
    borderRadius: '10px',
    padding: theme.spacing(3),
    maxWidth: '960px',
    margin: '64px auto 0',
    background: 'white',
  },
  root: {
    flexGrow: 1,
  },
}));