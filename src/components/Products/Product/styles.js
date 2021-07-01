import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    root: {
        maxWidth: '100%',
        background: 'linear-gradient(135deg, #C56CD6 0%,#3425AF 100%);',
        boxShadow: '5px 5px 10px rgba(0,0,0,0.5)',
        '& *': {
            // color: '#fff',
        }
    },
    cardActions: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
        // background: 'rgba(0,0,0,0.5)',
        borderRadius: '10px',
        '& *': {
        },
        '& p': {
            height: '5em',
        }
    },
    qtyWrapper: {
        padding: '10px',
        display: 'flex'
    },
    qtySelector: {
        margin: 'auto 20px auto 0',
        '& button': {
            margin: 'auto',
        },
    },
    BookInfo: {
        padding: '10px',
        background: 'rgba(255,255,255,0.8)',
        boxShadow: '-5px -5px 30px rgba(0,0,0,0.5)',
        '& a': {
            textDecoration: 'none',
            padding: '10px',
        },
    }
}));