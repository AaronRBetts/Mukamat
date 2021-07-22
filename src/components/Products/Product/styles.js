import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
    root: {
        maxWidth: '100%',
        background: 'linear-gradient(135deg, #C56CD6 0%,#3425AF 100%);',
        boxShadow: '5px 5px 10px rgba(0,0,0,0.5)',
        padding: '0',
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
        // background: 'rgba(0,0,0,0.5)',
        borderRadius: '10px',
        '& h4': {
            padding: '10px',
            ["@media (max-width:800px)"]: { fontSize: '1.5rem' },
        },
        '& h6': {
            padding: '10px',
            marginLeft: 'auto',
        }
    },
    qtyWrapper: {
        padding: '10px',
        display: 'flex'
    },
    qtySelector: {
        width: '100px',
        margin: 'auto 20px auto 0',
        '& button': {
            margin: 'auto',
        },
    },
    BookInfo: {
        padding: '0',
        borderRadius: '3px',
        background: 'rgba(255,255,255,0.8)',
        boxShadow: '-5px -5px 30px rgba(0,0,0,0.5)',
        '& a': {
            textDecoration: 'none',
            padding: '10px',
        },
    },
    isbn: {
        margin: '0.5em',
        color: 'white',
        fontSize: '0.9em'
    }
}));