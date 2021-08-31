import { Paper, ListItemIcon, Typography, Table, List, ListItem, ListItemText, TableBody, makeStyles, TableCell, TableHead, TableRow } from '@material-ui/core';
import React from 'react'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const Shipping = () => {
  const classes = useStyles();
    return (
        <Paper style={{padding: '20px', margin: '64px auto 0', maxWidth: '800px'}} id="Tilausohje">
          <h1>Näin teet tilauksen</h1>

        <div class="tilausohjeet">
          <Typography variant="h4" gutterBottom style={{marginTop: '50px', borderBottom: '1px solid #ccc'}}>Tilausvaihtoehdot</Typography>
        
          <h3>Tilaus internetistä</h3>
        
         Verkkokaupastamme tilaaminen on helppoa. Toimi seuraavasti:
      
            <List>
                <ListItem>
                  <ListItemIcon>
                    1
                  </ListItemIcon>
                  <ListItemText
                    primary="Valitse haluamasi tuote, merkitse kappalemäärä ja paina Lisää koriin -painiketta. Tuotteet siirtyvät tilauskoriin."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    2
                  </ListItemIcon>
                  <ListItemText
                    primary="Painamalla Tee tilaus -painiketta siirryt tilauslomakkeelle. Tarkista vielä tilauskoriin lisäämäsi tuotteet: voit muuttaa niiden määrää tai poistaa tilauskorista tuotteita."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    3
                  </ListItemIcon>
                  <ListItemText
                    primary="Täytä huolellisesti yhteystiedot. Tähdellä merkityt kohdat ovat pakollisia."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    4
                  </ListItemIcon>
                  <ListItemText
                    primary="Kun olet täyttänyt tarvittavat kentät, klikkaa Lähetä tilaus -painiketta."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    5
                  </ListItemIcon>
                  <ListItemText
                    primary="Lähetämme sähköpostiosoitteeseesi tilausvahvistuksen käsiteltyämme tilauksen.
                    Tilausvahvistuksessa annettuna päivänä postitamme tilauksen antamaasi osoitteeseen."
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    6
                  </ListItemIcon>
                  <ListItemText
                    primary="Toimitamme laskun tilauslomakkeella valitsemallasi tavalla. Katso laskutusvaihtoehdot alla."
                  />
                </ListItem>
            </List>
        
          <h3>Tilaus puhelimitse</h3>
          <p>Mikäli haluat asioida puhelimitse kanssamme, niin soita meille Suomen Lukkari Oy 040-5051936 tai Mukamat Oy 050-345 1712.</p>
        </div>
        
                  <Typography variant="h4" gutterBottom style={{marginTop: '50px', borderBottom: '1px solid #ccc'}}>Toimitustavat ja postituskulut</Typography>
        
          <h3>Kirje/paketti tilausosoitteeseen tai lähimpään postiin</h3>
          <p>Postitamme tuotteet halvinta postitustapaa käyttäen. Paketin lähetyskulut 
            ovat Postin voimassa olevan hinnoittelun mukaiset. Paketit voi ohjata postiin 
            tai postin pakettiautomaatteihin.</p>
            <Typography variant="h6">Kirjeet</Typography>
          <Table class="hinnat">
              <TableHead>
                <TableRow class="otsikkorivi">
                  <TableCell width="50%">Koko</TableCell>
                  <TableCell>Veroton hinta</TableCell>
                  <TableCell>Hinta</TableCell>
                </TableRow>
              </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Helpostikuori A5</TableCell>
                <TableCell>2,38€</TableCell>
                <TableCell>2,95€</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Helpostikuori A4</TableCell>
                <TableCell>3,95€</TableCell>
                <TableCell>4,90€</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Kirjeet alle max 3 cm, max 2 kg</TableCell>
                <TableCell>3,95€</TableCell>
                <TableCell>4,90€</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Typography variant="h6">Paketit</Typography>
          <Table class="hinnat">
              <TableHead>
                <TableRow class="otsikkorivi">
                  <TableCell width="50%">Koko</TableCell>
                  <TableCell>Veroton hinta</TableCell>
                  <TableCell>Hinta</TableCell>
                </TableRow>
              </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Pienet paketit 11 x 36 x 60 cm</TableCell>
                <TableCell>4,76€</TableCell>
                <TableCell>5,90€</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Paketit 19 x 36 x 60 cm</TableCell>
                <TableCell>6,37€</TableCell>
                <TableCell>7,90€</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Suuret paketit 37 x 36 x 60 cm</TableCell>
                <TableCell>8,79€</TableCell>
                <TableCell>10,90€</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Lisäpalvelu: Ovelle-kuljetus</TableCell>
                <TableCell>8,79€</TableCell>
                <TableCell>10,90€</TableCell>
              </TableRow>
            </TableBody>
        </Table>
      <p>Päivyreiden tarkemmat kappalemäärään perustuvat postitushinnat löydät tuotekohtaisilta sivuilta.</p>
        
          <h3>Postin SmartPOST-pakettiautomaatti</h3>
          <p>Lähetämme tilauksesi valitsemaansi smartPost-pakettiautomaattiin. Saat tekstiviestillä 
            tiedon, kun paketti on noudettavissa. Pakettia säilytetään automaatissa seitsemän 
            vuorokautta sen saapumisesta. Lisätietoa paketin vastaanottamisesta pakettiautomaattiin 
            sekä automaattien sijainnit löydät <a href="https://support.posti.fi/fi/tyokalut/toimipisteet-ja-aukiolot.html?_ga=2.6240113.357833499.1553118821-867517416.1493464940&amp;_gac=1.54128346.1553118822.CjwKCAjwycfkBRAFEiwAnLX5IaPZroqPaH89O87X7QvKoWWdhUGhZXW6GrewM9oB8HTUTKG3dcuP7RoCVcQQAvD_BwE" target="_blank">Postin 
            sivuilta</a>. </p>
            <Typography variant="h6">SmartPOST-pakettiautomaatti</Typography>
          <Table class="hinnat">
              <TableHead>
            <Typography></Typography>
                <TableRow class="otsikkorivi">
                  <TableCell width="50%">Koko</TableCell>
                  <TableCell>Veroton hinta</TableCell>
                  <TableCell>Hinta</TableCell>
                </TableRow>
              </TableHead>
            <TableBody>
                <TableRow>
                  <TableCell>S 11*36*60cm</TableCell>
                  <TableCell>4,76€</TableCell>
                  <TableCell>5,90€</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>M 19*36*60 cm</TableCell>
                  <TableCell>6,37€</TableCell>
                  <TableCell>7,90€</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>L 37*36*60cm</TableCell>
                  <TableCell>8,79€</TableCell>
                  <TableCell>10,90€</TableCell>
                </TableRow>
            </TableBody>
        </Table>
        
            <Typography variant="h4" gutterBottom style={{marginTop: '50px', borderBottom: '1px solid #ccc'}}>Laskutus</Typography>
          <p>Kaikissa laskuissaimme on 14 vrk maksuaikaa.</p>
          <h3>Lasku tuotteiden mukana</h3>
          <p>Lähetämme laskun tuotteiden mukana antamaasi osoitteeseen.</p>
        
          <h3>Lasku laskutusosoitteeseen</h3>
          <p>Laskun lähetämme erilliseen laskutusosoitteeseen.</p>
        
          <h3>Lasku pdf-tiedostona email-osoitteeseen</h3>
          <p>Lähetämme laskun pdf-tiedostona antamaasi email-osoitteeseen.</p>
        
          <h3>Verkkolasku</h3>
          <p>Verkkolaskun lähetämme antamaanne verkkolaskuosoitteseen. Verkkolaskun lähettäminen ei ole halpaa. 
            Verkkolaskun tekemistä varten olemme maksaneet vuosittaisen verkkomaksun ylläpitomaksun kirjapito-ohjelmamme tekijälle. 
            Lisäksi olemme avanneet pankkiin erillisen maksullisen maksuohjelman, josta pankki veloittaa isohkon aloitusmaksun, 
            kuukausittaisen kuukausimaksun ja jokaisesta lähetetystä maksusta vielä erillisen lähetysmaksun. Näistä kulista huolimatta emme peri erillistä maksua verkkolaskusta. 
          </p>
            <Typography variant="h6">Laskutusvaihtoehtojen hinnat</Typography>
          <Table class="hinnat">
              <TableHead>
            <TableRow>
              <TableCell>Lasku tuotteiden mukana</TableCell>
              <TableCell>0,00€</TableCell>
            </TableRow>
              </TableHead>
            <TableBody>
            <TableRow>
              <TableCell>Erillinen laskutusosoite</TableCell>
              <TableCell>0,00€</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Lasku pdf-tiedostona sähköpostiin</TableCell>
              <TableCell>0,00€</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Verkkolasku</TableCell>
              <TableCell>0,00€</TableCell>
            </TableRow>
            </TableBody>
        </Table>
        
        <Typography variant="h4" gutterBottom style={{marginTop: '50px', borderBottom: '1px solid #ccc'}}>Fair play!</Typography>
        <p>Emme laskuta erillisiä paketointi-, toimitus- tai pienlaskutuskuluja. Laskutamme vain tuotteista ja todellisista postituskuluista. 
          Pakkaamme pienet lähetykset Postin helposti-kuoriin ja isommat kirjeet harmaaseen voimapaperiin. Pahvilaatikkomme ovat kierrätyslaatikoita. Älkää yllättykö jos viinilaatikko sisältääkin oppikirjoja. Paketointikuluja ei ole siirretty tuotteiden hintaan. 
        </p>
        
        <p><i>Palveluksessanne<br/>
        Birgit Saatsi ja Jari Leinonen</i></p>
          
        </Paper>
    )
}

export default Shipping
