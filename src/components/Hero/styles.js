import { makeStyles } from '@material-ui/core/styles';
import Blackboard from '../../images/blackboard1.png'
import Classroom from '../../images/classroom.png'

export default makeStyles((theme) => ({
    HeroSection: {
        padding: '64px auto 0',
        display: 'flex',
        flexWrap: 'wrap',
        height: '60vh',
        justifyContent: 'space-evenly',/* Use for Safari 9+, Edge 17+ (not a mistake) and iOS Safari 9.2+ */
        backgroundImage: `url(${Classroom})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    HeroTitle: {
        position: 'absolute',
        backgroundImage: `url(${Blackboard})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        top: '10%',
        zIndex: '1',
        zIndex: '10',
        // borderRadius: '10px',
        padding: '20px 30px 20px 20px',
        maxWidth: '430px',
        // boxShadow: '5px 5px 20px rgba(0,0,0,0.3)',
        margin: 'auto',
        flexWrap: 'wrap',
        // boxShadow: '0px 0px 30px rgba(0,0,0,0.3)',
        ["@media (max-width:1200px)"]: { 
            maxWidth: '350px',
        },
        '& h1': {
            color: '#fff',
            lineHeight: '0.8',
            fontSize: '3em',
            margin: '0',
            // background: '#fff',
            padding: '2px',
            paddingBottom: '10px',
            borderRadius: '5px 5px 0 0'
        },
        '& h4': {
            color: '#fff',
            padding: '2px',
            paddingLeft: '10px',
            borderLeft: '6px solid #CE9FFC',
            fontSize: '1.6em',
            marginBottom: '10px',
            // background: '#fff',
        ["@media (max-width:1200px)"]: { 
            fontSize: '1.2em',
        },
        },
        '& button': {
            margin: '10px 20px 0 0',
        },

    },
    media: {
        // zIndex: '-1',
        // position: 'absolute',
        // overflow: 'hidden',
        // width: '80%',
        // maxWidth: '1280px',
        left: '240px',
        overflow: 'hidden',
        ["@media (max-width:900px)"]: { display: 'none' },
        ["@media (max-width:1400px)"]: { height: '600px' },
        ["@media (max-width:1200px)"]: { height: '400px' },
    },
    mediaCard: {
        boxShadow: 'none',
        borderRadius: '5px',
        overflow: 'hidden',
        background: 'none',
    },
    Watermark: {
        padding: '5px 10px',
        boxShadow: '5px 5px 20px rgba(0,0,0,0.5)',
        margin: 'auto 10vw 20px 0'
    }
}));