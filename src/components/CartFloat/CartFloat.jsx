import React from 'react'
import { IconButton, Badge, ListItem, ListItemText, Button } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

import useStyles from './styles';

const CartFloat = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation();

    return (
        <>
                {location.pathname !== ('/cart' || 'checkout') && (
                    <div className={classes.button}>
                            <Badge badgeContent={totalItems} color="secondary" anchorOrigin={{vertical: 'top', horizontal: 'left'}}>
                                <Button component={Link} to="/cart" variant="contained" color="primary" aria-label="Show cart items">
                                    <ShoppingCart style={{marginRight: '10px', color: '#ffdd59'}} /> Ostoskori
                                </Button>
                            </Badge>
                    </div>
                )}
        </>
    )
}

export default CartFloat