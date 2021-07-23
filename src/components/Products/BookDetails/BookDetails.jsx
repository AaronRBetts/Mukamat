import React from 'react'
import { AddShoppingCart } from '@material-ui/icons'
import { Grid, Typography, Card, Button, Fade, CardActions, Paper, FormControl, TextField } from '@material-ui/core';
import Book from '../Product/Book/Book'
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
        <Book product={products[0]}/>
        <Card className={classes.content} sm={12} md={8}>
        <Typography variant="h2">{products[0].name}</Typography>
        <Typography variant="body2">{products[0].isbn}</Typography>
        <Typography variant="h6" gutterBottom>{products[0].price.formatted_with_symbol}</Typography>
        <Typography variant="body2" gutterBottom>{products[0].beforeTax}</Typography>
        <Typography variant="body1" gutterBottom dangerouslySetInnerHTML={{__html: products[0].description}}>
        </Typography>
                <CardActions disableSpacing className={classes.cardActions}>
                    
                <Paper className={classes.qtyWrapper}>

                    <FormControl variant="outlined" className={classes.qtySelector}>
                    <TextField
                    id="outlined-number"
                    label="Number"
                    type="number"
                    value={qty}
                    onChange={handleChange}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    variant="outlined"
                    />
                    </FormControl>
                    <Button size="large" variant="contained" color="primary" aria-label="Add to Cart" onClick={() => onAddToCart(products[0].id, qty)}>
                        <AddShoppingCart /> <Typography variant="body2">Add to cart</Typography>
                    </Button>

                </Paper>
                </CardActions>
        

    </Card>
        <TabPanel products={products} />
        {(products[0].permalink === "matti" || products[0].permalink === "vesseli") ? <Typography variant="body2" gutterBottom dangerouslySetInnerHTML={{__html: disclaimer}}></Typography>: ''}
    </Grid>
    </Fade>
    )
}

export default BookDetails
