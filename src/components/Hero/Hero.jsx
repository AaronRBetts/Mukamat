import React from 'react';
import { Typography, Button, Fade } from '@material-ui/core';

import useStyles from './styles';

const Hero = () => {
    const classes = useStyles();

    return(
        <Fade in timeout={1500}>
        <div className={classes.HeroSection}>
        <Fade in timeout={2500}>
            <div className={classes.HeroTitle}>
                <Typography variant="h1">Mukamat</Typography>
                <Typography variant="h4">Suomen ja englannin kielen oppima­teri­aalia erityisen tuen tarpeessa oleville oppilaille.</Typography>
                <Button variant="contained" color="primary">Tutustu oppimateriaaleihimme</Button>
                <Button variant="outlined" color="primary">Tutustu oppimateriaaleihimme</Button>
            </div>
        </Fade>
            {/* <Paper className={classes.ImageContainer}>
                <Image cover src={HeroImage} className={classes.HeroImage} />
            </Paper> */}
        <h5 className={classes.Watermark}>Authored by Birgit Saatsi</h5>
        </div>
        </Fade>
    )
}

export default Hero;