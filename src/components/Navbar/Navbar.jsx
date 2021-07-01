import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

import useStyles from './styles';

const Navbar = ({ totalItems }) => {
    const classes = useStyles();
    const location = useLocation();

    return (
        <AppBar position="fixed" className={classes.appBar} color="inherit">
            <Toolbar>
                <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                <img src={"https://via.placeholder.com/25"} alt="NavbarLogo" heigh="25px" className={classes.image} />
                Mukamat
                </Typography>
                <div className={classes.grow}>
                    <Typography className={classes.navLinks} component={Link} to={'/products/'} variant="h6">Kirjamme</Typography>
                    <Typography className={classes.navLinks} component={Link} to={'/about/'} variant="h6">about us</Typography>
                    <Typography className={classes.navLinks} component={Link} to={'/contact/'} variant="h6">contact</Typography>
                </div>
                {location.pathname === '/' && (
                    <div className={classes.button}>
                        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div>
                )}
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
