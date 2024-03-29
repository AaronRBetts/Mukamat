import React, { useState, useEffect } from 'react';
import { CssBaseline, Paper, Stepper, Step, StepLabel, Typography, CircularProgress, Divider, Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';

import { commerce } from '../../../lib/commerce';
import AddressForm from '../AddressForm';
import PaymentForm from '../PaymentForm';
import useStyles from './styles';

const steps = ['Tiedot', 'Maksu'];

const Checkout = ({ shippingPrice, products, cart, onCaptureCheckout, order, error, onEmailCheckout }) => {
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [activeStep, setActiveStep] = useState(0);
  const [emailOrdered, setEmailOrdered] = useState(false);
  const [shippingData, setShippingData] = useState({});
  const classes = useStyles();
  const history = useHistory();

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);
  useEffect(() => {
    if (cart) {
      const generateToken = async () => {
        try {
          const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });

          setCheckoutToken(token);
        } catch {
          if (activeStep !== steps.length) history.push('/');
        }
      };

      generateToken();
    }
  }, [cart]);

  const next = (data) => {
    setShippingData(data);
    nextStep();
  };

  const emailOrder = () => {
    setEmailOrdered(true)
  }

  let Confirmation = () => (order.customer ? (
    <>
      <div>
        <Typography variant="h5">Kiitos tilauksestasi, {order.customer.firstname} {order.customer.lastname}!</Typography>
        <Divider className={classes.divider} />
        <Typography variant="subtitle2">Tilaus numero: {order.customer_reference}</Typography>
      </div>
      <br />
      <Button component={Link} variant="outlined" type="button" to="/">Takaisin etusivulle</Button>
    </>
  ) : (
    <div className={classes.spinner}>
      <CircularProgress />
    </div>
  ));

  let EmailSent = () => (
    <>
      <Typography variant="h5">Kiitos tilauksesta!</Typography>
      <br />
      <Button component={Link} variant="outlined" type="button" to="/">Takaisin etusivulle</Button>
    </>
  )

  if (error) {
    Confirmation = () => (
      <>
        <Typography variant="h5">Tilaus epaonnistui, ota yhteyttä puhelimitse tai sähköpostilla.</Typography>
        <br />
        <Button component={Link} variant="outlined" type="button" to="/">Takaisin etusivulle</Button>
      </>
    );
  }

  const Form = () => (activeStep === 0
    ? <AddressForm shippingPrice={shippingPrice} checkoutToken={checkoutToken} nextStep={nextStep} setShippingData={setShippingData} next={next} />
    : <PaymentForm shippingPrice={shippingPrice} library={products} checkoutToken={checkoutToken} nextStep={nextStep} backStep={backStep} shippingData={shippingData} onCaptureCheckout={onCaptureCheckout} onEmailCheckout={onEmailCheckout} emailOrder={emailOrder} />);

  return (
    <>
      <CssBaseline />
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">Osto</Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? emailOrdered ? <EmailSent /> : <Confirmation /> : checkoutToken && <Form />}
        </Paper>
      </main>
    </>
  );
};

export default Checkout;