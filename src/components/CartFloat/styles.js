import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  button: {
      position: 'fixed',
      top: '80px',
      right: '16px',
      zIndex: '100',
      background: '#3c40c6',
      boxShadow: '2px 2px 10px rgba(0,0,0,0.7), inset 10px 10px 20px rgba(255,255,255,0.2)',
      borderRadius: '50%',
      color: '#ffdd59',
      transition: 'all 0.1s ease',
      '&:hover': {

      transform: 'scale(1.05) translateY(-2px)',
      }
  }
}));