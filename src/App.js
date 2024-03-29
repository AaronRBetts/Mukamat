import React, { useState, useEffect } from 'react';
import { commerce } from './lib/commerce';
import { Products, Cart, Checkout, Hero, About, Privacy, Shipping } from './components';
import { Switch, Route } from 'react-router-dom';
import CartFloat from './components/CartFloat/CartFloat'
import { Element } from 'react-scroll';
import { AdditionalFields } from './components/AdditionalFields/AdditionalFields';
import { createMuiTheme } from '@material-ui/core'

const App = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});
    const [order, setOrder] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
    const [shippingPrice, setShippingPrice] = useState(0);
    const [shippingContainers, setShippingContainers] = useState({});

    const font =  "Montserrat, sans-serif";

    const theme = createMuiTheme({
      typography: {
        fontFamily: font,
      }
    });

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();

        //merge local products object array with API products object array
        function mergeArrayObjects(productsArray, AdditionalFields) {
    
            return productsArray.map((product, i) => {
                return Object.assign({}, product, AdditionalFields[AdditionalFields.findIndex(book => book.id === product.id)])
            })
        }
        
        setProducts(mergeArrayObjects(data, AdditionalFields));
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

    const refreshCart = async () => {
        const {newCart} = await commerce.cart.refresh();
        
        setCart(newCart);
    }

    const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
        try {
            const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

            setOrder(incomingOrder);
            refreshCart();
        } catch (error) {
            setErrorMessage(error.data.error.message);
        }
    }

    const handleEmailCheckout = () => {
        handleEmptyCart();
        refreshCart();
    }

    const updateShippingPrice = (orderQty) => {
        // const response = await commerce.checkout.update({"shipping_methods":[{"id":"EASY_SHIP_123","description":"Overnight","price":9.95}])
        const qtySmContainers = orderQty % 20 < 10 ? 1 : 0;
        const qtyMdContainers = (orderQty % 20 < 15 && !qtySmContainers) ? 1 : 0;
        const qtyLgContainers = Math.floor((orderQty + 5) / 20);
        setShippingPrice(qtySmContainers * 5.9 + qtyMdContainers * 7.9 + qtyLgContainers * 10.9)
        setShippingContainers({
            qtySmContainers,
            qtyMdContainers,
            qtyLgContainers
        })
    }

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);

    useEffect(() => {
        updateShippingPrice(cart ? cart.total_items : 0)
    }, [cart]);

    return (
            <Switch>
                <Route exact path="/">
                    <CartFloat totalItems={cart ? cart.total_items : 0}/>
                    <Element name="home">
                        <Hero />
                    </Element>
                    <Element name="kirjamme">
                        <Products products={products} onAddToCart={handleAddToCart}/>
                    </Element>
                </Route>
                <Route exact path="/kirjamme">
                    <CartFloat totalItems={cart ? cart.total_items : 0}/>
                    <Products products={products} onAddToCart={handleAddToCart}/>
                </Route>
                <Route exact path="/tekijä">
                    <About />
                </Route>
                {products.map((book) => (
                    <Route exact path={`/kirjamme/${book.permalink}`} key={book.id}>
                        <CartFloat totalItems={cart ? cart.total_items : 0}/>
                        <Products products={products.filter(product => product.permalink === book.permalink)} onAddToCart={handleAddToCart}/>
                    </Route>
                ))}
                <Route exact path="/cart">
                    <Cart
                    shippingPrice={shippingPrice}
                    products={products}
                    cart={cart}
                    handleUpdateCartQty={handleUpdateCartQty}
                    handleRemoveFromCart={handleRemoveFromCart}
                    handleEmptyCart={handleEmptyCart}
                    />
                </Route>
                <Route exact path="/checkout">
                    <Checkout products={products} 
                    cart={cart} order={order} 
                    onCaptureCheckout={handleCaptureCheckout} 
                    error={errorMessage}
                    onEmailCheckout={handleEmailCheckout}
                    shippingPrice={shippingPrice}/>
                </Route>
                <Route exact path="/privacy_policy">
                    <Privacy />
                </Route>
                <Route exact path="/toimitus">
                    <Shipping />
                </Route>
            </Switch>
    )
}

export default App;