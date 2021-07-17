import React from 'react'
import { IconButton, Badge } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

import useStyles from './styles';

const CartFloat = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation();

    return (
        <>
                {location.pathname === '/' && (
                    <div className={classes.button}>
                        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                )}
        </>
    )
}

export default CartFloat