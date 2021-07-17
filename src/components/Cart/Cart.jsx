import React from 'react';
import { Container, Typography, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from './styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CartItem from './CartItem/CartItem'

const Cart = ({ cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {
    const classes = useStyles();

    const EmptyCart = () => (
        <Typography variant="subtitle1">
            You have no items in your cart.
            <Link to="/" className={classes.link}> Browse the store.</Link>
        </Typography>
    )

    const FilledCart = () => (
        
        <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Kirja</TableCell>
              <TableCell align="right">Qty</TableCell>
              <TableCell align="right">each</TableCell>
              <TableCell align="right">subtotal</TableCell>
              <TableCell align="right"></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.line_items.map((item) => (
                <CartItem key={item.id} item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} />
            ))}
          </TableBody>
        </Table>
            <div className={classes.cardDetails}>
                <Typography variant="h4">
                    Total: { cart.subtotal.formatted_with_symbol }
                </Typography>
                <div>
                    <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Empty Cart</Button>
                    <Button component={Link} to="/checkout" className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
                </div>
            </div>
            {/* <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart}/>
                    </Grid>
                ))}
            </Grid> */}
        </TableContainer>
    )

    if(!cart.line_items) return 'Loading...';

    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h3" gutterBottom>Your Shopping Cart</Typography>
            { !cart.line_items.length ? <EmptyCart /> : <FilledCart /> }
        </Container>
    )
}

export default Cart
