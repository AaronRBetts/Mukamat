import React from 'react'
import { Typography, ListItem, ListItemText, List } from '@material-ui/core';

const Review = ({products, checkoutToken, shippingPrice}) => {
    console.log(checkoutToken.live.line_items)
    console.log(products)
    
    const calculateTax = (taxFree, qty) => {
        return (taxFree * qty);
    }

    return (
        <>
            <Typography variant="h6" gutterBottom>Tilauksen Yhteenveto</Typography>
            <List disablePadding>
        {checkoutToken.live.line_items.map((product) => (
            <ListItem style={{padding: '10px 0'}} key={product.name}>
                <ListItemText primary={product.name} secondary={`Kpl: ${product.quantity}`}/>
                <ListItemText style={{textAlign: 'right'}} 
                primary={product.line_total.formatted_with_symbol} 
                secondary={`€${calculateTax(products.filter(item => product.product_id === item.id)[0].beforeTax, product.quantity)} + ${products.filter(item => product.product_id === item.id)[0].tax}% ALV`}/>
            </ListItem>
        ))}
        <ListItem style={{padding: '10px 0'}} >
            <ListItemText primary={`Toimitus`}/>
            <ListItemText align="right" primary={`€${shippingPrice.toFixed(2)}`}/>
        </ListItem>
        <ListItem style={{padding: '10px 0'}}>
            <ListItemText primary="Yhteensä" />
            <ListItemText align="right" style={{fontWeight: 700}} 
            primary={`€${(checkoutToken.live.subtotal.raw + shippingPrice).toFixed(2)}`} 
            />
        </ListItem>
            </List>
        </>
    )
}

export default Review
