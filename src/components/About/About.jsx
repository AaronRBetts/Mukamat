import { Container, Typography, CardMedia } from '@material-ui/core';
import React from 'react'
import useStyles from './styles';
import Author from '../../images/Author.jpg'

const About = () => {
    const classes = useStyles();
    return (
        <Container className={classes.about} id="tekijät">
            <Container>

            </Container>
        <Container className={classes.header} lg={6} sm={12}>
            <Typography variant="h3">Birgit Saatsi</Typography>
            <Typography variant="subtitle2">Erityisluokanopettaja</Typography>
            <Typography variant="subtitle2">Owner & Author - Mukamat Oy</Typography>
        </Container>
            <CardMedia className={classes.media} component="img"
        image={Author} />
            <br />
            <Typography gutterBottom variant="body1">Mukamat oy on Tampereella yli 10 vuotta toiminut oppimateriaalia tuottava ja kustantava yhtiö. Alussa keskityimme äidinkielen oppimateriaalin valmistamiseen. Viime vuosina olemme laajentaneet toimintaamme ja valmistamme erityisopetuksen tarpeeseen myös englannin kielen materiaalia – Easy English.</Typography>
            <Typography variant="body1">Harjoituskirjojen lisäksi olemme valmistaneet myös pelejä; äidinkieleen, englannin opetukseen sekä aina niin haastavaan kertotauluun. Kaikessa oppimateriaalissa on erityisesti huomioitu oppimisvaikeuksista kärsivät oppilaat. Olemme saaneet runsaasti kiitosta materiaalimme selkeydestä, monipuolisuudesta ja johdonmukaisuudesta, sekä palautetta siitä miten hyviä oppimistuloksia kirjojen avulla on saatu. Kirjojen tekijä on erityisluokanopettaja Birgit Saatsi, jolla on pitkä käytännön kokemus erityisoppilaiden opettajana. Harjoituskirjat ovat ”aapisesta vapaita” itsenäisen työskentelyn mahdollistavia kirjoja. Niiden avulla oppilas voi vaivattomasti seurata ja arvioida äidinkielen taitojensa kehittymistä. MUKAMAT:n kirjat soveltuvat laajalle käyttäjäkunnalle: starttiluokalle, valmistavaan opetukseen, erityisopetukseen sekä S-2-opetukseen.</Typography>
        </Container>
    )
}

export default About
