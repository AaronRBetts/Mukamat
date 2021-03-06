import React from 'react'
import { AddShoppingCart } from '@material-ui/icons'
import { Grid, Typography, Card, Button, Fade, CardActions, Paper, FormControl, TextField, Divider, ListItem, ListItemText, Container } from '@material-ui/core';
// import Book from '../Product/Book/Book'
import { Gallery } from '../../../components'
import useStyles from './styles'
import TabPanel from './TabPanel/TabPanel'

const BookDetails = ({products, onAddToCart}) => {
    const classes = useStyles();


    const [qty, setQty] = React.useState(1);
  
    const handleChange = (event) => {
      setQty(event.target.value);
    };

    const disclaimer = `
    <div itemprop="text"><ul class="kuvaus_lista">
    <li>Harjoituskirja tavutason lukijoille.</li>
    <li>Saatavana SUURAAKKOSIN</li>
    <li>Tekijä:&nbsp;<a href="/tekijat">Birgit Saatsi / Mukamat Oy</a></li>
    </ul>
    <p class="esittely_lisainfo">Harjoituskirjat on tarkoitettu oppilaskohtaisesti käytettäviksi työkirjoiksi. Niitä ei saa kopioida.</p>
    </div>
    `



    return (

        <Fade in timeout={1500}>
        <Grid container spacing={4}>
        <Card className={classes.content} sm={12} md={6}>
                {products[0].sale ? 
                <Typography align="center" variant="h4" style={{padding: '2px 10px', backgroundColor: 'yellow',color:'red', boxShadow: '2px 2px 2px #ccc'}} >
                Marraskuun Ale! -15%
                </Typography> : <></>}
            {products[0].sale ? 
                        <ListItemText align="right" variant="h6" style={{width: 'fit-content', marginLeft: 'auto',padding: '0px 5px',borderRadius: '3px', backgroundColor: 'yellow',color:'red', boxShadow: '2px 2px 2px #ccc'}} >
                        {products[0].sale}
                        </ListItemText> : <></>}
        <ListItem style={{padding: '10px 0'}} >
            <Container>
                <Typography variant="h2" style={{color: 'rgb(26, 146, 233)'}}>{products[0].name}</Typography>
                <Typography variant="body2">{products[0].isbn}</Typography>
            </Container>
            {/* <ListItemText style={{padding: '5px'}} primary={products[0].name} secondary={products[0].isbn}/> */}

            <ListItemText align="right" style={{padding: '5px'}} primary={products[0].price.formatted_with_symbol} secondary={`€${products[0].beforeTax} +${products[0].tax}% ALV`}/>
        </ListItem>
            <Divider />
            <Typography variant="body1" gutterBottom dangerouslySetInnerHTML={{__html: products[0].description}}>
            </Typography>
            <CardActions disableSpacing className={classes.cardActions}>
                
                <Paper className={classes.qtyWrapper}>

                <FormControl variant="outlined" className={classes.qtySelector}>
                    <TextField
                    id="outlined-number"
                    label="Numero"
                    type="number"
                    value={qty}
                    onChange={handleChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    />
                    </FormControl>
                    <Button style={{ marginLeft: '10px' }} size="large" variant="contained" color="primary" aria-label="Lisää ostoskoriin" onClick={() => onAddToCart(products[0].id, qty)}>
                        <AddShoppingCart style={{color: '#ffdd59', marginRight: '10px' }} /> <Typography variant="body2">Lisää ostoskoriin</Typography>
                    </Button>

                </Paper>
            </CardActions>

        </Card>
        <Card className={classes.content} sm={12} md={6}>
            <Gallery product={products[0]} sm={12} md={4} />
        </Card>
        <TabPanel products={products} />
        {(products[0].permalink === "matti" || products[0].permalink === "vesseli") ? <Typography variant="body2" gutterBottom dangerouslySetInnerHTML={{__html: disclaimer}}></Typography>: ''}
    </Grid>
    </Fade>
    )
}

export default BookDetails
