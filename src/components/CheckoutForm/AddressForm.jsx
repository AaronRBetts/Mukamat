import React, { useState, useEffect } from 'react';
import { InputLabel, Select, MenuItem, Button, Grid, Typography, Divider, CircularProgress, Card } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import { Link } from 'react-router-dom';

import { commerce } from '../../lib/commerce';
import FormInput from './CustomTextField';

const AddressForm = ({ shippingPrice, checkoutToken, next }) => {
  const [shippingCountries, setShippingCountries] = useState([]);
  const [shippingCountry, setShippingCountry] = useState('');
  const [shippingSubdivisions, setShippingSubdivisions] = useState([]);
  const [shippingSubdivision, setShippingSubdivision] = useState('');
  const [billingSubdivision, setBillingSubdivision] = useState('');
  const [shippingOptions, setShippingOptions] = useState([]);
  const [shippingOption, setShippingOption] = useState('');
  const methods = useForm();

  useEffect(() => {
    fetchShippingCountries(checkoutToken.id);
  }, );

  useEffect(() => {
    if (shippingCountry) fetchSubdivisions(shippingCountry);
  }, [shippingCountry]);

  useEffect(() => {
    if (shippingSubdivision) fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision);
  }, [shippingSubdivision]);

  const fetchShippingCountries = async (checkoutTokenId) => {
    const { countries } = await commerce.services.localeListShippingCountries(checkoutTokenId);

    setShippingCountries(countries);
    setShippingCountry(Object.keys(countries)[0]);
  };

  const fetchSubdivisions = async (countryCode) => {
    const { subdivisions } = await commerce.services.localeListSubdivisions(countryCode);

    setShippingSubdivisions(subdivisions);
    setShippingSubdivision(Object.keys(subdivisions)[0]);
    setBillingSubdivision(Object.keys(subdivisions)[0]);
  };

  const fetchShippingOptions = async (checkoutTokenId, country, stateProvince = null) => {
    const options = await commerce.checkout.getShippingOptions(checkoutTokenId, { country, region: stateProvince });

    setShippingOptions(options);
    setShippingOption(options[0].id);
  };

  const Spinner = () => {
    <div>
      <CircularProgress />
    </div>
  }

  return (
    <>
      <Typography variant="h6" gutterBottom>Toimitus Osoite</Typography>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((data) => next({ ...data, shippingCountry, shippingSubdivision, shippingOption, billingSubdivision }))}>
          <Grid container spacing={3}>
            <FormInput required name="firstName" label="Etunimi" />
            <FormInput required name="lastName" label="Sukunimi" />
            <FormInput required name="address1" label="Osoite" />
            <FormInput name="phone" label="Puhelinnumero" />
            <FormInput required name="email" label="Sähköposti" />
            <FormInput required name="city" label="Kaupinki" />
            <FormInput required name="zip" label="Postinumero" />
            <Grid item xs={12} sm={6}>
              <InputLabel>Maa</InputLabel>
              <Select value={shippingCountry} fullWidth onChange={(e) => setShippingCountry(e.target.value)}>
                {Object.entries(shippingCountries).map(([code, name]) => ({ id: code, label: name })).map((item) => (
                  <MenuItem key={item.id} value={item.id}>
                    {item.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>
          <br />
          <br />
          <Divider />
          <Typography variant="h6" gutterBottom>Laskutus Osoite</Typography>
          <Grid container spacing={3}>
            <FormInput name="billingFirstName" label="Etunimi" />
            <FormInput name="billingLastName" label="Sukunimi" />
            <FormInput name="billingAddress1" label="Osoite" />
            <FormInput name="billingPhone" label="Puhelinnumero" />
            <FormInput name="billingEmail" label="Sähköposti" />
            <FormInput name="billingCity" label="Kaupinki" />
            <FormInput name="billingZip" label="Postinumero" />
              <FormInput messageBox name="message" label="Jätä viesti" style={{height: '200px'}} />
          </Grid>
          <br />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button component={Link} variant="outlined" to="/cart">Takaisin ostoskoriin</Button>
            <Button type="submit" variant="contained" color="primary">Seuraava</Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default AddressForm;