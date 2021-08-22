import React from 'react';
import { Card, CardContent, CardActions, Typography, Button, Fade, Paper, FormControl, TextField } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons'
import { Link } from 'react-router-dom';
import Book from './Book/Book'

import useStyles from './styles';

const Product = ({ product, onAddToCart }) => {
    const classes = useStyles();
    const [qty, setQty] = React.useState(1);

    const handleChange = (event) => {
        setQty(event.target.value);
      };


    return (
        <Fade in timeout={1500}>
        <Card className={classes.root}>
            <Fade in timeout={2500}>
            <Book product={product}/>
            </Fade>
            <Typography variant="body2" className={classes.isbn}>{product.isbn}</Typography>
            <CardContent className={classes.BookInfo}>
                <div className={classes.cardContent}>
                    <Typography variant="h5">{product.name}</Typography>
                    <div className={classes.prices}>
                    <Typography variant="body1" >
                        {product.price.formatted_with_symbol}
                    </Typography>
                    <Typography variant="body2" className={classes.taxPrice}>
                        {product.beforeTax}
                    </Typography>
                    </div>
                </div>
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
                    <Button variant="contained" color="primary" aria-label="Lisää ostoskoriin" onClick={() => onAddToCart(product.id, qty)}>
                        <AddShoppingCart /> <Typography variant="body2">Lisää ostoskoriin</Typography>
                    </Button>

                </Paper>
                </CardActions>
                
            <Button component={Link} to={`/kirjamme/${product.permalink}`} variant="contained" fullWidth color="primary">
                Näytä Lisää
            </Button>
            </CardContent>
        </Card>
        </Fade>
    )
}

export default Product
