import React from 'react';
import { Grid, Typography, Card, Button } from '@material-ui/core';
import Book from './Product/Book/Book'
import Product from './Product/Product';
import useStyles from './styles';
import { AddShoppingCart } from '@material-ui/icons'

const Products = ({ products, onAddToCart }) => {
    const classes = useStyles();

    return(products.length === 1 ?
        <main className={classes.content} id="kirja">
            <Grid container justify="center" spacing={4}>
                <Book product={products[0]}/>
            <Card>
            <Typography variant="h2" gutterBottom>{products[0].name}</Typography>
            <Typography variant="p" gutterBottom dangerouslySetInnerHTML={{__html: products[0].description}}>
            </Typography>
                    <Button variant="contained" color="primary" aria-label="Add to Cart" onClick={() => onAddToCart(products[0].id, 1)}>
                        <AddShoppingCart /> <Typography variant="body2">Add to cart</Typography>
                    </Button>
            </Card>
            </Grid>
        </main>

    :
        <main className={classes.content} id="kirjamme">
            <Typography variant="h2" gutterBottom>Kirjamme</Typography>
            <Typography variant="h5" gutterBottom>
            Katso kirjavalikoimaamme, napauta kirjaa nähdäksesi lisää.</Typography>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={8} md={6} lg={4}>
                        <Product product={product} onAddToCart={onAddToCart} />
                    </Grid>
                ))}
            </Grid>
        </main>

    )

}

export default Products;