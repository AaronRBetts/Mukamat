import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './styles';
import BookDetails from './BookDetails/BookDetails'

const Products = ({ products, onAddToCart }) => {
    const classes = useStyles();
    console.log(products)

    return(products.length === 1 ?
        <main className={classes.content} id="kirja">
        <BookDetails products={products} onAddToCart={onAddToCart} />
        </main>

    :
        <main className={classes.content} id="kirjamme">
            <Typography variant="h2" gutterBottom>Kirjamme</Typography>
            <Typography variant="h5" gutterBottom>
            Katso kirjavalikoimaamme, napauta kirjaa nähdäksesi lisää.</Typography>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} sm={12} md={6} lg={6} xl={4}>
                        <Product product={product} onAddToCart={onAddToCart} />
                    </Grid>
                ))}
            </Grid>
        </main>

    )

}

export default Products;