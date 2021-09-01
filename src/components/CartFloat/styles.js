import { makeStyles } from '@material-ui/core/styles';


export default makeStyles((theme) => ({
  button: {
      position: 'fixed',
      top: '16px',
      right: '16px',
      zIndex: '1200',
      background: '#3f51b5',    
      boxShadow: '0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)',
      borderRadius: '5px',
      color: '#ffdd59',
      transition: 'all 0.1s ease',
      ["@media (max-width:600px)"]: { 
        borderRadius: '0 0 0 5px',
        top: '10px',
        right: '10px',
      }
  }
}));