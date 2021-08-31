import React from 'react'
import { Typography, IconButton, CardMedia, TableRow, TableCell, Button, CardActions, ListItemText } from '@material-ui/core';
import {AddCircle, RemoveCircle } from '@material-ui/icons/';
import useStyles from './styles';
import Book from '../../Products/Product/Book/Book'

const CartItem = ({ product, item, onUpdateCartQty, onRemoveFromCart }) => {
    const classes = useStyles();

    return (
      <>
      <TableRow key={item.name} className={classes.row}>
        <TableCell>
          {item.name}
          { window.innerWidth < 1000 ? 
          <CardMedia image={item.media.source} alt={item.name} className={classes.media}/> : 
          <Book product={product[0]} className={classes.book}/> }
        </TableCell>
        <TableCell align="left">
               <div className={classes.quantity}>
                   <Typography>{item.quantity}</Typography>
               </div>
          </TableCell>
        <TableCell align="left">
          {/* <Typography variant="body1">{item.price.formatted_with_symbol}</Typography> */}
        <ListItemText primary={item.price.formatted_with_symbol} secondary={`€${product[0].beforeTax} +${product[0].tax}% ALV`}/>
        {/* <Typography variant="caption">{`(€${product[0].beforeTax} +${product[0].tax}% ALV)`}</Typography> */}
          </TableCell>
        <TableCell align="left">
          {/* {item.line_total.formatted_with_symbol} */}
        <ListItemText primary={item.line_total.formatted_with_symbol} secondary={`€${product[0].beforeTax * item.quantity} +${product[0].tax}% ALV`}/>
        </TableCell>
        <TableCell align="left">
          <CardActions className={classes.cardActions}>
              <div className={classes.buttons}>
                <IconButton className={classes.button} onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}><AddCircle style={{ color: 'green', fontSize: '2rem' }}/></IconButton>
                <IconButton className={classes.button} onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}><RemoveCircle style={{ color: 'red', fontSize: '2rem' }} /></IconButton>
            </div>
            <Button type="button" color="secondary" variant="outlined" size="small" onClick={() => onRemoveFromCart(item.id)}>Poista tuote</Button>
            </CardActions>
          </TableCell>
      </TableRow>
        {/* // <Card>
        //     <CardMedia image={item.media.source} alt={item.name} className={classes.media}/>
        //     <CardContent className={classes.cardContent}>
        //         <Typography variant="h4">{item.name}</Typography>
        //         <Typography variant="h5">{item.line_total.formatted_with_symbol}</Typography>
        //     </CardContent>
        // </Card> */}
      </>
    )
}

export default CartItem
