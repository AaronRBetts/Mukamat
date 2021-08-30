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

const Cart = ({ products, cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {
    const classes = useStyles();


    const EmptyCart = () => (
        <Typography variant="subtitle1">
            Sinulla ei ole valituna tuotteita ostoskoriin.
            <Link to="/" className={classes.link}> Jatka Ostoksiasi</Link>
        </Typography>
    )

    const FilledCart = () => (
            <TableContainer component={Paper} className={classes.paper}>
            {console.log(products)}
            {console.log(cart.line_items)}
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Kirja</TableCell>
                  <TableCell align="left">Kpl</TableCell>
                  <TableCell align="left">Hinta/Kpl</TableCell>
                  <TableCell align="left">Yhteensä</TableCell>
                  <TableCell align="left"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cart.line_items.map((item) => (
                    <CartItem product={products.filter(product => product.id === item.product_id)} key={item.id} item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} />
                ))}
              </TableBody>
            </Table>
                <div className={classes.cartDetails}>
                    <Typography variant="h6">
                    Yhteensä: { cart.subtotal.formatted_with_symbol }
                    </Typography>
                    <div style={{display: "grid"}}>
                        <Button className={classes.emptyButton} type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Tyhjenna Ostoskori</Button>
                        <Button component={Link} to="/checkout" className={classes.checkoutButton} type="button" variant="contained" color="primary">Maksu</Button>
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
    if(!products.length) return 'Loading...';

    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h4" gutterBottom>Ostoskori</Typography>
            { !cart.line_items.length ? <EmptyCart /> : <FilledCart /> }
        </Container>
    )
}

export default Cart
