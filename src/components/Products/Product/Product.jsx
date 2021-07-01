import React from 'react';
import { Card, CardContent, CardActions, Typography, Button, Fade, Paper, InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons'
// import { Link } from 'react-router-dom';
import Book from './Book/Book'
import { BookDetails } from '../../';
import Popup from '../../Popup/Popup'

import useStyles from './styles';

const Product = ({ product, onAddToCart }) => {
    const classes = useStyles();
    const [qty, setQty] = React.useState(1);
  
    const handleChange = (event) => {
      setQty(event.target.value);
    };
    // const description = `${product.description.slice(0,200)} ...`

    return (
        <Fade in timeout={1500}>
        <Card className={classes.root}>
            <Fade in timeout={2500}>
            <Book product={product}/>
            </Fade>
            {/* <CardMedia className={classes.media} image={product.media.source} title={product.name}/> */}
            <CardContent className={classes.BookInfo}>
                <div className={classes.cardContent}>
                    <Typography variant="h6" >
                        {product.price.formatted_with_symbol}
                    </Typography>
                </div>
                <BookDetails product={product} />
                <CardActions disableSpacing className={classes.cardActions}>
                    
                <Paper className={classes.qtyWrapper}>

                    <FormControl variant="outlined" className={classes.qtySelector}>
                        <InputLabel id="demo-simple-select-outlined-label">Quantity</InputLabel>
                        <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={qty}
                        onChange={handleChange}
                        label="Quantity"
                        >
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={7}>7</MenuItem>
                        <MenuItem value={8}>8</MenuItem>
                        <MenuItem value={9}>9</MenuItem>
                        <MenuItem value={10}>10</MenuItem>
                        </Select>
                    </FormControl>
                    {/* <TextField id="qty-selector" label="Quantity" type="number" defaultValue="1" InputLabelProps={{ shrink: true, }} variant="outlined" className={classes.qtySelector}/> */}
                    <Button variant="contained" color="primary" aria-label="Add to Cart" onClick={() => onAddToCart(product.id, qty)}>
                        <AddShoppingCart /> <Typography variant="body2">Add to cart</Typography>
                    </Button>

                </Paper>
                </CardActions>
                <Popup product={product} />
                {/* <Typography dangerouslySetInnerHTML={{__html: description}} variant="body2" color="textSecondary" height="5em"></Typography> */}
            </CardContent>
        </Card>
        </Fade>
    )
}

export default Product
