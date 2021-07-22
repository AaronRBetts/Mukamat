import React from 'react'
import { Typography, IconButton, CardMedia, TableRow, TableCell } from '@material-ui/core';
import {AddCircle, RemoveCircle } from '@material-ui/icons/';
import useStyles from './styles';

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
    const classes = useStyles();

    return (
        <TableRow key={item.name}>
          <TableCell component="th" scope="row">
            {item.name}
          </TableCell>
          <TableCell align="right">
                 <div className={classes.buttons}>
                     <IconButton onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}><RemoveCircle style={{ color: 'red' }} /></IconButton>
                     <Typography>{item.quantity}</Typography>
                     <IconButton onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}><AddCircle style={{ color: 'green' }}/></IconButton>
                 </div>
            </TableCell>
          <TableCell align="right">{item.price.formatted_with_symbol}
            </TableCell>
          <TableCell align="right">{item.line_total.formatted_with_symbol}</TableCell>
          <TableCell align="right"><CardMedia image={item.media.source} alt={item.name} className={classes.media}/></TableCell>
        </TableRow>
        // <Card>
        //     <CardMedia image={item.media.source} alt={item.name} className={classes.media}/>
        //     <CardContent className={classes.cardContent}>
        //         <Typography variant="h4">{item.name}</Typography>
        //         <Typography variant="h5">{item.line_total.formatted_with_symbol}</Typography>
        //     </CardContent>
        //     <CardActions className={classes.cardActions}>
        //         <Button type="button" color="secondary" onClick={() => onRemoveFromCart(item.id)}>Remove</Button>
        //     </CardActions>
        // </Card>
    )
}

export default CartItem
