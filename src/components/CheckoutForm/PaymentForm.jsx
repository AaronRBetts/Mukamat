import React, { useState } from 'react';
import { Typography, Button, Divider, Paper } from '@material-ui/core';
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';import { init, sendForm } from 'emailjs-com';

import Review from './Review';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const PaymentForm = ({ library, checkoutToken, nextStep, backStep, shippingData, onCaptureCheckout, emailOrder }) => {

  const products = 
    checkoutToken.live.line_items.map((product, key) => (
      `
      <h4>${product.product_name}.</h4>
      <h5> Kpl: ${product.quantity}</h5>
      <h5>subtotal: ${product.line_total.formatted_with_symbol}</h5>
      `
    ))


  const handleSubmit = async (event, elements, stripe) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({ type: 'card', card: cardElement });

    if (error) {
      console.log('[error]', error);
    } else {
      const orderData = {
        line_items: checkoutToken.live.line_items,
        customer: { firstname: shippingData.firstName, lastname: shippingData.lastName, email: shippingData.email },
        shipping: { 
          name: 'Domestic', 
          street: shippingData.address1, 
          town_city: shippingData.city, 
          county_state: shippingData.shippingSubdivision, 
          postal_zip_code: shippingData.zip, 
          country: shippingData.shippingCountry },
        billing: { 
          name: `${shippingData.billingFirstName} ${shippingData.billingLastName}`, 
          street: shippingData.billingAddress1, 
          town_city: shippingData.billingCity, 
          postal_zip_code: shippingData.billingZip, 
          county_state: shippingData.billingSubdivision, 
          country: shippingData.shippingCountry },
          extra_fields: { extr_A12JwrBdYwPjnk: shippingData.phone },
        fulfillment: { shipping_method: shippingData.shippingOption },
        payment: {
          gateway: 'stripe',
          stripe: {
            payment_method_id: paymentMethod.id,
          },
        },
      };



      onCaptureCheckout(checkoutToken.id, orderData);

      nextStep();
    }
  };

  const handleOrder = (event) => {
    event.preventDefault();

    init("user_UlEkvyF6hcTIAJCk8jXLL");
    
    sendForm('service_68slppa', 'template_lxl5e5n', '#contact-form')
      .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
      }, function(error) {
      console.log('FAILED...', error);
    });

    emailOrder();
    nextStep();
  }

  return (
    <>
      <Review products={library} checkoutToken={checkoutToken} />
      <Divider />
      <form id="contact-form">
        <Button variant="contained" fullWidth color="primary" onClick={(e) => handleOrder(e)}>Tilaa lasku</Button>
        <input type='hidden' name='contact_number' value={shippingData.phone} />
        <input type='hidden' name='cust_name' value={`${shippingData.firstName} ${shippingData.lastName}`} />
        <input type='hidden' name='products' value={products} />
        <input type='hidden' name='cust_email' value={shippingData.email} />
        <input type='hidden' name='address' value={shippingData.address1} />
        <input type='hidden' name='city' value={shippingData.city} />
        <input type='hidden' name='area' value={shippingData.shippingSubdivision} />
        <input type='hidden' name='zip' value={shippingData.zip} />
        <input type='hidden' name='b_cust_name' value={`${shippingData.billingFirstName} ${shippingData.billingLastName}`} />
        <input type='hidden' name='b_contact_number' value={shippingData.billingPhone} />
        <input type='hidden' name='b_cust_email' value={shippingData.billingEmail} />
        <input type='hidden' name='b_address' value={shippingData.billingAddress1} />
        <input type='hidden' name='b_city' value={shippingData.billingCity} />
        <input type='hidden' name='b_area' value={shippingData.billingSubdivision} />
        <input type='hidden' name='b_zip' value={shippingData.billingZip} />
        <input type='hidden' name='total' value={checkoutToken.live.subtotal.formatted_with_symbol} />
      </form>
      <Paper style={{ padding: '0 10px 10px' }}>
      <Typography variant="h6" gutterBottom style={{ margin: '20px 0', textAlign: 'center' }}>Tai maksa kortilla</Typography>
      <Divider />
      <Elements stripe={stripePromise}>
        <ElementsConsumer>{({ elements, stripe }) => (
          <form onSubmit={(e) => handleSubmit(e, elements, stripe)}>
            <br />
            <CardElement 
              options={{
                style: {
                  base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                      color: '#aab7c4',
                    },
                  },
                },
              }}/>
            <br /> <br />
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button variant="outlined" onClick={backStep}>Back</Button>
              <Button type="submit" variant="contained" disabled={!stripe} color="primary">
                Pay {checkoutToken.live.subtotal.formatted_with_symbol}
              </Button>
            </div>
          </form>
        )}
        </ElementsConsumer>
      </Elements>
      </Paper>
    </>
  );
};

export default PaymentForm;