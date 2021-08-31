import React from 'react';
import { Container, Typography, Button, ListItemText, Fade } from '@material-ui/core';
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

const Cart = ({ shippingPrice, products, cart, handleUpdateCartQty, handleRemoveFromCart, handleEmptyCart }) => {
    const classes = useStyles();

    const EmptyCart = () => (
        <Typography variant="subtitle1">
            Sinulla ei ole valituna tuotteita ostoskoriin.
            <Link to="/" className={classes.link}> Jatka Ostoksiasi</Link>
        </Typography>
    )

    const FilledCart = () => (
            <TableContainer component={Paper} className={classes.paper}>
                <Fade in out timeout={1500}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">Kirja</TableCell>
                  <TableCell align="left">Kpl</TableCell>
                  <TableCell align="left">Hinta/Kpl</TableCell>
                  <TableCell align="left">Yhteensä</TableCell>
                  <TableCell style={{width: '225px'}} align="left"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cart.line_items.map((item) => (
                    <CartItem product={products.filter(product => product.id === item.product_id)} key={item.id} item={item} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} />
                ))}
              </TableBody>
            </Table>

                </Fade>
            <Paper className={classes.paper}>
                <div className={classes.cartDetails}>
                    <ListItemText style={{padding: '5px'}} primary={'Toimitus:'} secondary={`€${shippingPrice.toFixed(2)}`}/>
                    <ListItemText style={{padding: '5px'}} primary={'Tuotteiden hinta:'} secondary={cart.subtotal.formatted_with_symbol}/>
                    <ListItemText style={{padding: '5px'}} primary={'Yhteensä:'} secondary={`€${(shippingPrice + cart.subtotal.raw).toFixed(2)}`}/>
                    <div style={{display: "grid"}}>
                        <Button className={classes.emptyButton} type="button" variant="contained" color="secondary" onClick={handleEmptyCart}>Tyhjenna Ostoskori</Button>
                        <Button component={Link} to="/checkout" className={classes.checkoutButton} type="button" variant="contained" color="primary">Maksu</Button>
                    </div>
                </div>
                </Paper>
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
