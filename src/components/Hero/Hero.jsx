import React from 'react';
import { Typography, Button, Fade, CardMedia, Paper } from '@material-ui/core';
import useStyles from './styles';
import bgImage from '../../images/Group1.png'
import { Link as ScrollLink } from 'react-scroll';

const Hero = () => {
    const classes = useStyles();

    return(
        <Fade in timeout={1500}>
        <div className={classes.HeroSection}>
        <Fade in timeout={2500}>
            <div className={classes.HeroTitle}>
                <Typography variant="h1">Mukamat</Typography>
                <Typography variant="h4">Suomen ja englannin kielen oppima­teri­aalia erityisen tuen tarpeessa oleville oppilaille.</Typography>
                {/* <ListItem button variant="contained" component={ScrollLink} offset={-80} smooth={true} duration={500} to="kirjamme">Tutustu oppimateriaaleihimme</ListItem> */}
                <Button variant="contained" color="primary" component={ScrollLink} offset={-80} smooth={true} duration={500} to="kirjamme">Tutustu oppimateriaaleihimme</Button>
            </div>
        </Fade>
            <Fade in timeout={1500}>
                <Paper className={classes.mediaCard}>
                    <CardMedia className={classes.media} component="img"
                image={bgImage} />
                </Paper>
            </Fade>
        </div>
        </Fade>
    )
}

export default Hero;