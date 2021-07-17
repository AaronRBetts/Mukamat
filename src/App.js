import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import { Products, Cart, Checkout, Hero, ProductPage } from './components';
import { Switch, Route } from 'react-router-dom';
import CartFloat from './components/CartFloat/CartFloat'
import { Element } from 'react-scroll';

const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});

    console.log(products)

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();

        setProducts(data);
    }

    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
    }

    const handleAddToCart = async (productId, quantity) => {
        const { cart } = await commerce.cart.add(productId, quantity);
    
        setCart(cart);
    }

    const handleUpdateCartQty = async (productId, quantity) => {
        const { cart } = await commerce.cart.update(productId, { quantity });

        setCart(cart);
    }

    const handleRemoveFromCart = async (productId) => {
        const { cart } = await commerce.cart.remove(productId);
        
        setCart(cart);
    }

    const handleEmptyCart = async () => {
        const { cart } = await commerce.cart.empty();
        
        setCart(cart);
    }

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);

    return (
            <Switch>
                <Route exact path="/">
                <CartFloat totalItems={cart.total_items}/>
                    <Element name="home">
                        <Hero />
                    </Element>
                    <Element name="kirjamme">
                        <Products products={products} onAddToCart={handleAddToCart}/>
                    </Element>
                </Route>
                <Route exact path="/kirjamme">
                <CartFloat totalItems={cart.total_items}/>
                    <Products products={products} onAddToCart={handleAddToCart}/>
                </Route>
                {products.map((book) => (
                    <Route exact path={`/kirjamme/${book.permalink}`} key={book.id}>
                        <Products products={products.filter(product => product.permalink == book.permalink)} onAddToCart={handleAddToCart}/>
                    </Route>
                ))}
                <Route exact path="/cart">
                    <Cart 
                    cart={cart}
                    handleUpdateCartQty={handleUpdateCartQty}
                    handleRemoveFromCart={handleRemoveFromCart}
                    handleEmptyCart={handleEmptyCart}
                    />                    
                </Route>
                <Route exact path="/checkout">
                    <Checkout cart={cart}/>
                </Route>
            </Switch>
    )
}

export default App;