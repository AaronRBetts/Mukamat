import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

const Products = ({ products, onAddToCart }) => {
    const classes = useStyles();

    return(
        <main className={classes.content}>
            <Typography variant="h2" gutterBottom>Kirjamme</Typography>
            <Typography variant="h5" gutterBottom>Take a look at a selection of our books, hover your mouse over the book to learn more</Typography>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} onAddToCart={onAddToCart} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products;