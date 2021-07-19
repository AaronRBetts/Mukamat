import { makeStyles } from '@material-ui/core/styles';
import Image from '../../images/Herobg3.png'

export default makeStyles((theme) => ({
    HeroSection: {
        marginTop: '64px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        height: '720px',
        overflow: 'hidden',/* Use for Safari 9+, Edge 17+ (not a mistake) and iOS Safari 9.2+ */
        backgroundImage: `url(${Image})`,
        backgroundSize: 'contain', 
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top right', 
    },
    HeroTitle: {
        borderRadius: '0 20px 20px 0',
        padding: '10px',
        background: '#fafafa',
        margin: '100px auto auto 0',
        flexWrap: 'wrap',
        maxWidth: '400px',
        paddingLeft: '10px',
        '& h1': {
            lineHeight: '0.8',
            fontSize: '3em',
            margin: '10px 0',
        },
        '& h4': {
            paddingLeft: '10px',
            borderLeft: '8px solid #CE9FFC',
            fontSize: '2em',
            marginBottom: '10px'
        },
        '& button': {
            margin: '10px 20px 0 0'
        },

    },
    ImageContainer: {
        zIndex: '-1',
        right: '0',
        top: '0',
        position: 'absolute',
        height: 'auto',
        width: '1280px',
    },
    HeroImage: {
    },
    Watermark: {
        padding: '5px 10px',
        background: '#fff',
        boxShadow: '5px 5px 20px rgba(0,0,0,0.5)',
        margin: 'auto 10vw 20px 0'
    }
}));